"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav'
import TopHeader from './_components/TopHeader'
import Toast from '../_components/Toast';

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`w-64 h-full flex-shrink-0 overflow-y-auto bg-white fixed md:static inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <SideNav closeSideBar={() => setIsOpen(false)} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopHeader setToggleBar={() => setIsOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
        {/* <Toast/> */}
      </div>
    </div>
  )
}

export default Layout