// app/gallery/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useCallback, useState } from "react";

// Import all images with EXACT filenames from the list
// UAN и AdBlue
import uanAdblue from "../assets/Images/UAN и AdBlue.jpg";

// Алтернативни горива
import altGoriva1 from "../assets/Images/Алтернативни горива 1.jpg";
import altGoriva2 from "../assets/Images/Алтернативни горива 2.jpg";
import altGoriva3 from "../assets/Images/Алтернативни горива 3.jpg";
import altGoriva4 from "../assets/Images/Алтернативни горива 4.jpg";
import altGoriva5 from "../assets/Images/Алтернативни горива 5.jpg";
import altGoriva6 from "../assets/Images/Алтернативни горива 6.jpg";
import altGoriva7 from "../assets/Images/Алтернативни горива 7.jpg";
import altGoriva8 from "../assets/Images/Алтернативни горива 8.jpg";
import altGoriva from "../assets/Images/Алтернативни горива.jpg";

// Варели
import vaarel from "../assets/Images/Ваарел.jpg";
import varel4 from "../assets/Images/Варел 4.jpg";
import varel5 from "../assets/Images/Варел 5.jpg";
import vareliCopy from "../assets/Images/Варели - Copy.jpg";
import vareli1 from "../assets/Images/Варели 1.jpg";
import vareliZaglavna from "../assets/Images/Варели заглавна снимка.jpg";
import vareli from "../assets/Images/Варели.jpg";

// Палета
import paleta1 from "../assets/Images/Палета 1.jpg";
import paleta2 from "../assets/Images/Палета 2.jpg";
import paleta3 from "../assets/Images/Палета 3.jpg";
import paleta4 from "../assets/Images/Палета 4.jpg";
import paleta5 from "../assets/Images/Палета 5.jpg";
import paleta6 from "../assets/Images/Палета 6.jpg";
import paleta7 from "../assets/Images/Палета 7.jpg";
import paletaZaglavna from "../assets/Images/Палета заглавна снимка.jpg";

// Пластмасово пале
import plastmasovo1 from "../assets/Images/Пластмасово пале 1.jpg";
import plastmasovo2 from "../assets/Images/Пластмасово пале 2.jpg";
import plastmasovo3 from "../assets/Images/Пластмасово пале 3.jpg";
import plastmasovo from "../assets/Images/Пластмасово пале.jpg";

// Строй
import stroy1 from "../assets/Images/Строй 1.jpg";
import stroy2 from "../assets/Images/строй 2.jpg";
import stroy4Copy from "../assets/Images/строй 4 - Copy.jpg";
import stroy4 from "../assets/Images/строй 4.jpg";
import stroy5 from "../assets/Images/строй 5.jpg";
import stroy6 from "../assets/Images/строй 6.jpg";
import stroy7 from "../assets/Images/строй 7.jpg";
import stroy8 from "../assets/Images/строй 8.jpg";
import stroy9 from "../assets/Images/строй 9.jpg";
import stroy10 from "../assets/Images/строй 10.jpg";
import stroy11 from "../assets/Images/строй 11.jpg";
import stroy12 from "../assets/Images/строй 12.jpg";
import stroy13 from "../assets/Images/строй 13.jpg";
import stroy from "../assets/Images/Строй.jpg";

// Техническа
import tehUreya from "../assets/Images/Техническа Урея спецификация.jpg";

// Торове
import torove2 from "../assets/Images/Торове 2.jpg";
import toroveUreya from "../assets/Images/Торове Урея.jpg";

// Цех Палета
import cehPaleta1 from "../assets/Images/Цех Палета 1.jpg";
import cehPaleta3 from "../assets/Images/Цех Палета 3.jpg";
import cehPaleta4Copy from "../assets/Images/Цех Палета 4 - Copy.jpg";
import cehPaleta4 from "../assets/Images/Цех Палета 4.jpg";
import cehPaleta5Copy from "../assets/Images/Цех Палета 5 - Copy.jpg";
import cehPaleta5 from "../assets/Images/Цех Палета 5.jpg";
import cehPaleta from "../assets/Images/Цех Палета.jpg";

type Lang = "en" | "bg";

interface GalleryImage {
  id: string;
  src: any;
  alt: string;
  category: string;
  categoryBg: string;
  displayName: string; // Clean display name without "Copy" or extra text
}

interface Category {
  id: string;
  name: string;
  nameBg: string;
  images: GalleryImage[];
}

