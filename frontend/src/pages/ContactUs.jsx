import React from 'react'
import ContactForm from '../components/forms/ContactForm'
import WhatYouGet from '../components/WhiteLabelTaxPack/WhatYouGet'

const ContactUs = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>    
        <WhatYouGet />
        <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-gray-900 mb-2'>Get Started Today</h1>
            <p className='text-gray-600'>
                Start your free month and transform your client relationships
            </p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactUs