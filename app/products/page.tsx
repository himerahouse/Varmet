"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Import your images - adjust the paths based on your actual file names
import metalBarrelsImg from "../assets/Images/metal-barrels.jpg";
import ureaImg from "../assets/Images/urea.jpg";
import fuelsImg from "../assets/Images/fuels.jpg";
import wasteImg from "../assets/Images/waste.jpg";
import palletsImg from "../assets/Images/pallets.jpg";
import communityImg from "../assets/Images/community.jpg"; // Add this image
import environmentImg from "../assets/Images/environment.jpg"; // Add this image

// Bilingual content
const productsContent = {
  en: {
    badge: "OUR OFFERINGS",
    title: "Products",
    subtitle: "& Services",
    description: "We cater to a diverse range of industries, delivering customized solutions that drive performance and sustainability.",
    cta: "Get Custom Solutions",
    
    productsBadge: "OUR PRODUCTS",
    productsTitleLine1: "Comprehensive",
    productsTitleLine2: "Industrial Solutions",
    
    // Product 1
    metalBarrelsTitle: "Metal Barrels",
    metalBarrelsDescription: "Durable and reliable storage solutions for oils, fuels, and other industrial liquids.",
    metalBarrelsCategory: "Storage Solutions",
    metalBarrelsFeatures: ["Corrosion-resistant", "Various sizes available", "Reusable design", "Industrial grade"],
    
    // Product 2
    ureaTitle: "Agricultural & Technical Urea",
    ureaDescription: "High-grade urea for use in AdBlue production and other applications.",
    ureaCategory: "Industrial Chemicals",
    ureaFeatures: ["High purity grade", "AdBlue production", "Agricultural use", "Technical applications"],
    
    // Product 3
    fuelsTitle: "Alternative Fuels Supply",
    fuelsDescription: "Cost-effective and eco-friendly fuel options for thermal power and cement plants.",
    fuelsCategory: "Energy Solutions",
    fuelsFeatures: ["Cost-effective", "Eco-friendly", "Industrial grade", "Reliable supply"],
    
    // Product 4
    wasteTitle: "Waste & Plastics Trade",
    wasteDescription: "Sustainable solutions for waste management and recycling, driving a circular economy.",
    wasteCategory: "Environmental Solutions",
    wasteFeatures: ["Sustainable recycling", "Waste management", "Circular economy", "Environmental compliance"],
    
    // Product 5
    palletsTitle: "Wooden Pallets",
    palletsDescription: "Sturdy and customizable pallets for safe and efficient transportation and storage.",
    palletsCategory: "Logistics",
    palletsFeatures: ["Customizable sizes", "Durable construction", "Export standard", "Sustainable materials"],
    
    featuresLabel: "Key Features",
    
    // Community Section
    communityBadge: "OUR COMMUNITY",
    communityTitleLine1: "Join Our Community Of",
    communityTitleLine2: "Satisfied Industrial Customers",
    communityDescription: "At VARMET, we are committed to quality, sustainability, and innovation, ensuring we provide solutions that support your business while protecting the environment.",
    communityCta: "Get Started",
    communityImageCaption1: "Trusted by Industry Leaders",
    communityImageCaption2: "Building Lasting Partnerships",
    
    // Environment Section
    environmentBadge: "OUR COMMITMENT",
    environmentTitleLine1: "Our Commitment",
    environmentTitleLine2: "To The Environment",
    environmentDescription: "At VARMET, we prioritize sustainable practices in everything we do. From designing eco-friendly products to implementing resource-efficient solutions, we are committed to reducing the environmental impact of our operations and those of our clients.",
    environmentCta: "Get Started",
    environmentImageCaption1: "Sustainable Practices",
    environmentImageCaption2: "Protecting Our Planet",
    
    // Contact Section
    contactBadge: "NEED ASSISTANCE?",
    contactTitleLine1: "Custom Solutions",
    contactTitleLine2: "For Your Business",
    contactDescription: "Contact our expert team to discuss tailored requirements and specialized solutions designed for your industry needs.",
    contactCta: "Contact Sales Team"
  },
  bg: {
    badge: "НАШИТЕ ПРЕДЛОЖЕНИЯ",
    title: "Продукти",
    subtitle: "& Услуги",
    description: "Ние обслужваме широк спектър от индустрии, предоставяйки персонализирани решения, които стимулират производителността и устойчивостта.",
    cta: "Получете Персонализирани Решения",
    
    productsBadge: "НАШИТЕ ПРОДУКТИ",
    productsTitleLine1: "Изчерпателни",
    productsTitleLine2: "Индустриални Решения",
    
    // Product 1
    metalBarrelsTitle: "Метални бъчви",
    metalBarrelsDescription: "Здрави и надеждни решения за съхранение на масла, горива и други промишлени течности.",
    metalBarrelsCategory: "Решения за Съхранение",
    metalBarrelsFeatures: ["Устойчив на корозия", "Налични са различни размери", "Повторно използваем дизайн", "Индустриален клас"],
    
    // Product 2
    ureaTitle: "Селскостопанска и техническа урея",
    ureaDescription: "Висококачествен урея за употреба в производството на AdBlue и други приложения.",
    ureaCategory: "Индустриални Химикали",
    ureaFeatures: ["Висока степен на чистота", "Производство на AdBlue", "Селскостопанска употреба", "Технически приложения"],
    
    // Product 3
    fuelsTitle: "Доставка на алтернативни горива",
    fuelsDescription: "Икономически ефективни и екологични горивни варианти за топлоелектрически и циментови заводи.",
    fuelsCategory: "Енергийни Решения",
    fuelsFeatures: ["Икономически ефективни", "Екологични", "Индустриален клас", "Надеждни доставки"],
    
    // Product 4
    wasteTitle: "Търговия с отпадъци и пластмаси",
    wasteDescription: "Устойчиви решения за управление на отпадъците и рециклиране, стимулиращи кръговата икономика.",
    wasteCategory: "Екологични Решения",
    wasteFeatures: ["Устойчиво рециклиране", "Управление на отпадъците", "Кръгова икономика", "Екологична съобразност"],
    
    // Product 5
    palletsTitle: "Дървени палети",
    palletsDescription: "Здрави и персонализируеми палети за безопасно и ефикасно транспортиране и съхранение.",
    palletsCategory: "Логистика",
    palletsFeatures: ["Персонализируеми размери", "Здрава конструкция", "Експортен стандарт", "Устойчиви материали"],
    
    featuresLabel: "Ключови Характеристики",
    
    // Community Section
    communityBadge: "НАШАТА ОБЩНОСТ",
    communityTitleLine1: "Присъединете се към нашата общност от",
    communityTitleLine2: "доволни индустриални клиенти",
    communityDescription: "Във VARMET сме ангажирани с качеството, устойчивостта и иновациите, като гарантираме, че предоставяме решения, които подкрепят вашия бизнес, като същевременно опазват околната среда.",
    communityCta: "Започнете",
    communityImageCaption1: "Доверени от Индустриални Лидери",
    communityImageCaption2: "Изграждане на Дълготрайни Партньорства",
    
    // Environment Section
    environmentBadge: "НАШИЯТ АНГАЖИМЕНТ",
    environmentTitleLine1: "Нашият ангажимент",
    environmentTitleLine2: "към околната среда",
    environmentDescription: "Във VARMET ние даваме приоритет на устойчивите практики във всичко, което правим. От проектирането на екологични продукти до внедряването на ресурсно ефективни решения, ние сме ангажирани с намаляването на въздействието върху околната среда от нашите операции и тези на нашите клиенти.",
    environmentCta: "Започнете",
    environmentImageCaption1: "Устойчиви Практики",
    environmentImageCaption2: "Опазване на Нашата Планета",
    
    // Contact Section
    contactBadge: "НУЖДАЕТЕ СЕ ОТ ПОМОЩ?",
    contactTitleLine1: "Персонализирани Решения",
    contactTitleLine2: "За Вашия Бизнес",
    contactDescription: "Свържете се с нашия експертен екип, за да обсъдите индивидуални изисквания и специализирани решения, проектирани за нуждите на вашата индустрия.",
    contactCta: "Свържете се с Търговския Екип"
  }
};

