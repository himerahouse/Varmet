// app/gallery/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useCallback, useState } from "react";

// Manually import all 48 gallery images
import gallery1 from "../assets/Images/gallery/1.jpg";
import gallery2 from "../assets/Images/gallery/2.jpg";
import gallery3 from "../assets/Images/gallery/3.jpg";
import gallery4 from "../assets/Images/gallery/4.jpg";
import gallery5 from "../assets/Images/gallery/5.jpg";
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
import gallery19 from "../assets/Images/gallery/19.jpg";
import gallery20 from "../assets/Images/gallery/20.jpg";
import gallery21 from "../assets/Images/gallery/21.jpg";
import gallery22 from "../assets/Images/gallery/22.jpg";
import gallery23 from "../assets/Images/gallery/23.jpg";
import gallery24 from "../assets/Images/gallery/24.jpg";
import gallery25 from "../assets/Images/gallery/25.jpg";
import gallery26 from "../assets/Images/gallery/26.jpg";
import gallery27 from "../assets/Images/gallery/27.jpg";
import gallery28 from "../assets/Images/gallery/28.jpg";
import gallery29 from "../assets/Images/gallery/29.jpg";
import gallery30 from "../assets/Images/gallery/30.jpg";
import gallery31 from "../assets/Images/gallery/31.jpg";
import gallery32 from "../assets/Images/gallery/32.jpg";
import gallery33 from "../assets/Images/gallery/33.jpg";
import gallery34 from "../assets/Images/gallery/34.jpg";
import gallery35 from "../assets/Images/gallery/35.jpg";
import gallery36 from "../assets/Images/gallery/36.jpg";
import gallery37 from "../assets/Images/gallery/37.jpg";
import gallery38 from "../assets/Images/gallery/38.jpg";
import gallery39 from "../assets/Images/gallery/39.jpg";
import gallery40 from "../assets/Images/gallery/40.jpg";
import gallery41 from "../assets/Images/gallery/41.jpg";
import gallery42 from "../assets/Images/gallery/42.jpg";
import gallery43 from "../assets/Images/gallery/43.jpg";
import gallery44 from "../assets/Images/gallery/44.jpg";
import gallery45 from "../assets/Images/gallery/45.jpg";
import gallery46 from "../assets/Images/gallery/46.jpg";
import gallery47 from "../assets/Images/gallery/47.jpg";
import gallery48 from "../assets/Images/gallery/48.jpg";

type Lang = "en" | "bg";
type GalleryImage = { id: number; src: any; alt: string };

const galleryContent = {
  en: {
    title: "Gallery",
    description: "A quick look at selected projects and work in progress.",
    cta: "Contact",
    phone: "+359 890 99 88 37",
    imageAltPrefix: "VARMET Gallery Image",
    imageOf: "Image",
    of: "of",
    close: "Close",
    prev: "Previous",
    next: "Next",
    download: "Download",
    noImagesTitle: "No images",
    noImagesDescription: "Add images to the gallery folder.",
  },
  bg: {
    title: "Галерия",
    description: "Бърз поглед към избрани проекти и дейности.",
    cta: "Контакт",
    phone: "+359 890 99 88 37",
    imageAltPrefix: "VARMET Галерия Изображение",
    imageOf: "Изображение",
    of: "от",
    close: "Затвори",
    prev: "Назад",
    next: "Напред",
    download: "Изтегли",
    noImagesTitle: "Няма изображения",
    noImagesDescription: "Добавете снимки в папката на галерията.",
  },
} as const;

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem("varmet-language");
  return raw === "bg" ? "bg" : "en";
};

