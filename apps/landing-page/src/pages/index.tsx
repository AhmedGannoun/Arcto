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
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      >
        <motion.div variants={fadeIn} className="absolute top-0 right-0 -z-10 opacity-20 dark:opacity-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" className="text-blue-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#pattern-circles)" />
          </svg>
        </motion.div>
        
        <motion.div variants={fadeIn} className="text-center mb-12">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <img src="/arcto.png" alt="Arcto Logo" className="w-24 h-24 rounded-xl shadow-lg" />
          </motion.div>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Arcto</span>
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
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.a 
            href="/downloads/arcto-setup.exe" 
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download for Windows
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="px-8 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn More
          </motion.a>
        </motion.div>
        
        <motion.div 
          variants={fadeIn} 
          className="mt-16 relative w-full max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <img 
              src="/images/arcto-preview.png" 
              alt="Arcto App Preview" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center">
            <span className="flex h-3 w-3 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">2,500+ Active Users</span>
          </div>
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Get started in three simple steps</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            {/* Steps */}
            {[
              {
                title: "Download & Install",
                description: "Download the Arcto desktop application and install it on your computer.",
                image: "/images/download-step.png"
              },
              {
                title: "Connect Your Device",
                description: "Open the app on your computer and scan the QR code with your mobile device or enter the IP address.",
                image: "/images/connect-step.png"
              },
              {
                title: "Start Presenting",
                description: "Use your mobile device to control your presentations with intuitive gestures and controls.",
                image: "/images/present-step.png"
              }
            ].map((step, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 md:px-8">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                        {index + 1}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:px-8">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                      <img src={step.image || "/images/placeholder.png"} alt={step.title} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
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
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex-1">
            <h3 className="text-2xl font-bold mb-4">Windows</h3>
            <p className="mb-6">Compatible with Windows 10 and 11</p>
            <motion.a 
              href="/downloads/arcto-setup.exe" 
              className="block w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download for Windows
            </motion.a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex-1">
            <h3 className="text-2xl font-bold mb-4">macOS</h3>
            <p className="mb-6">Compatible with macOS 11 and later</p>
            <motion.a 
              href="/downloads/arcto-mac.dmg" 
              className="block w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download for macOS
            </motion.a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex-1">
            <h3 className="text-2xl font-bold mb-4">Linux</h3>
            <p className="mb-6">Compatible with major Linux distributions</p>
            <motion.a 
              href="/downloads/arcto-linux.AppImage" 
              className="block w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Download for Linux
            </motion.a>
          </div>
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