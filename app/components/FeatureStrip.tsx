import Link from "next/link";
import { Layers3, Wrench, PhoneCall } from "lucide-react";

export function FeatureStrip() {
  return (
    <div className="mx-auto max-w-7xl">
      <div
        className="
          grid overflow-hidden rounded-3xl border border-white/10 bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.30)]
          md:grid-cols-12
        "
      >
        {/* Left */}
        <div className="md:col-span-4">
          <div className="group h-full p-7 transition-all duration-300 hover:bg-neutral-50 md:p-8">
            <div className="flex items-start gap-5">
              <div
                className="
                  grid h-12 w-12 place-items-center rounded-full
                  bg-neutral-950 text-white
                  shadow-[0_12px_25px_rgba(0,0,0,0.18)]
                  transition-transform duration-300 group-hover:-translate-y-0.5
                "
              >
                <Layers3 className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                  Solution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  At VARMET, we provide a wide array of industrial and
                  environmental solutions tailored to meet the unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="md:col-span-4 md:border-l md:border-black/10">
          <div className="group h-full p-7 transition-all duration-300 hover:bg-neutral-50 md:p-8">
            <div className="flex items-start gap-5">
              <div
                className="
                  grid h-12 w-12 place-items-center rounded-full
                  bg-neutral-950 text-white
                  shadow-[0_12px_25px_rgba(0,0,0,0.18)]
                  transition-transform duration-300 group-hover:-translate-y-0.5
                "
              >
                <Wrench className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                  Production
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Innovative and sustainable manufacturing solutions tailored to
                  optimize efficiency and quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right CTA */}
        <div className="relative md:col-span-4 md:border-l md:border-black/10">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(600px_circle_at_20%_30%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="relative h-full p-7 md:p-8">
            <div className="flex items-start gap-5 text-white">
              <div
                className="
                  grid h-12 w-12 place-items-center rounded-full
                  border border-white/20 bg-white/5
                  shadow-[0_14px_35px_rgba(0,0,0,0.35)]
                "
              >
                <PhoneCall className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <p className="text-lg font-semibold tracking-tight">
                  Free Consultation
                </p>

                <a
                  href="tel:+359890998827"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                >
                  +359 890 99 88 27
                  <span className="text-white/50">•</span>
                  <span className="underline underline-offset-4 decoration-white/30 hover:decoration-white/70">
                    Call now
                  </span>
                </a>

                <div className="mt-5">
                  <Link
                    href="/contact"
                    className="
                      inline-flex items-center justify-center
                      rounded-2xl bg-white px-6 py-3
                      text-sm font-semibold text-neutral-950
                      transition-all duration-300
                      hover:-translate-y-0.5 hover:bg-white/95
                      hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                      focus:outline-none focus:ring-2 focus:ring-white/40
                    "
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
