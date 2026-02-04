"use client";

import { useState, useEffect } from "react";

// Bilingual content for contact page
const contactContent = {
  en: {
    // Hero Section
    badge: "CONTACT US",
    title: "Contact",
    
    // Form Section
    formBadge: "SEND US A MESSAGE",
    firstNameLabel: "First Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    messageLabel: "Message",
    requiredField: "*",
    sending: "Sending...",
    sendMessage: "Send Message",
    
    // Placeholders
    firstNamePlaceholder: "Enter your first name",
    emailPlaceholder: "Enter your email address",
    phonePlaceholder: "Enter your phone number",
    messagePlaceholder: "Type your message here...",
    
    // Contact Info Section
    infoBadge: "CONTACT",
    emailTitle: "Email",
    phoneTitle: "Phone",
    workingHoursTitle: "Working hours",
    addressTitle: "Address",
    socialMediaTitle: "Social Media",
    
    // Contact Details
    email: "office@varmet.bg",
    phone: "+359 890 99 88 27",
    workingHours: "Monday - Friday: 09:00 - 18:00",
    addressLine1: "1700 Sofia,",
    addressLine2: "2B Yordan Stratiev Street",
    
    // Social Media
    facebook: "Facebook",
    linkedin: "LinkedIn",
    instagram: "Instagram",
  },
  bg: {
    // Hero Section
    badge: "СВЪРЖЕТЕ СЕ С НАС",
    title: "Контакти",
    
    // Form Section
    formBadge: "ИЗПРАТЕТЕ НИ СЪОБЩЕНИЕ",
    firstNameLabel: "Име",
    emailLabel: "Имейл Адрес",
    phoneLabel: "Телефонен Номер",
    messageLabel: "Съобщение",
    requiredField: "*",
    sending: "Изпращане...",
    sendMessage: "Изпрати Съобщение",
    
    // Placeholders
    firstNamePlaceholder: "Въведете вашето име",
    emailPlaceholder: "Въведете вашия имейл адрес",
    phonePlaceholder: "Въведете вашия телефонен номер",
    messagePlaceholder: "Напишете вашето съобщение тук...",
    
    // Contact Info Section
    infoBadge: "КОНТАКТИ",
    emailTitle: "Имейл",
    phoneTitle: "Телефон",
    workingHoursTitle: "Работно време",
    addressTitle: "Адрес",
    socialMediaTitle: "Социални Мрежи",
    
    // Contact Details
    email: "office@varmet.bg",
    phone: "+359 890 99 88 27",
    workingHours: "Понеделник - Петък: 09:00 - 18:00",
    addressLine1: "1700 София,",
    addressLine2: "ул. Йордан Стратиев 2Б",
    
    // Social Media
    facebook: "Facebook",
    linkedin: "LinkedIn",
    instagram: "Instagram",
  }
};

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState("en");
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
    
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    // Listen for language changes from the LanguageSwitcher
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
    };
  }, []);

  const t = contactContent[language as keyof typeof contactContent];

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
      if (language === 'en') {
        alert("Message sent successfully! We'll contact you soon.");
      } else {
        alert("Съобщението е изпратено успешно! Ще се свържем с вас скоро.");
      }
    }, 1500);
  };

  return (
    <main className="bg-white mt-10">
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
              <span className={`text-sm font-semibold tracking-wider text-gray-700 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                {t.badge}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                {t.title}
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
                <span className={`text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.formBadge}
                </span>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* First Name Field */}
                <div className="group">
                  <label htmlFor="firstName" className={`block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {t.firstNameLabel} <span className="text-red-500">{t.requiredField}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100 ${language === 'bg' ? 'tracking-wide' : ''}`}
                      placeholder={t.firstNamePlaceholder}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className={`block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {t.emailLabel} <span className="text-red-500">{t.requiredField}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100 ${language === 'bg' ? 'tracking-wide' : ''}`}
                      placeholder={t.emailPlaceholder}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label htmlFor="phone" className={`block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {t.phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100 ${language === 'bg' ? 'tracking-wide' : ''}`}
                      placeholder={t.phonePlaceholder}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <label htmlFor="message" className={`block text-sm font-semibold text-gray-700 uppercase tracking-wide ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.messageLabel}
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
                      className={`w-full px-6 py-5 bg-gradient-to-r from-gray-50 to-white border border-gray-200 
                        rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-400 
                        focus:ring-2 focus:ring-blue-100 transition-all duration-300 group-hover:border-blue-300
                        focus:shadow-lg focus:shadow-blue-100 resize-none ${language === 'bg' ? 'tracking-wide' : ''}`}
                      placeholder={t.messagePlaceholder}
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
                        {t.sending}
                      </>
                    ) : (
                      <>
                        {t.sendMessage}
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
                <span className={`text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.infoBadge}
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
                    <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.emailTitle}
                    </p>
                    <a href="mailto:office@varmet.bg" className="text-lg text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      {t.email}
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
                    <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.phoneTitle}
                    </p>
                    <a href="tel:+359890998827" className="text-lg text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      {t.phone}
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
                    <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.workingHoursTitle}:
                    </p>
                    <p className="text-lg text-gray-900">
                      {t.workingHours}
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
                    <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.addressTitle}
                    </p>
                    <p className="text-lg text-gray-900">
                      {t.addressLine1}<br />
                      {t.addressLine2}
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
                    <p className={`text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                      {t.socialMediaTitle}
                    </p>
                    <div className="flex gap-4">
                      {/* LinkedIn */}
                      <a 
                        href="" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 
                          flex items-center justify-center hover:from-blue-200 hover:to-cyan-200 
                          transition-all duration-300 hover:scale-110"
                        title={t.linkedin}
                      >
                        <svg className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      
                      {/* Facebook */}
                      <a 
                        href="" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600/10 to-blue-700/10 
                          border border-blue-600/20 flex items-center justify-center hover:from-blue-600/20 hover:to-blue-700/20
                          transition-all duration-300 hover:scale-110 hover:border-blue-600/40"
                        title={t.facebook}
                      >
                        <svg className="w-5 h-5 text-blue-600 group-hover/social:text-blue-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                        </svg>
                      </a>
                      
                      {/* Instagram */}
                      <a 
                        href="" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/social relative w-12 h-12 rounded-xl bg-gradient-to-r from-pink-100 to-purple-100 
                          flex items-center justify-center hover:from-pink-200 hover:to-purple-200 
                          transition-all duration-300 hover:scale-110"
                        title={t.instagram}
                      >
                        <svg className="w-5 h-5 text-pink-600 group-hover/social:text-pink-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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