import React from 'react';
import { Shield, Zap, Globe, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-blue-500">
    <Icon className="w-12 h-12 mb-4 text-blue-400" strokeWidth={1.5} />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 opacity-50" />
    <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundPattern />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <div className="bg-gray-800 bg-opacity-50 text-sm inline-block px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            <span role="img" aria-label="rocket" className="mr-2">
              🚀
            </span>
            Trusted by Over 1 Million Users Worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Revolutionize Your
            <br />
            <span className="text-blue-400">File Sharing</span> Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Unlock seamless, secure, and instant file transfers. Share, manage, and collaborate
            effortlessly, with the ability to scale and integrate across multiple platforms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              Start Sharing <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm">
              Explore Features
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Shield}
            title="Secure Transfer"
            description="FileShare ensures your files reach their destination instantly, with top-notch security."
          />
          <FeatureCard
            icon={Zap}
            title="Seamless Integration"
            description="Enjoy a streamlined sharing experience, from business documents to personal media."
          />
          <FeatureCard
            icon={Globe}
            title="Multi-Platform Support"
            description="Effortlessly share across multiple devices and platforms. FileShare simplifies cross-platform sharing."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
