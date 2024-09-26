import React from 'react'
import { Upload, Share2, Download, Shield, Globe, Zap, ArrowRight } from 'lucide-react'

const AnimatedIcon = ({ icon: Icon, color }) => (
  <div className={`p-4 bg-${color}-100 rounded-full relative overflow-hidden group`}>
    <Icon className={`w-8 h-8 text-${color}-600 relative z-10`} />
    <div className={`absolute inset-0 bg-${color}-200 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out rounded-full`}></div>
  </div>
)

const StepCard = ({ icon: Icon, color, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <AnimatedIcon icon={Icon} color={color} />
    <h3 className="text-xl font-semibold mt-4 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
)

const FeatureCard = ({ icon: Icon, color, title, description }) => (
  <div className="flex items-start space-x-4 bg-white bg-opacity-10 p-4 rounded-lg backdrop-filter backdrop-blur-lg">
    <AnimatedIcon icon={Icon} color={color} />
    <div>
      <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  </div>
)

export default function FileSharing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How Our File Sharing Magic Happens</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              icon={Upload}
              color="blue"
              title="Upload with Ease"
              description="Securely upload your files to our cloud with just a few clicks or drops."
            />
            <StepCard
              icon={Share2}
              color="green"
              title="Share Instantly"
              description="Generate quick links or invite collaborators to access your files."
            />
            <StepCard
              icon={Download}
              color="purple"
              title="Access Anywhere"
              description="Download or view your shared files from any device, anytime."
            />
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform skew-y-3"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-16 overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why You Need Our File Sharing Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureCard
                icon={Shield}
                color="yellow"
                title="Bank-Grade Security"
                description="Your files are protected with end-to-end encryption and secure access controls."
              />
              <FeatureCard
                icon={Globe}
                color="green"
                title="Global Accessibility"
                description="Access your files from anywhere in the world, on any device with internet."
              />
              <FeatureCard
                icon={Zap}
                color="orange"
                title="Lightning-Fast Sharing"
                description="Transfer large files in seconds, not minutes. Speed is our middle name."
              />
              <FeatureCard
                icon={ArrowRight}
                color="blue"
                title="Streamlined Workflow"
                description="Integrate with your favorite tools for a seamless work experience."
              />
            </div>
            <div className="mt-12 text-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                Start Sharing Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}