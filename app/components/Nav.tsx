"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import logo from "../assets/Images/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products & Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Varmet"
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden h-[60px] md:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium tracking-wide transition-colors
                  ${
                    active
                      ? "text-black"
                      : "text-black/70 hover:text-black"
                  }
                `}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full bg-black transition-transform duration-200
                    ${active ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}
                  `}
                />
              </Link>
            );
          })}

          {/* GET STARTED CTA */}
          <Link
            href="/contact"
            className="ml-4 inline-flex items-center rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white
              transition-all duration-200 hover:bg-black/90 hover:-translate-y-[1px] hover:shadow-lg"
          >
            Get Started
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex h-10 w-10 items-center justify-center"
        >
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-black transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-black transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 pb-6 gap-2">
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition
                  ${
                    active
                      ? "bg-black text-white"
                      : "text-black/75 hover:bg-black/5"
                  }
                `}
              >
                {l.label}
              </Link>
            );
          })}

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            className="mt-4 rounded-xl bg-black px-4 py-3 text-center text-sm font-semibold text-white
              transition hover:bg-black/90"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
