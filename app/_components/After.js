import React from 'react'
import { Lock, Combine, Smartphone } from 'lucide-react'

function After() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid gap-4">

              <Lock className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Secure File Transfer</h3>
              <p className="text-muted-foreground">
                Your files are encrypted end-to-end, ensuring maximum security and privacy.
              </p>
            </div>
            <div className="grid gap-4">

              <Combine className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Real-Time Collaboration</h3>
              <p className="text-muted-foreground">
                Collaborate on files in real-time with your team, no matter where you are.
              </p>
            </div>
            <div className="grid gap-4">

        
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold">Mobile Accessibility</h3>
              <p className="text-muted-foreground">
                Access your files on the go with our mobile app, available for iOS and Android.
              </p>
              </div>
          </div>
        </div>
      </section>
  )
}

export default After