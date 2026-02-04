"use client";

import { useState, useEffect } from "react";
import { Shield, Factory, Package, Globe, Paintbrush, CheckCircle, Award, Users, Phone, ChevronRight, Download } from "lucide-react";
import Link from "next/link";


// Bilingual content - ADDED DOWNLOAD BUTTON TEXT
const steelDrumsContent = {
  en: {
    // Hero Section
    badge: "VARMET MANUFACTURING",
    title: "Steel Drums",
    subtitle: "Large Tight Head Steel Drums (216,5 liter)",
    description: "The packaging solution for the petrochemical, chemical, pharmaceutical and food industries.",
    ctaQuote: "Request Quote",
    ctaCall: "Call Now: +359 890 998837",
    downloadPresentation: "Download Presentation", // ADDED
    
    // Industrial Packaging Section
    industrialBadge: "INDUSTRIAL PACKAGING",
    industrialTitle: "Our Manufacturing Facility",
    industrialSubtitle: "Spiraltainer® technology production line",
    industrialParagraph1: "Drums are the backbone of Varmet's Industrial Packaging & Services activity. The wide range of steel drums complies with the highest packaging requirements imposed by the petrochemical, chemical, pharmaceutical and food industries.",
    industrialParagraph2: "The packaging is produced with the latest production technology and tested in accordance with UN regulations to guarantee optimum protection for a broad range of dangerous and non-dangerous goods.",
    
    // Key Features Section
    featuresBadge: "KEY FEATURES",
    featuresTitle: "Advanced Technology",
    featuresSubtitle: "Superior Performance Drums",
    
    // Features List
    feature1Title: "UN Certified",
    feature1Desc: "Comply with stringent UN recommendations for packing dangerous and non-dangerous goods in packaging groups I, II and III.",
    
    feature2Title: "Spiraltainer® Technology",
    feature2Desc: "Combines superior vacuum resistance with efficient loading in standard 20 and 40 ft freight containers.",
    
    feature3Title: "Spiralon Triple Seam",
    feature3Desc: "Electrically welded vertical seam. Bottom and top seamed by Varmet Spiralon triple seam for safe performance.",
    
    feature4Title: "Internal Coating",
    feature4Desc: "Internally coated with epoxy or epoxy-phenolic water based lining. Technical assistance available.",
    
    feature5Title: "Standard Gauge Range",
    feature5Desc: "Range of standard gauge combinations covering required UN performance level for practically all filling goods.",
    
    feature6Title: "Independent Certification",
    feature6Desc: "Certified by independent test institutes to comply with UN recommendations and transport regulations.",
    
    feature7Title: "RAL Colour System",
    feature7Desc: "Standardized on international RAL colour system for external colours to ensure consistent quality worldwide.",
    
    feature8Title: "Custom Branding",
    feature8Desc: "Can be painted in customer corporate colours. Logos and texts applied by means of screen-painting.",
    
    // Trademarks
    trademarksLabel: "Registered trademarks:",
    
    // Technical Specifications
    techBadge: "TECHNICAL DATA",
    techTitle: "Specifications",
    techSubtitle: "216,5 Liter Steel Drums",
    techTableTitle: "Technical Specifications Table",
    techTableSubtitle: "Large Tight Head Steel Drums (216,5 liter)",
    unCertified: "UN Certified",
    
    // Table Headers
    thVolume: "Nominal volume [dm³]",
    thTop: "Thickness [mm] top",
    thBody: "Thickness [mm] body",
    thBottom: "Thickness [mm] bottom",
    thType: "Type",
    thWeight: "Weight [kg] ± 3%",
    thUnMarkings: "UN markings",
    
    // Table Footer
    configsAvailable: "6 standard configurations available",
    downloadSpecs: "Download Full Spec Sheet",
    
    // Material Specifications
    materialBadge: "CONSTRUCTION DETAILS",
    materialTitle: "Material Specifications",
    
    // Material Specs List
    material1Title: "Steel",
    material1Desc: "Commercial grade steel sheet. Specification according to EN 101130 / EN 10131 or equivalent standards.",
    
    material2Title: "Closures",
    material2Desc: "Two Tri-Sure® 4S® closures, G2 and G ¾ are manufactured to meet ISO 15750 international standards. These closures may be sealed by Tab-Seal® caps, neutral or to customer design. Closures are fitted with Varmet's standard high performance air washers.",
    
    material3Title: "Construction",
    material3Desc: "Body: electrically welded longitudinal seam. Spiraltainer body configuration. Below 1.0 mm with 2x3 corrugations to provide optimal vacuum resistance.",
    
    material4Title: "Assembly",
    material4Desc: "The Varmet Spiralon triple seam guarantees a safe performance.",
    
    material5Title: "Standards",
    material5Desc: "EN210",
    
    material6Title: "Internal lining",
    material6Desc: "If plain drums are not suitable for your application, Varmet can apply epoxy or epoxy-phenolic water based lining.",
    
    material7Title: "Exterior paints & decorations",
    material7Desc: "Colours according to the Varmet RAL standard range (or to special customer specifications). Options: Multi-colour drum and one-colour silk screen decorations.",
    
    // Contact Section
    contactBadge: "READY TO ORDER",
    contactTitle: "Request Your Steel Drums Today",
    contactDescription: "Contact us for pricing, technical specifications, and custom manufacturing options.",
    ctaContact: "Get In Touch",
    ctaPhone: "Call Now: +359 890 998837"
  },
  bg: {
    // Hero Section
    badge: "VARMET MANUFACTURING",
    title: "Метални варели",
    subtitle: "Големи метални варели с неподвижен капак (216,5 л)",
    description: "Сигурно и сертифицирано опаковъчно решение за петрохимическата, химическата, фармацевтичната и хранителната индустрия.",
    ctaQuote: "Заяви оферта",
    ctaCall: "Обади се: +359 890 998837",
    downloadPresentation: "Изтегли презентация", // ADDED
    
    // Industrial Packaging Section
    industrialBadge: "ИНДУСТРИАЛНО ОПАКОВАНЕ",
    industrialTitle: "Производствена база",
    industrialSubtitle: "Производствена линия с технология Spiraltainer®",
    industrialParagraph1: "Металните варели са в основата на дейността на Varmet в индустриалните опаковки. Предлагаме широка гама решения, които покриват най-високите изисквания на петрохимическата, химическата, фармацевтичната и хранителната индустрия.",
    industrialParagraph2: "Произвеждаме с модерни технологии и тестваме съгласно изискванията на ООН, за да осигурим максимална защита при транспорт и съхранение на опасни и неопасни товари.",

    // Key Features Section
    featuresBadge: "КЛЮЧОВИ ПРЕДИМСТВА",
    featuresTitle: "Съвременна технология",
    featuresSubtitle: "Надеждна защита",

    // Features List
    feature1Title: "ООН сертификация",
    feature1Desc: "Отговарят на строгите изисквания на ООН за опаковане на опасни и неопасни товари в групи I, II и III.",

    feature2Title: "Технология Spiraltainer®",
    feature2Desc: "Висока устойчивост на вакуум и оптимално натоварване в стандартни 20' и 40' товарни контейнери.",

    feature3Title: "Троен шев Spiralon",
    feature3Desc: "Електрозаварен надлъжен шев. Дъното и горната част са затворени с троен шев Varmet Spiralon за максимална безопасност.",

    feature4Title: "Вътрешно покритие",
    feature4Desc: "Вътрешно покритие с епоксидна или епокси-фенолна облицовка на водна основа. Налична е техническа консултация.",

    feature5Title: "Стандартни дебелини",
    feature5Desc: "Комбинации от стандартни дебелини, покриващи необходимото ООН ниво на тестване за почти всички видове товари.",

    feature6Title: "Независима сертификация",
    feature6Desc: "Сертифицирани от независими изпитвателни институти според ООН препоръките и транспортните регулации.",

    feature7Title: "Цветова система RAL",
    feature7Desc: "Външни цветове по международната система RAL за постоянство на качеството и разпознаваемост на бранда.",

    feature8Title: "Брандиране по поръчка",
    feature8Desc: "Боядисване в корпоративни цветове. Лога и текст – чрез ситопечат за професионален завършек.",

    // Trademarks
    trademarksLabel: "Регистрирани търговски марки:",

    // Technical Specifications
    techBadge: "ТЕХНИЧЕСКИ ДАННИ",
    techTitle: "Спецификации",
    techSubtitle: "Метални варели 216,5 л",
    techTableTitle: "Технически параметри",
    techTableSubtitle: "Големи метални варели (216,5 л)",
    unCertified: "ООН сертифицирани",

    // Table Headers
    thVolume: "Номинален обем [дм³]",
    thTop: "Дебелина [мм] горна част",
    thBody: "Дебелина [мм] тяло",
    thBottom: "Дебелина [мм] дъно",
    thType: "Тип",
    thWeight: "Тегло [кг] ± 3%",
    thUnMarkings: "UN маркировка",

    // Table Footer
    configsAvailable: "Налични са 6 стандартни конфигурации",
    downloadSpecs: "Изтегли пълната спецификация",

    // Material Specifications
    materialBadge: "КОНСТРУКТИВНИ ДЕТАЙЛИ",
    materialTitle: "Материали и конструкция",

    // Material Specs List
    material1Title: "Стомана",
    material1Desc: "Листова стомана – търговско качество. Спецификация по EN 10130 / EN 10131 или еквивалентни стандарти.",

    material2Title: "Затварящи елементи",
    material2Desc: "Две тапи Tri-Sure® 4S® – G2 и G ¾, произведени съгласно ISO 15750. Могат да се запечатват с Tab-Seal® капачки – стандартни или по дизайн на клиента. Окомплектовани са с високопроизводителни уплътнителни шайби на Varmet.",

    material3Title: "Конструкция",
    material3Desc: "Тяло: електрозаварен надлъжен шев. Конфигурация Spiraltainer®. При дебелини под 1,0 мм – се използва 2×3 гофриране за оптимална устойчивост на вакуум.",

    material4Title: "Сглобяване",
    material4Desc: "Тройният шев Varmet Spiralon осигурява надеждна херметичност и безопасна експлоатация.",

    material5Title: "Стандарти",
    material5Desc: "EN 210",

    material6Title: "Вътрешна облицовка",
    material6Desc: "При нужда от допълнителна химическа устойчивост, Varmet предлага епоксидна или епокси-фенолна водоразтворима облицовка.",

    material7Title: "Външно боядисване и декорации",
    material7Desc: "Цветове по стандартната RAL гама на Varmet (или по задание на клиента). Опции: многоцветно боядисване и едноцветен ситопечат.",

    // Contact Section
    contactBadge: "ГОТОВИ ЗА ПОРЪЧКА",
    contactTitle: "Заяви метални варели още днес",
    contactDescription: "Свържи се с нас за цена, технически параметри и производство по поръчка.",
    ctaContact: "Свържи се с нас",
    ctaPhone: "Обади се: +359 890 998837",
  }
};

