import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function TopHeader({ setToggleBar }) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end bg-gray-800'>
      <AlignJustify className='md:hidden' onClick={() => setToggleBar(true)} />
      <Link href="/">
        <Image
          src='/logo.svg'
          alt='logo'
          width={60}
          height={40}
          className='md:hidden cursor-pointer'
        />
      </Link>
      <UserButton />
    </div>
  );
}

export default TopHeader;