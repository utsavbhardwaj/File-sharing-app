import React from 'react'
import {Cross} from 'lucide-react'

function Features() {
  return (
   <div>
<section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="/upload.png"
          width="600"
          height="500"
          alt="File Sharing"
          className="rounded-xl shadow-lg"
          style={{ aspectRatio: "600/500", objectFit: "cover" }}
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Beginner-Friendly UI to Upload Files</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
          Our intuitive interface ensures a seamless experience for all users, making file uploads quick and effortless. 
          No technical skills required – just drag, drop, and share.
          </p>
          <ul className="grid gap-2 text-muted-foreground">
            <li>
            
              <Cross className="mr-2 inline-block h-4 w-4" />
              User-Friendly Design: Simple and clean layout for hassle-free navigation.
            </li>
            <li>
              <Cross className="mr-2 inline-block h-4 w-4" />
              Drag and Drop: Easily upload files with a single action.
            </li>
            <li>
              <Cross className="mr-2 inline-block h-4 w-4" />
              Quick Access: Share links and manage files in just a few clicks.
            </li>
          </ul>
        </div>
      </div>
    </section>
   </div>
  )
}

export default Features;



