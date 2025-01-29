import React from 'react';
import { Download, TowerControl as GameController, Users, Shield, Sparkles, ChevronRight, Github, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main glow effects */}
        <div className="absolute w-[800px] h-[800px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-pulse-slow left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {/* Large particles */}
          <div className="particle absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full mix-blend-screen filter blur-xl animate-float"></div>
          <div className="particle absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl animate-float animate-float-delay-1"></div>
          <div className="particle absolute top-1/2 left-1/2 w-56 h-56 bg-yellow-500/20 rounded-full mix-blend-screen filter blur-xl animate-float animate-float-delay-2"></div>
          
          {/* Medium particles */}
          <div className="particle absolute top-1/3 right-1/3 w-32 h-32 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-lg animate-float animate-float-delay-3"></div>
          <div className="particle absolute bottom-1/4 right-1/2 w-40 h-40 bg-blue-500/20 rounded-full mix-blend-screen filter blur-lg animate-float animate-float-delay-4"></div>
          
          {/* Small particles */}
          <div className="particle absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full mix-blend-screen filter blur-md animate-float"></div>
          <div className="particle absolute bottom-1/3 left-1/3 w-20 h-20 bg-pink-400/30 rounded-full mix-blend-screen filter blur-md animate-float animate-float-delay-2"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8" />
              <span className="text-2xl font-bold">Ventures</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-purple-300 transition">Features</a>
              <a href="#download" className="hover:text-purple-300 transition">Download</a>
              <a href="#about" className="hover:text-purple-300 transition">About</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold mb-8">
            Elevate Your Roblox Experience
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Ventures provides cutting-edge services to enhance your Roblox development journey. Build, create, and succeed with our powerful tools.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg flex items-center space-x-2 transition transform hover:scale-105">
              <Download className="w-5 h-5" />
              <span>Download Now</span>
            </button>
            <button className="border border-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg flex items-center space-x-2 transition transform hover:scale-105">
              <ChevronRight className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <GameController className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Game Enhancement</h3>
              <p>Advanced tools and utilities to enhance your Roblox game development process.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Shield className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Security First</h3>
              <p>Built-in security features to protect your games and players.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <Users className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-2xl font-bold mb-4">Community Tools</h3>
              <p>Integrated social features to build and manage your gaming community.</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="container mx-auto px-6 py-20">
          <div className="bg-white/10 rounded-2xl p-12 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-4xl font-bold text-center mb-8">Ready to Get Started?</h2>
            <p className="text-center mb-12">Download Ventures now and transform your Roblox development experience.</p>
            <div className="flex justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 px-12 py-4 rounded-lg flex items-center space-x-3 transition transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                <Download className="w-6 h-6" />
                <span className="text-lg">Download for Windows</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="w-6 h-6" />
              <span className="text-xl font-bold">Ventures</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-300 transition transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-300 transition transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>&copy; 2024 Ventures. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;