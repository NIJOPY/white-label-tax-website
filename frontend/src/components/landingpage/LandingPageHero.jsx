import React from 'react'
import { Link } from 'react-router-dom'

const LandingPageHero = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="hero-content text-center lg:text-left max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Trusted by 500+ Accountancy Firms
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                White Label
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Tax Marketing</span>
                                <br />
                                That Drives Results
                            </h1>
                            
                            <p className="text-xl text-gray-600 max-w-2xl">
                                Provide your clients with premium tax news, insights, and marketing materials. 
                                Boost your advisory services and client retention with our professional white-label content.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className='w-full flex sm:flex-row'>
                            <button className="btn btn-primary btn-lg bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                Start Your First Month Free
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                            </Link>
                            <button className="btn btn-outline btn-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                                View Sample Content
                            </button>
                        </div>

                        <div className="flex items-center space-x-8 pt-4">
                            <div className="flex items-center space-x-2">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                                </div>
                                <span className="text-sm text-gray-600">Join 500+ firms</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600">No setup fees</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-sm text-gray-500">Tax Insights Dashboard</div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-500">
                                    <h3 className="font-semibold text-gray-900">Latest Tax Updates</h3>
                                    <p className="text-sm text-gray-600 mt-1">HMRC announces new digital tax reforms for 2024</p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
                                    <h3 className="font-semibold text-gray-900">Client Newsletter</h3>
                                    <p className="text-sm text-gray-600 mt-1">Quarterly tax planning strategies for SMEs</p>
                                </div>
                                
                                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border-l-4 border-purple-500">
                                    <h3 className="font-semibold text-gray-900">Marketing Campaign</h3>
                                    <p className="text-sm text-gray-600 mt-1">Year-end tax optimization webinar series</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Content ready to share</span>
                                    <span className="text-green-600 font-medium">✓ Branded</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageHero