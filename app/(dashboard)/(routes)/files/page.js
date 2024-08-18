"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from './../../../../firebaseConfig'
import TotalFileCard from './_components/TotalFileCard'
import FileList from './_components/FileList'
import Link from 'next/link';
import Image from 'next/image';

function Files() {
  const db = getFirestore(app);
  const {user}=useUser();
  const [fileList,setFileList]=useState([]);

  useEffect(()=>{
    user&&getAllUserFiles();
  },[user])

  const getAllUserFiles=async()=>{
    const q = query(collection(db, "uploadedFile"),
     where("userEmail", "==", user.primaryEmailAddress.emailAddress));

      const querySnapshot = await getDocs(q);
      setFileList([])
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setFileList(fileList=>[...fileList,doc.data()])
      });
  }

  return (
    <div className='p-5'>
      <h2 className='text-[20px] mb-4'>My Files</h2>
    
      {fileList.length === 0 ? (
        <div className='flex flex-col items-center'>
          <h2 className='text-center mb-6'>You don't have any files</h2>
          <div className='w-full max-w-md mb-6 relative' style={{ height: '300px' }}>
  <Image
    src="/nothing-found.gif"  
    alt="No files"
    layout="fill"
    objectFit="contain"
    quality={100}
  />
</div>
          <Link 
            href={process.env.NEXT_PUBLIC_DOMAIN || '/upload'} 
            className='p-2 text-white bg-primary rounded-md'
          >
            Upload Now
          </Link>
        </div>
      ) : (
        <>
          <TotalFileCard totalFile={fileList?.length}/>
          <FileList fileList={fileList} />
        </>
      )}
    </div>
  )
}

export default Files