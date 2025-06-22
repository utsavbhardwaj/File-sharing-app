"use client";
import React, { useCallback, useEffect, useState } from 'react';
import UploadForm from './_components/UploadForm';
import CompleteCheck from './_components/CompleteCheck';
import app from './../../../../firebaseConfig';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from './../../../_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';

function Upload() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [progress, setProgress] = useState(0);
  const [fileDocId, setFileDocId] = useState('');
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const router = useRouter();
  const storage = getStorage(app);
  const db = getFirestore(app);

  // Redirect to sign-in if user is not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  // Save file info to Firestore
  const saveInfo = useCallback(async (file, fileUrl) => {
    const docId = generateRandomString();
    setFileDocId(docId);

    try {
      await setDoc(doc(db, "uploadedFile", docId), {
        fileName: file?.name,
        fileSize: file?.size,
        fileType: file?.type,
        fileUrl: fileUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress || '',
        userName: user?.fullName || '',
        password: '',
        id: docId,
        shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}${docId}`,
      });
    } catch (error) {
      console.error("Error saving file info:", error);
    }
  }, [db, user]);

  // Upload file to Firebase Storage
  const uploadFile = useCallback((file) => {
    if (!file || !user) return;

    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, 'file-upload/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload failed:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveInfo(file, downloadURL);
        });
      }
    );
  }, [storage, user, saveInfo]);

  // Handle UI change when upload is complete
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setUploadCompleted(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Redirect to preview page after upload completes
  useEffect(() => {
    if (uploadCompleted && fileDocId) {
      const timer = setTimeout(() => {
        setUploadCompleted(false);
        router.push(`/file-preview/${fileDocId}`);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [uploadCompleted, fileDocId, router]);

  return (
    <div className="p-5 px-8 md:px-28 text-center">
      {!uploadCompleted ? (
        <div>
          <h2 className="text-[20px] text-center m-5">
            Start <strong className="text-primary">Uploading</strong> File and <strong className="text-primary">Share</strong> it
          </h2>
          <UploadForm 
            uploadBtnClick={uploadFile} 
            progress={progress}
          />
        </div>
      ) : (
        <CompleteCheck />
      )}
    </div>
  );
}

export default Upload;
