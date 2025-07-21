import React from 'react'

const LandingPageFeatures = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Monthly Tax News",
            description: "Stay ahead with curated, up-to-date tax news and regulatory changes. Delivered monthly with your branding, ready to share with clients.",
            benefits: ["Latest HMRC updates", "Regulatory changes", "Industry insights", "Client-ready format"],
            color: "from-blue-500 to-indigo-600"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            title: "Monthly Tax Advice Packs",
            description: "Comprehensive tax planning and advice materials that position you as the expert. Drive advisory conversations and increase client value.",
            benefits: ["Strategic tax planning", "Advisory opportunities", "Client education", "Revenue generation"],
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            title: "Individual Tax Newsletters",
            description: "Targeted one-page newsletters on specific tax topics. Perfect for addressing client questions and driving engagement.",
            benefits: ["Topic-specific content", "Quick implementation", "Client engagement", "Flexible delivery"],
            color: "from-purple-500 to-violet-600"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Complete Marketing Solution
                    </div>
                    
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Take the Marketing Burden
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Off Your Shoulders</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Focus on what you do best - advising clients. We handle the tax related content creation designed to drive more valuable advisory conversations and increase the value of your services.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative">
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                                
                                {/* Benefits List */}
                                <ul className="space-y-3">
                                    {feature.benefits.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Value Proposition Section */}
                <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900">
                                Transform Your Client Relationships
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                By providing consistent, valuable content to your clients, you position yourself as their trusted advisor. 
                                This drives more meaningful conversations and opens doors to higher-value advisory services.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                                    <div className="text-sm text-gray-600">Increase in client engagement</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
                                    <div className="text-sm text-gray-600">More advisory opportunities</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-gray-900">Your Branded Content</h4>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-green-600 font-medium">Ready to Share</span>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-700">Monthly Tax News</span>
                                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">✓ Included</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-700">Tax Advice Packs</span>
                                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">✓ Included</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                        <span className="text-sm font-medium text-gray-700">Individual Newsletters</span>
                                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">✓ Available</span>
                                    </div>
                                </div>
                                
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">All content includes your branding</span>
                                        <span className="text-green-600 font-medium">✓ White Label</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPageFeatures