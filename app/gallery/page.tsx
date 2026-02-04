// app/gallery/page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Manually import all 20 gallery images
import gallery1 from "../assets/Images/gallery/1.jpg";
import gallery2 from "../assets/Images/gallery/2.jpg";
import gallery3 from "../assets/Images/gallery/3.jpg";
import gallery4 from "../assets/Images/gallery/4.jpg";
import gallery5 from "../assets/Images/gallery/5.jpg";
import gallery6 from "../assets/Images/gallery/6.jpg";
import gallery7 from "../assets/Images/gallery/7.jpg";
import gallery8 from "../assets/Images/gallery/8.jpg";
import gallery9 from "../assets/Images/gallery/9.jpg";
import gallery10 from "../assets/Images/gallery/10.jpg";
import gallery11 from "../assets/Images/gallery/11.jpg";
import gallery12 from "../assets/Images/gallery/12.jpg";
import gallery13 from "../assets/Images/gallery/13.jpg";
import gallery14 from "../assets/Images/gallery/14.jpg";
import gallery15 from "../assets/Images/gallery/15.jpg";
import gallery16 from "../assets/Images/gallery/16.jpg";
import gallery17 from "../assets/Images/gallery/17.jpg";
import gallery18 from "../assets/Images/gallery/18.jpg";
import gallery19 from "../assets/Images/gallery/19.jpg";
import gallery20 from "../assets/Images/gallery/20.jpg";

// Bilingual content for gallery
const galleryContent = {
  en: {
    badge: "VISUAL SHOWCASE",
    title: "Gallery",
    description: "Explore our work through a visual journey of industrial solutions, sustainable practices, and successful projects that define our commitment to excellence.",
    
    sectionBadge: "OUR WORK IN IMAGES",
    sectionTitleLine1: "Visual Portfolio",
    sectionTitleLine2: "Of Excellence",
    
    noImagesTitle: "No Images Found",
    noImagesDescription: "Please add images to the gallery folder",
    
    ctaBadge: "SEE MORE",
    ctaTitleLine1: "Want to See More?",
    ctaTitleLine2: "Contact Us Today",
    ctaDescription: "Interested in seeing our projects in person or discussing potential collaborations? Get in touch with our team for personalized consultations.",
    ctaButton: "Contact Us",
    
    // Modal content
    imageOf: "Image",
    of: "of",
    download: "Download",
    
    // Image alt texts - you might want to make these more descriptive
    imageAltPrefix: "VARMET Gallery Image",
  },
  bg: {
    badge: "ВИЗУАЛНА ПРЕЗЕНТАЦИЯ",
    title: "Галерия",
    description: "Разгледайте нашата работа чрез визуално пътешествие в индустриалните решения, устойчивите практики и успешните проекти, които определят ангажимента ни към качеството.",
    
    sectionBadge: "НАШАТА РАБОТА В ИЗОБРАЖЕНИЯ",
    sectionTitleLine1: "Визуално Портфолио",
    sectionTitleLine2: "",
    
    noImagesTitle: "Няма Намерени Изображения",
    noImagesDescription: "Моля, добавете изображения в галерийната папка",
    
    ctaBadge: "ВИЖ ОЩЕ",
    ctaTitleLine1: "Искате да видите още?",
    ctaTitleLine2: "Свържете се с нас днес",
    ctaDescription: "Интересувате ли се да видите нашите проекти на живо или да обсъдите потенциални сътрудничества? Свържете се с нашия екип за персонализирани консултации.",
    ctaButton: "Свържете се с нас",
    
    // Modal content
    imageOf: "Изображение",
    of: "от",
    download: "Изтегли",
    
    // Image alt texts
    imageAltPrefix: "VARMET Галерия Изображение",
  }
};

// Create image array with bilingual alt texts
const createGalleryImages = (language: string) => {
  const t = galleryContent[language as keyof typeof galleryContent];
  return [
    { id: 1, src: gallery1, alt: `${t.imageAltPrefix} 1` },
    { id: 2, src: gallery2, alt: `${t.imageAltPrefix} 2` },
    { id: 3, src: gallery3, alt: `${t.imageAltPrefix} 3` },
    { id: 4, src: gallery4, alt: `${t.imageAltPrefix} 4` },
    { id: 5, src: gallery5, alt: `${t.imageAltPrefix} 5` },
    { id: 6, src: gallery6, alt: `${t.imageAltPrefix} 6` },
    { id: 7, src: gallery7, alt: `${t.imageAltPrefix} 7` },
    { id: 8, src: gallery8, alt: `${t.imageAltPrefix} 8` },
    { id: 9, src: gallery9, alt: `${t.imageAltPrefix} 9` },
    { id: 10, src: gallery10, alt: `${t.imageAltPrefix} 10` },
    { id: 11, src: gallery11, alt: `${t.imageAltPrefix} 11` },
    { id: 12, src: gallery12, alt: `${t.imageAltPrefix} 12` },
    { id: 13, src: gallery13, alt: `${t.imageAltPrefix} 13` },
    { id: 14, src: gallery14, alt: `${t.imageAltPrefix} 14` },
    { id: 15, src: gallery15, alt: `${t.imageAltPrefix} 15` },
    { id: 16, src: gallery16, alt: `${t.imageAltPrefix} 16` },
    { id: 17, src: gallery17, alt: `${t.imageAltPrefix} 17` },
    { id: 18, src: gallery18, alt: `${t.imageAltPrefix} 18` },
    { id: 19, src: gallery19, alt: `${t.imageAltPrefix} 19` },
    { id: 20, src: gallery20, alt: `${t.imageAltPrefix} 20` },
  ];
};

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState("en");
  const [images, setImages] = useState<Array<{ id: number; src: any; alt: string }>>([]);
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: any; alt: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem("varmet-language") || "en";
    setLanguage(savedLang);
    
    // Create images with correct language
    const galleryImages = createGalleryImages(savedLang);
    setImages(galleryImages);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Listen for language changes from the LanguageSwitcher
    const handleLanguageChange = (event: CustomEvent) => {
      const newLang = event.detail.lang;
      setLanguage(newLang);
      
      // Update images with new language
      const galleryImages = createGalleryImages(newLang);
      setImages(galleryImages);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
    };
  }, []);

  const t = galleryContent[language as keyof typeof galleryContent];

  const openModal = useCallback((image: typeof images[0], index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const goToPrevious = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  const goToNext = useCallback(() => {
    if (images.length === 0) return;
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, images]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  // Handle swipe for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    }
    
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <main className="bg-white mt-10">
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
            
            <p className={`text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative py-24 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className={`mb-16 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center mb-8 group">
              <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
              <span className={`text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase ${language === 'bg' ? 'tracking-wide' : ''}`}>
                {t.sectionBadge}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.sectionTitleLine1}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                {t.sectionTitleLine2}
              </span>
            </h2>
          </div>

          {/* Gallery Grid */}
          {images.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{t.noImagesTitle}</h3>
              <p className="text-gray-500">{t.noImagesDescription}</p>
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-100 
                    hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
                    cursor-pointer`}
                  onClick={() => openModal(image, index)}
                >
                  {/* Gradient glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 
                        flex items-center justify-center transform group-hover:scale-100 scale-90 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
              border border-white/20 flex items-center justify-center text-white hover:bg-white/20 
              transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
              border border-white/20 flex items-center justify-center text-white hover:bg-white/20 
              transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
              border border-white/20 flex items-center justify-center text-white hover:bg-white/20 
              transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-6xl max-h-[80vh] w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedImage.alt}</h3>
                  <p className="text-sm text-white/70 mt-1">
                    {t.imageOf} {currentIndex + 1} {t.of} {images.length}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => {
                      // For imported images, we need to create a blob URL
                      fetch(selectedImage.src)
                        .then(res => res.blob())
                        .then(blob => {
                          const url = window.URL.createObjectURL(blob);
                          const link = document.createElement('a');
                          link.href = url;
                          link.download = `varmet-gallery-${selectedImage.id}.jpg`;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                          window.URL.revokeObjectURL(url);
                        })
                        .catch(err => console.error('Download failed:', err));
                    }}
                    className={`px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 
                      text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 ${language === 'bg' ? 'tracking-wide' : ''}`}
                  >
                    {t.download}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] px-4 py-2">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(index);
                }}
                className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0
                  ${index === currentIndex ? 'border-blue-500 scale-110' : 'border-transparent hover:border-white/50'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className={`relative mx-auto max-w-5xl px-6 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
            <span className={`text-sm font-semibold tracking-[0.3em] text-blue-200 uppercase ${language === 'bg' ? 'tracking-wide' : ''}`}>
              {t.ctaBadge}
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t.ctaTitleLine1}
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              {t.ctaTitleLine2}
            </span>
          </h2>
          
          <p className={`text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light ${language === 'bg' ? 'tracking-wide' : ''}`}>
            {t.ctaDescription}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className={`group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-white to-gray-100 
                text-base font-semibold text-gray-900 transition-all duration-300
                hover:from-blue-100 hover:to-cyan-100 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg inline-flex items-center justify-center ${language === 'bg' ? 'tracking-wide' : ''}`}
            >
              {t.ctaButton}
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}