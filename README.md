# 📁 File Sharing App

A simple and modern file sharing web application built using **Next.js**, **Firebase**, and **Tailwind CSS**, allowing users to securely upload and share files via download links.

Live at - https://file-sharing-app-utsavbhardwajs-projects.vercel.app/

---

## 🏗️ Architecture Overview

The app uses a **monolithic frontend** powered by Next.js and integrates with **Firebase** for storage and backend services.

### 🔧 Core Components

- **File Upload UI** – Clean drag-and-drop interface for uploading files
- **Progress Bar** – Live file upload progress tracking
- **File Preview** – Preview of selected file before upload
- **Download Link Generator** – Secure URL creation for downloading shared files
- **Alert System** – User-friendly success/error messages

### ☁️ Backend Infrastructure

- **Firebase Storage** – Handles file uploads and storage
- **Firebase Firestore** – Stores file metadata and download history
- **Firebase Hosting (optional)** – For deploying the app
- **Vercel** – Seamless CI/CD and frontend deployment

---

## 📊 System Architecture
               ┌──────────────────────────────┐
               │         Web Client           │
               │   (Next.js App on Vercel)    │
               └──────────────┬───────────────┘
                              │
                              ▼
               ┌──────────────────────────────┐
               │     Firebase Firestore       │
               │  (Stores file metadata)      │
               └──────────────────────────────┘
                              │
                              ▼
               ┌──────────────────────────────┐
               │      Firebase Storage        │
               │   (Stores uploaded files)    │
               └──────────────────────────────┘
                              │
                              ▼
               ┌──────────────────────────────┐
               │    Download Link Generator   │
               │   (Client-side logic + DB)   │
               └──────────────────────────────┘
 ---

 ## 🚀 Key Features

### 📤 File Upload & Sharing
- Upload large files (up to 20MB)
- Shareable download links
- File preview and metadata
- Clean UI with real-time upload progress

### 🔐 Security & Access
- Restrict file access via unique links
- Environment variables to protect Firebase config
- File validation and error handling

### 🎨 UI/UX
- Mobile-responsive and modern UI
- Dark mode support (toggle)
- Built using Tailwind CSS and Lucide icons

---

## 🛠️ Technology Stack

### 🧑‍💻 Frontend
- **Next.js 14** – React framework for building fast web apps
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide Icons** – Icon library for a modern look

### ☁️ Backend & Storage
- **Firebase Firestore** – NoSQL cloud database
- **Firebase Storage** – Cloud storage for user files

### ⚙️ DevOps
- **Vercel** – Deploy and preview updates automatically on push
- **.env.local** – Secure config for Firebase keys (not exposed in Git)

 ---

## 🛡️ Security

- Secure Firebase rules & CORS handling  
- Environment-based config via `.env.local`  
- File size/type validation  
- Unique download link generation  

---

## 📈 Performance

- Firebase's auto-scaling backend  
- CDN-backed file downloads  
- Optimized rendering with Next.js  
- Vercel auto-deploy & scaling

---

## 🧪 Testing & Debugging

### 🔍 Health Checks
- Console logs for upload progress
- Error alerts on invalid files or upload failure

### ✅ Manual Test Flow
1. Select a file under 20MB
2. Preview the file and click upload
3. Wait for progress bar to complete
4. Copy the download link and open in new tab
5. Ensure download starts properly

---
### Contact 📞 
Email - utsavjha.me@gmail.com
