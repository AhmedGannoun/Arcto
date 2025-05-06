import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [downloadRef, downloadInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Head>
        <title>Arcto - Modern Presentation Remote Control</title>
        <meta name="description" content="Control your presentations with ease using Arcto, the modern remote control app for presentations and media." />
        <meta name="keywords" content="presentation remote, slide control, media remote, wireless presenter" />
        <meta property="og:title" content="Arcto - Modern Presentation Remote Control" />
        <meta property="og:description" content="Control your presentations with ease using Arcto, the modern remote control app for presentations and media." />
        <meta property="og:image" content="/images/arcto-preview.png" />
        <meta property="og:url" content="https://arcto.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 dark:opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn} 
          className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10"
        >
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" className="text-blue-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-circles)" />
          </svg>
        </motion.div>
        
        <motion.div variants={fadeIn} className="text-center mb-12 relative z-10">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 20px 5px rgba(59, 130, 246, 0.5)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <img src="/arcto.png" alt="Arcto Logo" className="relative w-24 h-24 rounded-xl shadow-lg bg-white dark:bg-gray-800" />
            </motion.div>
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 animate-gradient-x">Arcto</span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Your modern remote control for presentations and media
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={fadeIn} 
          className="flex flex-col sm:flex-row gap-4 mt-8 z-10"
        >
          <motion.a 
            href="/downloads/arcto-setup.exe" 
            className="group px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <motion.span 
              className="relative flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download for Windows
            </motion.span>
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="group px-8 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <motion.span 
              className="relative flex items-center"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Learn More
            </motion.span>
          </motion.a>
        </motion.div>
        
        <motion.div 
          variants={fadeIn} 
          className="mt-16 relative w-full max-w-4xl mx-auto z-10"
        >
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Window-like component for app preview */}
            <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center border-b border-gray-200 dark:border-gray-600">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                Arcto Remote Control
              </div>
              <div className="w-6"></div>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-800 flex flex-col md:flex-row gap-6">
              {/* Left side - Phone mockup */}
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-48 h-96 bg-gray-900 rounded-3xl overflow-hidden border-8 border-gray-800 shadow-lg">
                  <div className="absolute top-0 w-24 h-6 bg-gray-800 rounded-b-xl left-1/2 transform -translate-x-1/2"></div>
                  <div className="h-full w-full bg-blue-50 dark:bg-gray-900 p-2">
                    <div className="h-full w-full rounded-2xl bg-white dark:bg-gray-800 flex flex-col overflow-hidden">
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">Arcto Remote</div>
                      </div>
                      <div className="flex-1 p-4 flex flex-col items-center justify-center">
                        <motion.div 
                          className="w-full h-32 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6 flex items-center justify-center"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                          <motion.div 
                            className="w-16 h-16 bg-blue-500 rounded"
                            animate={{ x: [-20, 20, -20] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4 w-full">
                          <motion.div 
                            className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </motion.div>
                          <motion.div 
                            className="bg-blue-500 text-white p-3 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Laptop mockup */}
              <div className="md:w-2/3">
                <div className="relative">
                  <div className="rounded-t-xl bg-gray-800 p-2 flex items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-b-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-inner">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">Presentation.pptx</div>
                      </div>
                      <div className="h-40 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                        <motion.div 
                          className="text-center"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <div className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Slide Title</div>
                          <div className="flex flex-col space-y-2">
                            <div className="h-2 w-32 bg-gray-300 dark:bg-gray-600 rounded mx-auto"></div>
                            <div className="h-2 w-40 bg-gray-300 dark:bg-gray-600 rounded mx-auto"></div>
                            <div className="h-2 w-24 bg-gray-300 dark:bg-gray-600 rounded mx-auto"></div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-xs text-gray-500 dark:text-gray-400">Connected to Arcto Remote</div>
                        <div className="flex items-center text-xs text-green-500">
                          <span className="flex h-2 w-2 relative mr-1">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          Active
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
          </motion.div>
          <motion.div 
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center"
            whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="flex h-3 w-3 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">2,500+ Active Users</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features"
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Everything you need to control your presentations with ease</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Wireless Control",
              description: "Control your presentations from anywhere in the room without being tethered to your computer.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              )
            },
            {
              title: "Media Controls",
              description: "Play, pause, and navigate through media files with intuitive controls designed for presenters.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "Dark Mode",
              description: "Easily switch between light and dark themes to match your presentation environment.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )
            },
            {
              title: "Cross-Platform",
              description: "Works seamlessly across Windows, macOS, and Linux with the same intuitive interface.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              )
            },
            {
              title: "Easy Setup",
              description: "Simple one-time setup with automatic connection between your phone and computer.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )
            },
            {
              title: "Battery Efficient",
              description: "Optimized to use minimal battery power so you can present all day without worry.",
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Get started in three simple steps</p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700"
            />
            
            {/* Steps */}
            {[
              {
                title: "Download & Install",
                description: "Download the Arcto desktop application and install it on your computer.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ),
                windowContent: (
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                    <div className="animate-pulse flex space-x-4 mb-4">
                      <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-blue-100 dark:bg-blue-800 rounded"></div>
                          <div className="h-4 bg-blue-100 dark:bg-blue-800 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                      <motion.div 
                        className="w-32 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        Download
                      </motion.div>
                    </div>
                  </div>
                )
              },
              {
                title: "Connect Your Device",
                description: "Open the app on your computer and scan the QR code with your mobile device or enter the IP address.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                windowContent: (
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg flex flex-col items-center">
                    <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 border-2 border-blue-500 rounded-lg"
                        animate={{ 
                          boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      >
                        <div className="grid grid-cols-3 grid-rows-3 gap-1 p-1 h-full w-full">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-blue-500 rounded-sm"></div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
                      Scan with your mobile device
                    </div>
                  </div>
                )
              },
              {
                title: "Start Presenting",
                description: "Use your mobile device to control your presentations with intuitive gestures and controls.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                ),
                windowContent: (
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center">
                        <div className="w-full h-24 bg-blue-100 dark:bg-blue-900 rounded mb-4 flex items-center justify-center">
                          <motion.div 
                            className="w-16 h-16 bg-blue-500 rounded"
                            animate={{ x: [0, 50, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          />
                        </div>
                        <div className="flex space-x-4 mb-2">
                          <motion.div 
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </motion.div>
                          <motion.div 
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                    <motion.div 
                      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    <motion.div 
                      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Window-like component */}
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 flex items-center border-b border-gray-200 dark:border-gray-600">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                          Arcto {index === 0 ? "Installer" : index === 1 ? "Setup" : "Remote"}
                        </div>
                        <div className="w-6"></div>
                      </div>
                      {step.windowContent}
                    </motion.div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-300 rounded-full z-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 2, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <motion.section 
        id="download"
        ref={downloadRef}
        initial="hidden"
        animate={downloadInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
      >
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Presentations?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Download Arcto now and take control of your presentations</p>
        </motion.div>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-8 justify-center max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex-1"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Windows</h3>
            </div>
            <p className="mb-6">Compatible with Windows 10 and 11</p>
            <motion.a 
              href="/downloads/arcto-setup.exe" 
              className="block w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors duration-300 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for Windows
              </span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 flex-1 opacity-70"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">macOS</h3>
            </div>
            <p className="mb-6">Compatible with macOS 11 and later</p>
            <div className="block w-full py-3 px-4 bg-gray-400/20 text-white/70 rounded-lg font-medium text-center cursor-not-allowed">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 flex-1 opacity-70"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Linux</h3>
            </div>
            <p className="mb-6">Compatible with major Linux distributions</p>
            <div className="block w-full py-3 px-4 bg-gray-400/20 text-white/70 rounded-lg font-medium text-center cursor-not-allowed">
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Coming Soon
              </span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div variants={fadeIn} className="mt-12 text-center">
          <p className="text-blue-100">No smartphone app to install. Use the web app directly from your mobile browser.</p>
          <a href="https://app.arcto.io" className="inline-flex items-center mt-4 text-white hover:text-blue-200 transition-colors duration-300">
            <span>Open Web App</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Find answers to common questions about Arcto</p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "Do I need to install an app on my smartphone?",
              answer: "No, Arcto works directly in your mobile browser. Simply navigate to the web app URL and connect to your computer."
            },
            {
              question: "Which presentation software is compatible with Arcto?",
              answer: "Arcto works with all major presentation software including Microsoft PowerPoint, Google Slides, Keynote, and PDF viewers."
            },
            {
              question: "Can I use Arcto without an internet connection?",
              answer: "Yes, Arcto works on your local network. As long as your computer and smartphone are on the same WiFi network, you can use Arcto without internet access."
            },
            {
              question: "Is Arcto secure?",
              answer: "Yes, all communication between your smartphone and computer happens on your local network and is encrypted. No presentation data is sent to external servers."
            },
            {
              question: "How many devices can I control with Arcto?",
              answer: "You can control multiple computers from your smartphone, but only one at a time. Simply disconnect from one and connect to another."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="mb-6 last:mb-0 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/arcto.png" alt="Arcto Logo" className="w-10 h-10 rounded-lg mr-3" />
              <span className="text-2xl font-bold">Arcto</span>
            </div>
            <p className="text-gray-400">Your modern remote control for presentations and media</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-white transition-colors duration-300">Download</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Have questions or feedback?</p>
            <a href="mailto:support@arcto.app" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">support@arcto.app</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arcto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;