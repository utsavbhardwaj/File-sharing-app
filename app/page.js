import Image from "next/image";
import Header from './_components/Header'
import Hero from './_components/Hero'
import After from './_components/After'
import Aim from './_components/Aim'
import Features from './_components/Features'
import Trusted from './_components/Trusted'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export default function Home() {
  return (
   
     <div style={{color: 'black', backgroundColor: 'white'}}>

      <Header/>
      <Hero/>
      <Trusted/>
      <After/>
      <Aim/>
      <Features/>
     </div>
    
   
   
  );
}