const products = [
  {
    id: 1,
    key: "metalBarrels",
    image: metalBarrelsImg,
  },
  {
    id: 2,
    key: "urea",
    image: ureaImg,
  },
  {
    id: 3,
    key: "fuels",
    image: fuelsImg,
  },
  {
    id: 4,
    key: "waste",
    image: wasteImg,
  },
  {
    id: 5,
    key: "pallets",
    image: palletsImg,
  }
];

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState("en");

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

  const t = productsContent[language as keyof typeof productsContent];

  return (
    <main className="bg-white">
      {/* Hero Section - Enhanced with About page styling */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Enhanced badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 shadow-sm backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">{t.badge}</span>
            </div>
            
            {/* Enhanced title with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            {/* Enhanced subtitle */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.subtitle}
              </span>
            </h2>
            
            {/* Enhanced paragraph */}
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.description}
            </p>
            
            {/* Enhanced button */}
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-5
                  text-base font-semibold text-white transition-all duration-300
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                <span>{t.cta}</span>
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid Section - Enhanced with About page styling */}
      <section className="relative py-24 bg-white">
        {/* Decorative divider */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center mb-8 group">
              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
              <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                {t.productsBadge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.productsTitleLine1}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.productsTitleLine2}
              </span>
            </h2>
          </div>

          {/* Products Grid - Enhanced with About page card styling */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const features = t[`${product.key}Features` as keyof typeof t];
              const featuresArray = Array.isArray(features) ? features : [];
              
              return (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced card container with gradient glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 
                    hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                    shadow-lg group-hover:shadow-2xl">
                    
                    {/* Image Container with overlay */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={t[`${product.key}Title` as keyof typeof t] as string}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 
                          border border-gray-200/50">
                          {t[`${product.key}Category` as keyof typeof t] as string}
                        </span>
                      </div>

                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-600/0 to-blue-600/0 
                        group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/0 
                        transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {t[`${product.key}Title` as keyof typeof t] as string}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{t[`${product.key}Description` as keyof typeof t] as string}</p>
                      
                      {/* Enhanced Features Section */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                          {t.featuresLabel}
                        </h4>
                        <ul className="space-y-3">
                          {featuresArray.map((feature, idx) => (
                            <li key={idx} className="flex items-start group/item">
                              <div className="mt-1 mr-3 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 
                                  flex items-center justify-center group-hover/item:from-blue-200 group-hover/item:to-cyan-200 
                                  transition-all duration-300">
                                  <svg className="w-2.5 h-2.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced bottom indicator */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full 
                          group-hover:w-full transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: Join Our Community Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Text */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-blue-200 uppercase">
                  {t.communityBadge}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                {t.communityTitleLine1}
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                  {t.communityTitleLine2}
                </span>
              </h2>
              
              <p className={`text-lg text-blue-100 leading-relaxed mb-8 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
                {t.communityDescription}
              </p>
              
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-100 px-10 py-5
                  text-base font-semibold text-gray-900 transition-all duration-300
                  hover:from-blue-100 hover:to-cyan-100 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                {t.communityCta}
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Right Content - Image */}
            <div className={`relative group transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={communityImg}
                    alt={t.communityImageCaption2 as string}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* Enhanced Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-90 mb-2">{t.communityImageCaption1}</p>
                    <p className="text-2xl font-bold">{t.communityImageCaption2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Our Commitment To The Environment Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative divider */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Image */}
            <div className={`relative group transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={environmentImg}
                    alt={t.environmentImageCaption2 as string}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                {/* Enhanced Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-90 mb-2">{t.environmentImageCaption1}</p>
                    <p className="text-2xl font-bold">{t.environmentImageCaption2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className={`transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  {t.environmentBadge}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                {t.environmentTitleLine1}
                <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">
                  {t.environmentTitleLine2}
                </span>
              </h2>
              
              <p className={`text-lg text-gray-700 leading-relaxed mb-8 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
                {t.environmentDescription}
              </p>
              
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-emerald-600 to-teal-500 px-10 py-5
                  text-base font-semibold text-white transition-all duration-300
                  hover:from-emerald-700 hover:to-teal-600 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                {t.environmentCta}
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className={`mx-auto max-w-5xl px-6 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">{t.contactBadge}</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t.contactTitleLine1}
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
              {t.contactTitleLine2}
            </span>
          </h2>
          
          <p className={`text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
            {t.contactDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 
                text-base font-semibold text-white transition-all duration-300
                hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg inline-flex items-center justify-center"
            >
              {t.contactCta}
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}