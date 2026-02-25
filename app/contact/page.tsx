"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";

type Lang = "en" | "bg";

const contactContent = {
  en: {
    // Hero
    badge: "CONTACT US",
    titleLine1: "Get in",
    titleLine2: "Touch",
    description:
      "Send us a message or reach us directly by phone/email. We respond as soon as possible during working hours.",
    cta: "Back to Home",

    // Form
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

    // Info
    infoBadge: "CONTACT",
    emailTitle: "Email",
    phoneTitle: "Phone",
    workingHoursTitle: "Working hours",
    addressTitle: "Address",

    // Details
    email: "office@varmet.bg",
    phone: "+359 890 99 88 27",
    workingHours: "Monday - Friday: 09:00 - 18:00",
    addressLine1: "1700 Sofia,",
    addressLine2: "2B Yordan Stratiev Street",

    // Alerts
    success: "Message sent successfully! We'll contact you soon.",
  },
  bg: {
    // Hero
    badge: "СВЪРЖЕТЕ СЕ С НАС",
    titleLine1: "Свържете се",
    titleLine2: "с нас",
    description:
      "Изпратете ни съобщение или се свържете директно по телефон/имейл. Отговаряме възможно най-бързо в работно време.",
    cta: "Начало",

    // Form
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

    // Info
    infoBadge: "КОНТАКТИ",
    emailTitle: "Имейл",
    phoneTitle: "Телефон",
    workingHoursTitle: "Работно време",
    addressTitle: "Адрес",

    // Details
    email: "office@varmet.bg",
    phone: "+359 890 99 88 27",
    workingHours: "Понеделник - Петък: 09:00 - 18:00",
    addressLine1: "1700 София,",
    addressLine2: "ул. Йордан Стратиев 2Б",

    // Alerts
    success: "Съобщението е изпратено успешно! Ще се свържем с вас скоро.",
  },
} as const;

const getStoredLang = (): Lang => {
  if (typeof window === "undefined") return "en";
  const raw = localStorage.getItem("varmet-language");
  return raw === "bg" ? "bg" : "en";
};

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<Lang>("en");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const saved = getStoredLang();
    setLanguage(saved);
    const t = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      const next: Lang = event.detail?.lang === "bg" ? "bg" : "en";
      setLanguage(next);
    };

    window.addEventListener("language-changed", handleLanguageChange as EventListener);
    return () =>
      window.removeEventListener("language-changed", handleLanguageChange as EventListener);
  }, []);

  const t = contactContent[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message") setMessageCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with real API call
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("Form submitted:", formData);

      setIsSubmitting(false);
      setFormData({ firstName: "", email: "", phone: "", message: "" });
      setMessageCount(0);
      alert(t.success);
    }, 1200);
  };

  return (
    <main className="bg-white mt-10">
      {/* HERO (clean, like HomePage) */}
      <section className="border-b border-gray-200 bg-white">
        <div
          className={`mx-auto max-w-7xl px-6 py-14 md:py-20 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-gray-700">
                <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
                {t.badge}
              </div>

              <h1 className="mt-6 text-[clamp(2.2rem,4.2vw,4.1rem)] font-bold tracking-tight text-gray-900 leading-[1.05]">
                <span className="block">{t.titleLine1}</span>
                <span className="block text-blue-700">{t.titleLine2}</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
                {t.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition"
                >
                  {t.cta}
                  <svg
                    className="ml-3 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </Link>

                <a
                  href="tel:+359890998827"
                  className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t.phone}
                </a>
              </div>
            </div>

            {/* RIGHT: quick info card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-900">
                    {language === "bg" ? "Данни" : "Details"}
                  </p>
                  <span className="text-xs text-gray-500">
                    {language === "bg" ? "VARMET" : "VARMET"}
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <a
                    href="mailto:office@varmet.bg"
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 transition"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.emailTitle}</p>
                      <p className="mt-1 text-sm text-gray-600">{t.email}</p>
                    </div>
                  </a>

                  <a
                    href="tel:+359890998827"
                    className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 transition"
                  >
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.phoneTitle}</p>
                      <p className="mt-1 text-sm text-gray-600">{t.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.workingHoursTitle}</p>
                      <p className="mt-1 text-sm text-gray-600">{t.workingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.addressTitle}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {t.addressLine1}
                        <br />
                        {t.addressLine2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* FORM + INFO (simple, clean) */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="flex items-center mb-6">
                <div className="w-10 h-1 bg-blue-600 mr-4" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  {t.formBadge}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      {t.firstNameLabel} <span className="text-red-500">{t.requiredField}</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={t.firstNamePlaceholder}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900">
                      {t.emailLabel} <span className="text-red-500">{t.requiredField}</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-100 transition"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-gray-900">{t.phoneLabel}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.phonePlaceholder}
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-100 transition"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-gray-900">{t.messageLabel}</label>
                    <span className="text-xs text-gray-500">{messageCount} / 180</span>
                  </div>
                  <textarea
                    name="message"
                    rows={6}
                    maxLength={180}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-100 transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t.sending}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.sendMessage}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* INFO (secondary column) */}
            <div className="lg:col-span-5">
              <div className="flex items-center mb-6">
                <div className="w-10 h-1 bg-blue-600 mr-4" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  {t.infoBadge}
                </span>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {language === "bg"
                    ? "Можете да ни пишете по имейл, да се обадите или да изпратите съобщение чрез формата."
                    : "You can email us, call us, or send a message through the form."}
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:office@varmet.bg"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 transition"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Mail className="h-4 w-4 text-gray-500" />
                      {t.email}
                    </span>
                    <span className="text-xs text-gray-500">{t.emailTitle}</span>
                  </a>

                  <a
                    href="tel:+359890998827"
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 transition"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Phone className="h-4 w-4 text-gray-500" />
                      {t.phone}
                    </span>
                    <span className="text-xs text-gray-500">{t.phoneTitle}</span>
                  </a>

                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <Clock className="h-4 w-4 text-gray-500" />
                        {t.workingHours}
                      </span>
                      <span className="text-xs text-gray-500">{t.workingHoursTitle}</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex items-start gap-2 text-sm font-semibold text-gray-900">
                        <MapPin className="mt-0.5 h-4 w-4 text-gray-500" />
                        <span>
                          {t.addressLine1}
                          <br />
                          {t.addressLine2}
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">{t.addressTitle}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-px bg-gray-200" />

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/products"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition"
                  >
                    {language === "bg" ? "Продукти" : "Products"}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/gallery"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
                  >
                    {language === "bg" ? "Галерия" : "Gallery"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}