const galleryContent = {
  en: {
    title: "Gallery",
    description: "Products and production process at VARMET",
    cta: "Contact",
    phone: "+359 890 99 88 37",
    close: "Close",
    prev: "Previous",
    next: "Next",
    download: "Download",
    categories: {
      uanAdblue: "UAN and AdBlue",
      altGoriva: "Alternative Fuels",
      vareli: "Barrels",
      paleta: "Pallets",
      plastmasovo: "Plastic Pallets",
      stroy: "Construction",
      tehnicheski: "Technical Documentation",
      torove: "Fertilizers",
      cehPaleta: "Workshop Pallets"
    }
  },
  bg: {
    title: "Галерия",
    description: "Продукти и производствен процес във VARMET",
    cta: "Контакт",
    phone: "+359 890 99 88 37",
    close: "Затвори",
    prev: "Назад",
    next: "Напред",
    download: "Изтегли",
    categories: {
      uanAdblue: "UAN и AdBlue",
      altGoriva: "Алтернативни горива",
      vareli: "Варели",
      paleta: "Палета",
      plastmasovo: "Пластмасово пале",
      stroy: "Строй",
      tehnicheski: "Техническа документация",
      torove: "Торове",
      cehPaleta: "Цех Палета"
    }
  },
} as const;

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem("varmet-language");
  return raw === "bg" ? "bg" : "en";
};

// Helper function to clean display names
const cleanDisplayName = (filename: string): string => {
  return filename
    .replace(/\s*[-–—]\s*Copy\s*/gi, '') // Remove " - Copy", "– Copy", "— Copy"
    .replace(/\s*[-–—]\s*копие\s*/gi, '') // Remove Bulgarian "копие"
    .replace(/\s*[-–—]\s*\(\d+\)\s*/gi, '') // Remove " (1)", " (2)" etc.
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();
};