export default function SteelDrumsPage() {
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

  const t = steelDrumsContent[language as keyof typeof steelDrumsContent];

  // Handle download presentation
  const handleDownloadPresentation = () => {
    // Replace this with the actual path to your presentation file
    const presentationUrl = "/presentation.pdf";
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = presentationUrl;
    link.download = "presentation.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Features data with bilingual support
  const features = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: t.feature1Title,
      description: t.feature1Desc,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: t.feature2Title,
      description: t.feature2Desc,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: t.feature3Title,
      description: t.feature3Desc,
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      icon: <Paintbrush className="w-7 h-7" />,
      title: t.feature4Title,
      description: t.feature4Desc,
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: t.feature5Title,
      description: t.feature5Desc,
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: t.feature6Title,
      description: t.feature6Desc,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: t.feature7Title,
      description: t.feature7Desc,
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: t.feature8Title,
      description: t.feature8Desc,
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100",
    },
  ];

  // Technical specifications
  const technicalSpecs = [
    {
      volume: "216,5",
      topThickness: "0,8",
      bodyThickness: "0,7",
      bottomThickness: "0,8",
      weight: "12,6",
      unMarking: "UN 1A1/Y1,4/150/…",
      type: "A B C"
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "0,8",
      bottomThickness: "1,0",
      weight: "14,8",
      unMarking: "UN 1A1/Y1,2/150/…",
      type: "A B C"
    },
    {
      volume: "216,5",
      topThickness: "0,9",
      bodyThickness: "0,9",
      bottomThickness: "0,9",
      weight: "15,6",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C"
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "0,9",
      bottomThickness: "1,0",
      weight: "16,5",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C"
    },
    {
      volume: "216,5",
      topThickness: "1,0",
      bodyThickness: "1,0",
      bottomThickness: "1,0",
      weight: "17,4",
      unMarking: "UN 1A1/X1,4/250/…",
      type: "A B C"
    },
    {
      volume: "216,5",
      topThickness: "1,2",
      bodyThickness: "1,2",
      bottomThickness: "1,2",
      weight: "21,1",
      unMarking: "UN 1A1/X1,2/250/…",
      type: "A B C"
    },
  ];

  // Material specifications with bilingual support
  const materialSpecs = [
    {
      category: t.material1Title,
      description: t.material1Desc,
      icon: "⚙️"
    },
    {
      category: t.material2Title,
      description: t.material2Desc,
      icon: "🔒"
    },
    {
      category: t.material3Title,
      description: t.material3Desc,
      icon: "🏗️"
    },
    {
      category: t.material4Title,
      description: t.material4Desc,
      icon: "⚡"
    },
    {
      category: t.material5Title,
      description: t.material5Desc,
      icon: "📜"
    },
    {
      category: t.material6Title,
      description: t.material6Desc,
      icon: "🎨"
    },
    {
      category: t.material7Title,
      description: t.material7Desc,
      icon: "✨"
    },
  ];

  // Trademarks - same in both languages
  const trademarks = ["RDL", "Spiralon", "Tri-Sure", "4S", "Tab-Seal"];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-lg mb-10">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-[0.3em] text-white/95 uppercase">
                {t.badge}
              </span>
            </div>
            
            <div className="mb-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-[0.9]">
                  {t.title}
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300/90 mb-8">
                {t.subtitle}
              </h2>
            </div>
            
            <p className={`text-2xl md:text-3xl text-white/90 leading-relaxed max-w-4xl font-light mb-12 tracking-wide ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.description}
            </p>

            {/* UPDATED: Added Download Button */}
            <div className="flex flex-col sm:flex-row gap-5 items-start mb-8">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-100 px-10 py-5
                  text-lg font-bold text-black transition-all duration-500
                  hover:from-blue-50 hover:to-cyan-50 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-blue-500/25 min-w-[240px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t.ctaQuote}
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <a
                href="tel:+359890998837"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-blue-600 to-cyan-600 px-10 py-5
                  text-lg font-bold text-white transition-all duration-500
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-cyan-500/25 border border-blue-500/30 min-w-[240px]"
              >
                <Phone className="w-5 h-5 mr-3" />
                {t.ctaCall}
              </a>
            </div>

            {/* NEW: Download Presentation Button */}
            <div className="flex justify-center">
              <button
                onClick={handleDownloadPresentation}
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-gray-800 to-gray-900 px-10 py-4
                  text-base font-semibold text-white transition-all duration-500
                  hover:from-gray-900 hover:to-gray-800 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-gray-500/25 border border-gray-700/30 min-w-[240px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  {t.downloadPresentation}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-600/0 to-gray-500/0 
                  group-hover:from-gray-600/20 group-hover:to-gray-500/20 
                  transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <Factory className="w-32 h-32 mx-auto mb-8 text-blue-400 opacity-80" />
                      <p className="text-3xl font-bold mb-3">{t.industrialTitle}</p>
                      <p className="text-gray-300 text-lg">{t.industrialSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-10 group">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-5 group-hover:w-20 transition-all duration-300" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
                  {t.industrialBadge}
                </span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className={`text-xl leading-relaxed text-gray-700 mb-8 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.industrialParagraph1}
                </p>
                <p className={`text-xl leading-relaxed text-gray-700 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                  {t.industrialParagraph2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">{t.featuresBadge}</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                {t.featuresTitle}
                <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text mt-4">
                  {t.featuresSubtitle}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-8 
                    hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`} />
                  
                  <div className={`relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} 
                    border border-gray-200 group-hover:border-transparent transition-all duration-300`}>
                    <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                    {feature.title}
                  </h3>
                  
                  <p className={`text-gray-600 leading-relaxed text-sm relative ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trademarks */}
            <div className="mt-24 pt-12 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500 font-medium">
                  {t.trademarksLabel}{" "}
                  <span className="text-gray-700 font-bold">
                    {trademarks.join(" • ")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">{t.techBadge}</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                {t.techTitle}
                <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text mt-4">
                  {t.techSubtitle}
                </span>
              </h2>
            </div>

            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.techTableTitle}</h3>
                    <p className="text-gray-300 text-sm mt-1">{t.techTableSubtitle}</p>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-white text-sm font-medium">{t.unCertified}</span>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50/30">
                    <tr>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thVolume}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thTop}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thBody}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thBottom}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thType}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thWeight}
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        {t.thUnMarkings}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {technicalSpecs.map((spec, index) => (
                      <tr 
                        key={index}
                        className={`hover:bg-blue-50/30 transition-colors duration-200 group ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                      >
                        <td className="px-8 py-6 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3"></div>
                            <span className="text-lg font-bold text-gray-900">{spec.volume}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-lg text-gray-700">
                          {spec.topThickness}
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-lg text-gray-700">
                          {spec.bodyThickness}
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap text-lg text-gray-700">
                          {spec.bottomThickness}
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                            {spec.type}
                          </span>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {spec.weight}
                          </span>
                        </td>
                        <td className="px-8 py-6 whitespace-nowrap">
                          <span className="font-mono text-sm bg-gray-900 text-white px-3 py-1.5 rounded-lg">
                            {spec.unMarking}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 px-8 py-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <span className={language === 'bg' ? 'tracking-wide' : ''}>
                      {t.configsAvailable}
                    </span>
                  </div>
                  <button className={`group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {t.downloadSpecs}
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Specifications Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">{t.materialBadge}</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                {t.materialTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materialSpecs.map((spec, index) => (
                <div 
                  key={index}
                  className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-100 p-8 
                    hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="mb-6 text-3xl">{spec.icon}</div>
                  
                  <h3 className={`text-2xl font-bold text-gray-900 mb-5 ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {spec.category}
                  </h3>
                  
                  <p className={`text-gray-600 leading-relaxed ${language === 'bg' ? 'tracking-wide' : ''}`}>
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 shadow-lg mb-10">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase">
                {t.contactBadge}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              {t.contactTitle}
            </h2>
            
            <p className={`text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.contactDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-blue-600 to-cyan-600 px-12 py-6
                  text-lg font-bold text-white transition-all duration-500
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-cyan-500/25 border border-blue-500/30"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t.ctaContact}
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <a
                href="tel:+359890998837"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-50 px-12 py-6
                  text-lg font-bold text-gray-900 transition-all duration-500
                  hover:from-blue-50 hover:to-cyan-50 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-blue-500/25 border border-gray-200"
              >
                <Phone className="w-5 h-5 mr-3" />
                {t.ctaPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}