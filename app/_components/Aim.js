import React from 'react'

function Aim() {
  return (
    <div>
      <section className="overflow-hidden bg-customBlue sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-200 md:text-3xl">
        Why File share App ?
      </h2>

      <p className="text-white md:mt-8 md:block text-lg">

      Struggling with sharing large files? 
      File Share Application lets you send high-quality media securely through password-protected links and direct email.
       Overcome the limitations of platforms like WhatsApp and Telegram with our fast upload and download speeds. 
       Perfect for content creators and media agencies, it ensures seamless collaboration by easily sharing raw footage and final videos. Enjoy efficient, secure file sharing tailored to your professional needs.
      </p>

      
    </div>
  </div>

  <img 
  alt="" 
  src="/aimicon.png" 
  className="w-full max-w-md mx-auto object-cover rounded-lg 
             sm:h-[calc(90%_-_2rem)] sm:self-end sm:rounded-ss-[30px] 
             md:h-[calc(90%_-_4rem)] md:rounded-ss-[60px] 
             lg:h-[calc(90%_-_4rem)] xl:h-[400px] pb-6"

/>


</section>
    </div>
  )
}
export default Aim;