// Organize images by categories with CLEAN display names
const createGalleryCategories = (language: Lang): Category[] => {
  const t = galleryContent[language];
  
  return [
    {
      id: "uanAdblue",
      name: t.categories.uanAdblue,
      nameBg: galleryContent.bg.categories.uanAdblue,
      images: [
        { 
          id: "uan-1", 
          src: uanAdblue, 
          alt: "UAN и AdBlue", 
          category: "uanAdblue", 
          categoryBg: "UAN и AdBlue", 
          displayName: "UAN и AdBlue" 
        },
      ]
    },
    {
      id: "altGoriva",
      name: t.categories.altGoriva,
      nameBg: galleryContent.bg.categories.altGoriva,
      images: [
        { id: "alt-1", src: altGoriva1, alt: "Алтернативни горива 1", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 1" },
        { id: "alt-2", src: altGoriva2, alt: "Алтернативни горива 2", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 2" },
        { id: "alt-3", src: altGoriva3, alt: "Алтернативни горива 3", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 3" },
        { id: "alt-4", src: altGoriva4, alt: "Алтернативни горива 4", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 4" },
        { id: "alt-5", src: altGoriva5, alt: "Алтернативни горива 5", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 5" },
        { id: "alt-6", src: altGoriva6, alt: "Алтернативни горива 6", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 6" },
        { id: "alt-7", src: altGoriva7, alt: "Алтернативни горива 7", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 7" },
        { id: "alt-8", src: altGoriva8, alt: "Алтернативни горива 8", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива 8" },
        { id: "alt-9", src: altGoriva, alt: "Алтернативни горива", category: "altGoriva", categoryBg: "Алтернативни горива", displayName: "Алтернативни горива" },
      ]
    },
    {
      id: "vareli",
      name: t.categories.vareli,
      nameBg: galleryContent.bg.categories.vareli,
      images: [
        { id: "vareli-1", src: vaarel, alt: "Ваарел", category: "vareli", categoryBg: "Варели", displayName: "Варел" },
        { id: "vareli-2", src: varel4, alt: "Варел 4", category: "vareli", categoryBg: "Варели", displayName: "Варел 4" },
        { id: "vareli-3", src: varel5, alt: "Варел 5", category: "vareli", categoryBg: "Варели", displayName: "Варел 5" },
        { id: "vareli-4", src: vareliCopy, alt: "Варели - Copy", category: "vareli", categoryBg: "Варели", displayName: "Варели" },
        { id: "vareli-5", src: vareli1, alt: "Варели 1", category: "vareli", categoryBg: "Варели", displayName: "Варели 1" },
        { id: "vareli-6", src: vareliZaglavna, alt: "Варели заглавна снимка", category: "vareli", categoryBg: "Варели", displayName: "Варели" },
        { id: "vareli-7", src: vareli, alt: "Варели", category: "vareli", categoryBg: "Варели", displayName: "Варели" },
      ]
    },
    {
      id: "paleta",
      name: t.categories.paleta,
      nameBg: galleryContent.bg.categories.paleta,
      images: [
        { id: "paleta-1", src: paleta1, alt: "Палета 1", category: "paleta", categoryBg: "Палета", displayName: "Палета 1" },
        { id: "paleta-2", src: paleta2, alt: "Палета 2", category: "paleta", categoryBg: "Палета", displayName: "Палета 2" },
        { id: "paleta-3", src: paleta3, alt: "Палета 3", category: "paleta", categoryBg: "Палета", displayName: "Палета 3" },
        { id: "paleta-4", src: paleta4, alt: "Палета 4", category: "paleta", categoryBg: "Палета", displayName: "Палета 4" },
        { id: "paleta-5", src: paleta5, alt: "Палета 5", category: "paleta", categoryBg: "Палета", displayName: "Палета 5" },
        { id: "paleta-6", src: paleta6, alt: "Палета 6", category: "paleta", categoryBg: "Палета", displayName: "Палета 6" },
        { id: "paleta-7", src: paleta7, alt: "Палета 7", category: "paleta", categoryBg: "Палета", displayName: "Палета 7" },
        { id: "paleta-8", src: paletaZaglavna, alt: "Палета заглавна снимка", category: "paleta", categoryBg: "Палета", displayName: "Палета" },
      ]
    },
    {
      id: "plastmasovo",
      name: t.categories.plastmasovo,
      nameBg: galleryContent.bg.categories.plastmasovo,
      images: [
        { id: "plast-1", src: plastmasovo1, alt: "Пластмасово пале 1", category: "plastmasovo", categoryBg: "Пластмасово пале", displayName: "Пластмасово пале 1" },
        { id: "plast-2", src: plastmasovo2, alt: "Пластмасово пале 2", category: "plastmasovo", categoryBg: "Пластмасово пале", displayName: "Пластмасово пале 2" },
        { id: "plast-3", src: plastmasovo3, alt: "Пластмасово пале 3", category: "plastmasovo", categoryBg: "Пластмасово пале", displayName: "Пластмасово пале 3" },
        { id: "plast-4", src: plastmasovo, alt: "Пластмасово пале", category: "plastmasovo", categoryBg: "Пластмасово пале", displayName: "Пластмасово пале" },
      ]
    },
    {
      id: "stroy",
      name: t.categories.stroy,
      nameBg: galleryContent.bg.categories.stroy,
      images: [
        { id: "stroy-1", src: stroy1, alt: "Строй 1", category: "stroy", categoryBg: "Строй", displayName: "Строй 1" },
        { id: "stroy-2", src: stroy2, alt: "строй 2", category: "stroy", categoryBg: "Строй", displayName: "Строй 2" },
        { id: "stroy-3", src: stroy4Copy, alt: "строй 4 - Copy", category: "stroy", categoryBg: "Строй", displayName: "Строй 4" },
        { id: "stroy-4", src: stroy4, alt: "строй 4", category: "stroy", categoryBg: "Строй", displayName: "Строй 4" },
        { id: "stroy-5", src: stroy5, alt: "строй 5", category: "stroy", categoryBg: "Строй", displayName: "Строй 5" },
        { id: "stroy-6", src: stroy6, alt: "строй 6", category: "stroy", categoryBg: "Строй", displayName: "Строй 6" },
        { id: "stroy-7", src: stroy7, alt: "строй 7", category: "stroy", categoryBg: "Строй", displayName: "Строй 7" },
        { id: "stroy-8", src: stroy8, alt: "строй 8", category: "stroy", categoryBg: "Строй", displayName: "Строй 8" },
        { id: "stroy-9", src: stroy9, alt: "строй 9", category: "stroy", categoryBg: "Строй", displayName: "Строй 9" },
        { id: "stroy-10", src: stroy10, alt: "строй 10", category: "stroy", categoryBg: "Строй", displayName: "Строй 10" },
        { id: "stroy-11", src: stroy11, alt: "строй 11", category: "stroy", categoryBg: "Строй", displayName: "Строй 11" },
        { id: "stroy-12", src: stroy12, alt: "строй 12", category: "stroy", categoryBg: "Строй", displayName: "Строй 12" },
        { id: "stroy-13", src: stroy13, alt: "строй 13", category: "stroy", categoryBg: "Строй", displayName: "Строй 13" },
        { id: "stroy-14", src: stroy, alt: "Строй", category: "stroy", categoryBg: "Строй", displayName: "Строй" },
      ]
    },
    {
      id: "tehnicheski",
      name: t.categories.tehnicheski,
      nameBg: galleryContent.bg.categories.tehnicheski,
      images: [
        { id: "teh-1", src: tehUreya, alt: "Техническа Урея спецификация", category: "tehnicheski", categoryBg: "Техническа документация", displayName: "Техническа спецификация Урея" },
      ]
    },
    {
      id: "torove",
      name: t.categories.torove,
      nameBg: galleryContent.bg.categories.torove,
      images: [
        { id: "torove-1", src: torove2, alt: "Торове 2", category: "torove", categoryBg: "Торове", displayName: "Торове 2" },
        { id: "torove-2", src: toroveUreya, alt: "Торове Урея", category: "torove", categoryBg: "Торове", displayName: "Торове Урея" },
      ]
    },
    {
      id: "cehPaleta",
      name: t.categories.cehPaleta,
      nameBg: galleryContent.bg.categories.cehPaleta,
      images: [
        { id: "ceh-1", src: cehPaleta1, alt: "Цех Палета 1", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 1" },
        { id: "ceh-2", src: cehPaleta3, alt: "Цех Палета 3", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 3" },
        { id: "ceh-3", src: cehPaleta4Copy, alt: "Цех Палета 4 - Copy", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 4" },
        { id: "ceh-4", src: cehPaleta4, alt: "Цех Палета 4", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 4" },
        { id: "ceh-5", src: cehPaleta5Copy, alt: "Цех Палета 5 - Copy", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 5" },
        { id: "ceh-6", src: cehPaleta5, alt: "Цех Палета 5", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета 5" },
        { id: "ceh-7", src: cehPaleta, alt: "Цех Палета", category: "cehPaleta", categoryBg: "Цех Палета", displayName: "Цех Палета" },
      ]
    }
  ];
};

export default function GalleryPage() {
  const [language, setLanguage] = useState<Lang>("en");
  const t = useMemo(() => galleryContent[language], [language]);
  
  const [categories, setCategories] = useState<Category[]>([]);
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const saved = getStoredLang();
    setLanguage(saved);
    const cats = createGalleryCategories(saved);
    setCategories(cats);
    setAllImages(cats.flatMap(cat => cat.images));
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const next: Lang = event.detail?.lang === "bg" ? "bg" : "en";
      setLanguage(next);
      const cats = createGalleryCategories(next);
      setCategories(cats);
      setAllImages(cats.flatMap(cat => cat.images));
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const openModal = useCallback((image: GalleryImage) => {
    const index = allImages.findIndex(img => img.id === image.id);
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, [allImages]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrevious = useCallback(() => {
    if (allImages.length === 0) return;
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, allImages]);

  const goToNext = useCallback(() => {
    if (allImages.length === 0) return;
    const newIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex, allImages]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  // Mobile swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrevious();
  };

  return (
    <main className="bg-white mt-10">
      {/* HERO SECTION */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t.title}</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">{t.description}</p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
            >
              {t.cta}
            </Link>
            <a
              href="tel:+359890998837"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-900 hover:border-gray-300 transition"
            >
              {t.phone}
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY BY CATEGORIES */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          {categories.length === 0 ? (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800">No images</h3>
              <p className="text-gray-500 mt-2">Add images to the gallery</p>
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map((category, categoryIndex) => (
                <div key={category.id}>
                  {/* Category Header with divider */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {language === "bg" ? category.nameBg : category.name}
                    </h2>
                    <div className="h-1 w-20 bg-gray-900 mt-2"></div>
                  </div>
                  
                  {/* Category Images Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                    {category.images.map((img) => (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => openModal(img)}
                        className="group text-left"
                        aria-label={img.alt}
                      >
                        <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                          <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                              quality={90}
                            />
                            
                            {/* Minimal overlay for text contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Image display name - only shows on hover */}
                            <div className="absolute left-3 right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-white text-xs font-medium drop-shadow-lg block text-center">
                                {img.displayName}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Divider between categories (except last) */}
                  {categoryIndex < categories.length - 1 && (
                    <div className="mt-16 border-t border-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* click outside */}
          <button className="absolute inset-0" onClick={closeModal} aria-label={t.close} />

          <div className="relative w-full max-w-7xl">
            {/* Top bar with clean display name */}
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
              <div className="text-white">
                <p className="text-sm font-medium">
                  {currentIndex + 1} / {allImages.length}
                </p>
                <p className="text-xs text-white/80 mt-0.5">
                  {language === "bg" ? selectedImage.categoryBg : selectedImage.category}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const url = (selectedImage.src as any).src || selectedImage.src;
                    fetch(url)
                      .then((res) => res.blob())
                      .then((blob) => {
                        const dl = window.URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = dl;
                        a.download = `varmet-${selectedImage.id}.jpg`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(dl);
                      })
                      .catch(() => {});
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition text-xs font-medium text-white backdrop-blur-sm"
                >
                  {t.download}
                </button>

                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition flex items-center justify-center backdrop-blur-sm"
                  aria-label={t.close}
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image */}
            <div
              className="relative w-full h-[80vh]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </div>

            {/* Clean display name at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-medium text-center">
                {selectedImage.displayName}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white backdrop-blur-sm"
              aria-label={t.prev}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white backdrop-blur-sm"
              aria-label={t.next}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}