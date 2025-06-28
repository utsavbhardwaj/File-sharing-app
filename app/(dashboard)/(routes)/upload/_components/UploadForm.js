import React, { useState } from 'react';
import AlertMsg from './AlertMsg';
import FilePreview from './FilePreview';
import ProgressBar from './ProgressBar';

function UploadForm({ uploadBtnClick, progress }) {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const onFileSelect = (file) => {
    if (file && file.size > 20971520) { // 20MB
      setErrorMsg('Maximum File Upload Size is 20MB');
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };

  return (
    <div className="text-center w-full max-w-xl">
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col 
          items-center justify-center w-full h-64 border-2
          border-blue-300 border-dashed rounded-lg cursor-pointer
          bg-blue-50 dark:hover:bg-bray-800 dark:bg-gray-700
          hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-12 h-12 mb-4 text-blue-500 dark:text-gray-400" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 
                6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 
                5.017 5.071 5 5 5a4 4 0 0 0 0 
                8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or <strong className="text-primary">drag</strong> and <strong className="text-primary">drop</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (Max Size: 20MB)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(e) => onFileSelect(e.target.files[0])} />
        </label>
      </div>

      {errorMsg && <AlertMsg msg={errorMsg} />}
      {file && <FilePreview file={file} removeFile={() => setFile(null)} />}

      {progress > 0 ? (
        <ProgressBar progress={progress} />
      ) : (
        <button
          disabled={!file}
          className="p-2 bg-blue-600 text-white w-[30%] rounded-full mt-5 disabled:bg-gray-400"
          onClick={() => file && uploadBtnClick(file)}
        >
          Upload
        </button>
      )}
    </div>
  );
}

export default UploadForm;