const createGalleryImages = (language: Lang): GalleryImage[] => {
  const t = galleryContent[language];
  return [
    { id: 1, src: gallery1, alt: `${t.imageAltPrefix} 1` },
    { id: 2, src: gallery2, alt: `${t.imageAltPrefix} 2` },
    { id: 3, src: gallery3, alt: `${t.imageAltPrefix} 3` },
    { id: 4, src: gallery4, alt: `${t.imageAltPrefix} 4` },
    { id: 5, src: gallery5, alt: `${t.imageAltPrefix} 5` },
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
    { id: 19, src: gallery19, alt: `${t.imageAltPrefix} 19` },
    { id: 20, src: gallery20, alt: `${t.imageAltPrefix} 20` },
    { id: 21, src: gallery21, alt: `${t.imageAltPrefix} 21` },
    { id: 22, src: gallery22, alt: `${t.imageAltPrefix} 22` },
    { id: 23, src: gallery23, alt: `${t.imageAltPrefix} 23` },
    { id: 24, src: gallery24, alt: `${t.imageAltPrefix} 24` },
    { id: 25, src: gallery25, alt: `${t.imageAltPrefix} 25` },
    { id: 26, src: gallery26, alt: `${t.imageAltPrefix} 26` },
    { id: 27, src: gallery27, alt: `${t.imageAltPrefix} 27` },
    { id: 28, src: gallery28, alt: `${t.imageAltPrefix} 28` },
    { id: 29, src: gallery29, alt: `${t.imageAltPrefix} 29` },
    { id: 30, src: gallery30, alt: `${t.imageAltPrefix} 30` },
    { id: 31, src: gallery31, alt: `${t.imageAltPrefix} 31` },
    { id: 32, src: gallery32, alt: `${t.imageAltPrefix} 32` },
    { id: 33, src: gallery33, alt: `${t.imageAltPrefix} 33` },
    { id: 34, src: gallery34, alt: `${t.imageAltPrefix} 34` },
    { id: 35, src: gallery35, alt: `${t.imageAltPrefix} 35` },
    { id: 36, src: gallery36, alt: `${t.imageAltPrefix} 36` },
    { id: 37, src: gallery37, alt: `${t.imageAltPrefix} 37` },
    { id: 38, src: gallery38, alt: `${t.imageAltPrefix} 38` },
    { id: 39, src: gallery39, alt: `${t.imageAltPrefix} 39` },
    { id: 40, src: gallery40, alt: `${t.imageAltPrefix} 40` },
    { id: 41, src: gallery41, alt: `${t.imageAltPrefix} 41` },
    { id: 42, src: gallery42, alt: `${t.imageAltPrefix} 42` },
    { id: 43, src: gallery43, alt: `${t.imageAltPrefix} 43` },
    { id: 44, src: gallery44, alt: `${t.imageAltPrefix} 44` },
    { id: 45, src: gallery45, alt: `${t.imageAltPrefix} 45` },
    { id: 46, src: gallery46, alt: `${t.imageAltPrefix} 46` },
    { id: 47, src: gallery47, alt: `${t.imageAltPrefix} 47` },
    { id: 48, src: gallery48, alt: `${t.imageAltPrefix} 48` },
  ];
};

export default function GalleryPage() {
  const [language, setLanguage] = useState<Lang>("en");
  const t = useMemo(() => galleryContent[language], [language]);

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const saved = getStoredLang();
    setLanguage(saved);
    setImages(createGalleryImages(saved));
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const next: Lang = event.detail?.lang === "bg" ? "bg" : "en";
      setLanguage(next);
      setImages(createGalleryImages(next));
    };
    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const openModal = useCallback((image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
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
      {/* SIMPLE HERO */}
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

      {/* GALLERY (simple section, images look premium) */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-6">
          {images.length === 0 ? (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{t.noImagesTitle}</h3>
              <p className="text-gray-500 mt-2">{t.noImagesDescription}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {images.map((img, index) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => openModal(img, index)}
                  className="group text-left"
                  aria-label={img.alt}
                >
                  {/* Clean card */}
                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    {/* Image frame: consistent ratio + nice crop */}
                    <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />

                      {/* Very subtle overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />

                      {/* Minimal label */}
                      <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                        <span className="text-white/90 text-xs font-semibold">
                          {t.imageOf} {index + 1} {t.of} {images.length}
                        </span>
                        <span className="text-white/85 text-xs font-semibold tracking-wider">
                          {language === "bg" ? "ВИЖ" : "VIEW"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX (simple UI, image looks premium) */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          {/* click outside */}
          <button className="absolute inset-0" onClick={closeModal} aria-label={t.close} />

          <div className="relative w-full max-w-6xl">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between gap-3 text-white">
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">
                  {t.imageOf} {currentIndex + 1} {t.of} {images.length} — {selectedImage.alt}
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
                        a.download = `varmet-gallery-${selectedImage.id}.jpg`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(dl);
                      })
                      .catch(() => {});
                  }}
                  className="px-3 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition text-sm font-semibold"
                >
                  {t.download}
                </button>

                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition flex items-center justify-center"
                  aria-label={t.close}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image frame */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full h-[70vh] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Thumbnails (simple) */}
              <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="px-3 py-3 overflow-x-auto">
                  <div className="flex gap-2">
                    {images.map((img, idx) => {
                      const active = idx === currentIndex;
                      return (
                        <button
                          key={img.id}
                          onClick={() => {
                            setSelectedImage(img);
                            setCurrentIndex(idx);
                          }}
                          className={`relative w-14 h-14 rounded-lg overflow-hidden border flex-shrink-0 transition
                            ${active ? "border-white/70" : "border-white/15 hover:border-white/35"}`}
                          aria-label={img.alt}
                        >
                          <Image src={img.src} alt={img.alt} fill className="object-cover" />
                          {active && <div className="absolute inset-0 bg-white/10" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition flex items-center justify-center text-white"
              aria-label={t.prev}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition flex items-center justify-center text-white"
              aria-label={t.next}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}