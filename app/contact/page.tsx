"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [messageCount, setMessageCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'message') {
      setMessageCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: ""
      });
      setMessageCount(0);
      
      // Show success message
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 shadow-sm backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">CONTACT US</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Contact
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="relative py-24 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Form */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  SEND US A MESSAGE
                </span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name Field */}
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100"
                      placeholder="Enter your first name"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100"
                      placeholder="Enter your phone number"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Message
                    </label>
                    <span className="text-xs text-gray-500">
                      {messageCount} / 180
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      maxLength={180}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100 resize-none"
                      placeholder="Type your message here..."
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full inline-flex items-center justify-center rounded-2xl 
                      bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-6
                      text-base font-semibold text-white transition-all duration-300
                      hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                      shadow-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className={`transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  CONTACT
                </span>
              </div>

              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-start group">
                  <div className="mt-1 mr-5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:office@varmet.bg" className="text-lg text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      office@varmet.bg
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start group">
                  <div className="mt-1 mr-5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</p>
                    <a href="tel:+359890998827" className="text-lg text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      +359 890 99 88 27
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start group">
                  <div className="mt-1 mr-5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Working hours:</p>
                    <p className="text-lg text-gray-900">
                      Monday - Friday: 09:00 - 18:00
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start group">
                  <div className="mt-1 mr-5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</p>
                    <p className="text-lg text-gray-900">
                      1700 Sofia,<br />
                      2B Yordan Stratiev Street
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start group pt-8 border-t border-gray-100">
                  <div className="mt-1 mr-5 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Social Media</p>
                    <div className="flex gap-4">
                      {/* Facebook */}
                      <a 
                        href="#" 
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 
                          flex items-center justify-center hover:from-blue-200 hover:to-cyan-200 
                          transition-all duration-300 group/social hover:scale-110"
                      >
                        <svg className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      
                      {/* Twitter */}
                      <a 
                        href="#" 
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 
                          flex items-center justify-center hover:from-blue-200 hover:to-cyan-200 
                          transition-all duration-300 group/social hover:scale-110"
                      >
                        <svg className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      
                      {/* Google Plus */}
                      <a 
                        href="#" 
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 
                          flex items-center justify-center hover:from-blue-200 hover:to-cyan-200 
                          transition-all duration-300 group/social hover:scale-110"
                      >
                        <svg className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.331 3.295-2.604 0-4.731-2.16-4.731-4.823 0-2.662 2.122-4.822 4.728-4.822 1.485 0 2.479.633 3.045 1.178l2.073-1.994c-1.33-1.245-3.056-1.995-5.115-1.995C3.412 4.365 0 7.785 0 12s3.412 7.635 7.635 7.635c4.41 0 7.332-3.098 7.332-7.461 0-.501-.054-.885-.12-1.265H7.635zm16.365 0h-2.183V8.726h-2.183v2.183h-2.182v2.181h2.184v2.184h2.189V13.09H24"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}