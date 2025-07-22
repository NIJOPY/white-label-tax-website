import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageHowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Sign Up & Get Started",
            description: "Join our white label tax marketing service with a simple signup process. No complex setup or technical requirements - just tell us about your firm and we'll handle the rest.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-blue-500 to-indigo-600",
            highlight: "Simple onboarding process"
        },
        {
            number: "02",
            title: "Receive Your Branded Content",
            description: "Every month, you'll receive professionally crafted tax news packs and guidance materials, all branded with your firm's identity. Plus access to individual tax bulletin articles for specific client needs.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
            ),
            color: "from-green-500 to-emerald-600",
            highlight: "Monthly delivery with your branding"
        },
        {
            number: "03",
            title: "Share With Your Clients",
            description: "Send the professionally branded content directly to your clients. Position yourself as their trusted tax advisor with valuable, timely information that keeps them informed and engaged.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            ),
            color: "from-purple-500 to-violet-600",
            highlight: "Build client relationships"
        },
        {
            number: "04",
            title: "Convert to Advisory Work",
            description: "Watch as clients reach out for personalized advice based on the content you've shared. Transform information sharing into valuable advisory conversations and increased revenue opportunities.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            color: "from-orange-500 to-red-600",
            highlight: "Drive advisory revenue"
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Simple 4-Step Process
                    </div>
                    
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        From Signup to
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Advisory Success</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our streamlined process makes it effortless to transform your client communications 
                        into a powerful tool for driving advisory work and increasing your firm's revenue.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                                {/* Step Number and Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="text-6xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                                        {step.number}
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                                
                                {/* Highlight */}
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                                    <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {step.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Flow Visualization */}
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Complete Journey</h3>
                        <p className="text-gray-600">See how simple it is to transform your client relationships</p>
                    </div>
                    
                    <div className="relative">
                        {/* Connection Lines */}
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="relative text-center">
                                    {/* Step Circle */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg mb-4 shadow-lg`}>
                                        {index + 1}
                                    </div>
                                    
                                    {/* Step Title */}
                                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                                    
                                    {/* Arrow (except for last step) */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 left-full w-8 h-8 text-gray-300 transform -translate-y-4">
                                            <svg fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Client Relationships?</h3>
                        <p className="text-gray-600 mb-6">
                            Join hundreds of accountancy firms who are already using our white label content 
                            to drive more advisory work and increase their revenue.
                        </p>
                        <Link to="/contact">
                        <button className="btn btn-primary btn-lg bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                            Start Your First Month Free
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageHowItWorks