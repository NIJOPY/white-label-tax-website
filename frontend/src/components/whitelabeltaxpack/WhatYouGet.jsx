import React from 'react'

const WhatYouGet = () => {
  const monthlyProducts = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Tax Talking Points",
      description: "Monthly newsletter delivered in PDF format with key UK tax news and updates.",
      benefits: [
        "Latest HMRC announcements",
        "Regulatory changes",
        "Industry insights",
        "Client-ready format"
      ],
      purpose: "Raises awareness among clients and drives conversations that could lead to valuable advisory work.",
      color: "from-blue-500 to-indigo-600",
      frequency: "Monthly"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Tax Guidance Pack",
      description: "Comprehensive guidance on common tax topics and areas clients frequently seek advice on.",
      benefits: [
        "Common tax scenarios",
        "Client education materials",
        "Advisory opportunities",
        "Value-added content"
      ],
      purpose: "Provides value to clients and opens doors to conversations about their individual situations.",
      color: "from-green-500 to-emerald-600",
      frequency: "Monthly"
    }
  ]

  const annualProducts = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Digital Tax Rates Card",
      description: "Branded tax rates card for the coming tax year, ready to share with clients.",
      benefits: [
        "Current tax rates",
        "Your branding included",
        "Digital format",
        "Client-ready"
      ],
      purpose: "Provides clients with essential tax information while maintaining your brand presence.",
      color: "from-purple-500 to-violet-600",
      frequency: "Annually"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Tax Year End Guide",
      description: "Comprehensive guide covering year-end considerations and financial planning strategies.",
      benefits: [
        "Year-end planning",
        "Financial considerations",
        "Post-January strategies",
        "Client engagement"
      ],
      purpose: "Keeps you busy after the January deadline and provides clients with a complete year-end picture.",
      color: "from-orange-500 to-red-600",
      frequency: "Annually"
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Complete White-Label Package
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            The
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Extraordinary Value </span>
            You Will Receive
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get everything you need to provide your clients with valuable tax content and drive meaningful advisory conversations.
          </p>
        </div>

        {/* Monthly Products */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Each Month
            </h3>
            <p className="text-lg text-gray-600">
              Fresh content delivered to your inbox every month
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {monthlyProducts.map((product, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${product.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {product.frequency}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Purpose */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Purpose:</strong> {product.purpose}
                    </p>
                  </div>
                  
                  {/* Benefits List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
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
              </div>
            ))}
          </div>
        </div>

        {/* Annual Products */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Each Year
            </h3>
            <p className="text-lg text-gray-600">
              Special content to keep you and your clients engaged year-round
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {annualProducts.map((product, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${product.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        {product.frequency}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Purpose */}
                  <div className="bg-gradient-to-r from-gray-50 to-orange-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 italic">
                      <strong>Purpose:</strong> {product.purpose}
                    </p>
                  </div>
                  
                  {/* Benefits List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
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
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Everything You Need to Succeed
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With our complete white-label package, you'll have all the content you need to position yourself as your clients' trusted tax advisor. 
                Drive meaningful conversations and unlock new advisory opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                  <div className="text-sm text-gray-600">Monthly newsletters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                  <div className="text-sm text-gray-600">Guidance packs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Tax rates card</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1</div>
                  <div className="text-sm text-gray-600">Year-end guide</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Your Complete Package</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600 font-medium">Ready to Use</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Tax Talking Points</span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Tax Guidance Pack</span>
                    <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Monthly</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Tax Rates Card</span>
                    <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Annually</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Year-End Guide</span>
                    <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">Annually</span>
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

export default WhatYouGet