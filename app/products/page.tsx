"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Import your images
import metalBarrelsImg from "../assets/Images/metal-barrels.jpg";
import ureaImg from "../assets/Images/urea.jpg";
import fuelsImg from "../assets/Images/fuels.jpg";
import wasteImg from "../assets/Images/waste.jpg";
import palletsImg from "../assets/Images/pallets.jpg";
import communityImg from "../assets/Images/community.jpg";
import environmentImg from "../assets/Images/environment.jpg";

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
    
    // Featured Product - Metal Barrels
    featuredBadge: "FLAGSHIP PRODUCT",
    featuredCategory: "MANUFACTURING",
    featuredTitle: "Metal Barrels",
    featuredSubtitle: "Large Tight Head Steel Drums (216.5 liter)",
    featuredDescription: "The packaging solution for the petrochemical, chemical, pharmaceutical and food industries.",
    featuredFeatures: ["216.5 liter capacity", "UN certified", "Spiraltainer® technology", "Chemical resistant", "Food grade available"],
    featuredCta: "Explore Manufacturing",
    featuredPhone: "+359 890 99 88 37",
    
    // Other Products
    ureaTitle: "Agricultural & Technical Urea",
    ureaDescription: "High-grade urea for use in AdBlue production and other applications.",
    ureaCategory: "Industrial Chemicals",
    ureaFeatures: ["High purity grade", "AdBlue production", "Agricultural use", "Technical applications"],
    
    fuelsTitle: "Alternative Fuels Supply",
    fuelsDescription: "Cost-effective and eco-friendly fuel options for thermal power and cement plants.",
    fuelsCategory: "Energy Solutions",
    fuelsFeatures: ["Cost-effective", "Eco-friendly", "Industrial grade", "Reliable supply"],
    
    wasteTitle: "Waste & Plastics Trade",
    wasteDescription: "Sustainable solutions for waste management and recycling, driving a circular economy.",
    wasteCategory: "Environmental Solutions",
    wasteFeatures: ["Sustainable recycling", "Waste management", "Circular economy", "Environmental compliance"],
    
    palletsTitle: "Wooden Pallets",
    palletsDescription: "Sturdy and customizable pallets for safe and efficient transportation and storage.",
    palletsCategory: "Logistics",
    palletsFeatures: ["Customizable sizes", "Durable construction", "Export standard", "Sustainable materials"],
    
    featuresLabel: "Key Features",
    allProductsLabel: "Other Products",
    
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
    
    // Featured Product - Metal Barrels
    featuredBadge: "ФЛАГМАНСКИ ПРОДУКТ",
    featuredCategory: "ПРОИЗВОДСТВО",
    featuredTitle: "Метални Бъчви",
    featuredSubtitle: "Големи стоманени бъчви с плътна капачка (216.5 литра)",
    featuredDescription: "Опаковъчното решение за петрохимическата, химическата, фармацевтичната и хранителната промишленост.",
    featuredFeatures: ["216.5 литра капацитет", "Сертифицирано по UN", "Spiraltainer® технология", "Устойчиво на химикали", "Хранителен клас налични"],
    featuredCta: "Разгледайте Производството",
    featuredPhone: "+359 890 99 88 37",
    
    // Other Products
    ureaTitle: "Селскостопанска и техническа урея",
    ureaDescription: "Висококачествен урея за употреба в производството на AdBlue и други приложения.",
    ureaCategory: "Индустриални Химикали",
    ureaFeatures: ["Висока степен на чистота", "Производство на AdBlue", "Селскостопанска употреба", "Технически приложения"],
    
    fuelsTitle: "Доставка на алтернативни горива",
    fuelsDescription: "Икономически ефективни и екологични горивни варианти за топлоелектрически и циментови заводи.",
    fuelsCategory: "Енергийни Решения",
    fuelsFeatures: ["Икономически ефективни", "Екологични", "Индустриален клас", "Надеждни доставки"],
    
    wasteTitle: "Търговия с отпадъци и пластмаси",
    wasteDescription: "Устойчиви решения за управление на отпадъците и рециклиране, стимулиращи кръговата икономика.",
    wasteCategory: "Екологични Решения",
    wasteFeatures: ["Устойчиво рециклиране", "Управление на отпадъците", "Кръгова икономика", "Екологична съобразност"],
    
    palletsTitle: "Дървени палети",
    palletsDescription: "Здрави и персонализируеми палети за безопасно и ефикасно транспортиране и съхранение.",
    palletsCategory: "Логистика",
    palletsFeatures: ["Персонализируеми размери", "Здрава конструкция", "Експортен стандарт", "Устойчиви материали"],
    
    featuresLabel: "Ключови Характеристики",
    allProductsLabel: "Други Продукти",
    
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
    key: "urea",
    image: ureaImg,
    categoryKey: "ureaCategory",
    featuresKey: "ureaFeatures"
  },
  {
    id: 2,
    key: "fuels",
    image: fuelsImg,
    categoryKey: "fuelsCategory",
    featuresKey: "fuelsFeatures"
  },
  {
    id: 3,
    key: "waste",
    image: wasteImg,
    categoryKey: "wasteCategory",
    featuresKey: "wasteFeatures"
  },
  {
    id: 4,
    key: "pallets",
    image: palletsImg,
    categoryKey: "palletsCategory",
    featuresKey: "palletsFeatures"
  }
];

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setIsLoaded(true);
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setLanguage(event.detail.lang);
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () => window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = productsContent[language as keyof typeof productsContent];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-gray-100/30 to-emerald-100/20 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-white to-gray-50 border border-gray-200/80 shadow-sm backdrop-blur-sm mb-10">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wider text-gray-700">{t.badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.subtitle}
              </span>
            </h2>
            
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.description}
            </p>
            
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

      {/* FEATURED PRODUCT SECTION - Metal Barrels */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
  </div>
  
  {/* Floating Elements */}
  <div className="absolute top-10 left-10 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce" />
  <div className="absolute bottom-10 right-10 w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
  
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Section Header */}
    <div className={`text-center mb-16 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="inline-flex items-center justify-center gap-4 mb-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg" />
          <span className="relative text-sm font-semibold tracking-[0.3em] text-blue-600 uppercase bg-gradient-to-r from-blue-500/5 to-cyan-500/5 px-6 py-3 rounded-full border border-blue-200">
            {t.featuredBadge}
          </span>
        </div>
        <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
      </div>
      
      <div className="relative inline-block mb-6">
        <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl" />
        <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent animate-gradient">
            VARMET MANUFACTURING
          </span>
        </h2>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        {t.featuredSubtitle}
      </p>
      
      {/* Animated Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {[1, 2, 3].map((dot) => (
          <div 
            key={dot}
            className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            style={{ animationDelay: `${dot * 200}ms` }}
          />
        ))}
      </div>
    </div>

    {/* Featured Card */}
    <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {/* Glow Effect */}
      <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl overflow-hidden border border-gray-200/80 
        hover:border-blue-300/50 hover:shadow-2xl transition-all duration-700 group
        shadow-xl backdrop-blur-sm">
        
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Side - Enhanced */}
          <div className="relative h-[500px] lg:h-auto overflow-hidden">
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={metalBarrelsImg}
                alt={t.featuredTitle}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-500/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-xs font-semibold text-white 
                  border border-white/30 shadow-2xl backdrop-blur-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  ★ {t.featuredCategory}
                </div>
              </div>
            </div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
          </div>

          {/* Content Side - Enhanced */}
          <div className="p-10 md:p-12 lg:p-14 flex flex-col justify-center relative">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-tr-full" />
            
            <div className="relative">
              {/* Title with Gradient Underline */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {t.featuredTitle}
                </h3>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-4" />
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-700 mb-10 leading-relaxed font-light">
                {t.featuredDescription}
              </p>
              
              {/* Features Grid - Enhanced */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-px bg-gradient-to-r from-blue-600 to-cyan-500" />
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-widest">
                    {t.featuresLabel}
                  </h4>
                  <div className="w-10 h-px bg-gradient-to-r from-cyan-500 to-blue-600" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {t.featuredFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="group/feature flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 
                        border border-gray-100 hover:border-blue-200 hover:from-blue-50/30 hover:to-cyan-50/30 
                        transition-all duration-300 hover:translate-x-1 hover:shadow-md"
                    >
                      <div className="relative mt-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur group-hover/feature:blur-md transition-all duration-300" />
                        <div className="relative w-7 h-7 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 
                          flex items-center justify-center group-hover/feature:from-blue-200 group-hover/feature:to-cyan-200 
                          transition-all duration-300">
                          <svg className="w-3.5 h-3.5 text-blue-600 group-hover/feature:text-blue-700 transition-colors" 
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-gray-700 group-hover/feature:text-gray-900 font-medium transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* CTA Section - Enhanced */}
              <div className="space-y-6">
                {/* Main CTA Button - FIXED */}
<Link
  href="/steelDrums"
  className="group/btn relative inline-flex items-center justify-center rounded-2xl 
    bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 px-10 py-5
    text-base font-semibold text-white transition-all duration-500
    hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 hover:scale-[1.02] hover:shadow-2xl
    shadow-lg overflow-hidden w-full"
>
  {/* Button Background Effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 
    group-hover/btn:from-blue-500/20 group-hover/btn:via-cyan-500/20 group-hover/btn:to-blue-500/20 
    transition-all duration-500" />
  
  {/* REMOVE OR FIX the problematic border effect */}
  {/* Option 1: Remove it completely */}
  {/* Option 2: Fix it like this: */}
  
  {/* FIXED VERSION - Keep gradient border but don't cover text */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 p-[2px]">
    <div className="absolute inset-[2px] rounded-2xl bg-gray-900" />
  </div>
  
  {/* Button Content */}
  <span className="relative z-20 text-white">{t.featuredCta}</span>
  <svg className="relative z-20 w-5 h-5 ml-3 text-white transform group-hover/btn:translate-x-2 transition-transform duration-300" 
    fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>
                
                {/* Phone Contact - Enhanced */}
                <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-gray-50 border border-gray-100">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur" />
                    <div className="relative w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-left">
                    
                    <a 
                      href="tel:+359890998837" 
                      className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 group/phone"
                    >
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        {t.featuredPhone}
                      </span>
                      <svg className="w-4 h-4 ml-2 inline-block opacity-0 group-hover/phone:opacity-100 translate-x-0 group-hover/phone:translate-x-1 transition-all duration-300" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
      </div>
    </div>
    
    
  </div>
</section>


      {/* Other Products Grid Section */}
      <section className="relative py-24 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className={`mb-16 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center mb-8 group">
              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
              <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                {t.allProductsLabel}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.productsTitleLine1}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.productsTitleLine2}
              </span>
            </h2>
          </div>

          {/* 2x2 Grid with Enhanced Styling */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => {
              const features = t[product.featuresKey as keyof typeof t];
              const featuresArray = Array.isArray(features) ? features : [];
              
              return (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 
                    hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                    shadow-lg group-hover:shadow-2xl h-full">
                    
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={t[`${product.key}Title` as keyof typeof t] as string}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 
                          border border-gray-200/50 shadow-sm">
                          {t[product.categoryKey as keyof typeof t] as string}
                        </span>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-600/0 to-blue-600/0 
                        group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/0 
                        transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {t[`${product.key}Title` as keyof typeof t] as string}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                        {t[`${product.key}Description` as keyof typeof t] as string}
                      </p>
                      
                      {/* Features */}
                      <div>
                        <h4 className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                          {t.featuresLabel}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {featuresArray.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 
                                flex items-center justify-center flex-shrink-0">
                                <svg className="w-2 h-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-xs text-gray-600 truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Bottom Indicator */}
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

      {/* Rest of the sections (Community, Environment, Contact CTA) remain the same */}
      {/* They should be kept exactly as they were in your original code */}
      {/* I've removed them here for brevity but you should keep them in your actual file */}
      
    </main>
  );
}