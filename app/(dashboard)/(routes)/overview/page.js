'use client'
import React, { useState } from 'react'
import { Upload, Download, HardDrive, Activity, File, BarChart2 } from 'lucide-react'

const IconCard = ({ icon: Icon, title, value, color, darkMode }) => (
  <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
    <div className="flex justify-between items-center mb-2">
      <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</h3>
      <Icon className={`h-4 w-4 text-${color}-500`} />
    </div>
    <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{value}</p>
  </div>
)

const ProgressBar = ({ value, max, darkMode }) => (
  <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
    <div
      className="bg-blue-600 h-2.5 rounded-full"
      style={{ width: `${(value / max) * 100}%` }}
    ></div>
  </div>
)

const TopSharedFile = ({ fileName, fileType, shares, size, darkMode }) => (
  <div className={`flex items-center justify-between py-3 ${darkMode ? 'border-gray-700' : 'border-gray-200'} border-b last:border-b-0`}>
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <File className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
      </div>
      <div>
        <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{fileName}</p>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{fileType} • {size}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <BarChart2 className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{shares}</span>
    </div>
  </div>
)

export default function AnalyticsDashboard() {
  const [darkMode, setDarkMode] = useState(false)

  const topSharedFiles = [
    { fileName: "Q4 Financial Report", fileType: "PDF", shares: 245, size: "3.2 MB" },
    { fileName: "Product Roadmap 2024", fileType: "PPTX", shares: 189, size: "5.7 MB" },
    { fileName: "Team Building Event", fileType: "JPG", shares: 156, size: "2.1 MB" },
    { fileName: "Client Proposal Template", fileType: "DOCX", shares: 134, size: "1.8 MB" },
    { fileName: "Annual Survey Results", fileType: "XLSX", shares: 112, size: "4.5 MB" },
  ]

  return (
    <div className={`p-4 space-y-4 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Analytics Overview</h1>
        <button
          className={`py-1 px-4 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <IconCard icon={Upload} title="Files Uploaded" value="1,234" color="blue" darkMode={darkMode} />
        <IconCard icon={Download} title="Downloads" value="5,678" color="green" darkMode={darkMode} />
        <IconCard icon={HardDrive} title="Storage Used" value="50 GB" color="yellow" darkMode={darkMode} />
        <IconCard icon={Activity} title="Active Users" value="789" color="red" darkMode={darkMode} />
      </div>

      <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Top Shared Files</h2>
        <div className="space-y-2">
          {topSharedFiles.map((file, index) => (
            <TopSharedFile
              key={index}
              fileName={file.fileName}
              fileType={file.fileType}
              shares={file.shares}
              size={file.size}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>

      <div className={`rounded-lg shadow-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Available Bandwidth</h2>
        <ProgressBar value={65} max={100} darkMode={darkMode} />
        <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>65 GB used out of 100 GB</p>
      </div>
    </div>
  )
}