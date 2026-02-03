import Image from "next/image";
import Link from "next/link";
import aboutImage from "../assets/Images/about.jpg";

export default function Page() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-gray-600 tracking-wide">WHO WE ARE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="block">VARMET</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Your trusted partner for industrial and environmental solutions. We specialize in 
              delivering high-quality products and services that meet the needs of businesses 
              across various sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold 
                  transition-all duration-300 hover:bg-blue-600 hover:shadow-lg
                  hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Contact us
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="relative py-20 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-0.5 bg-blue-600 mr-3" />
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  OUR MISSION
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Committed to Excellence in Every Project
              </h2>
              
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Welcome to VARMET, your trusted partner for industrial and environmental solutions. 
                  We deliver high-quality products and services that meet the needs of businesses 
                  across various sectors.
                </p>
                
                <p>
                  Our team is dedicated to practical engineering, reliable delivery, and long-term 
                  partnerships that drive measurable progress.
                </p>
              </div>

              {/* Capabilities Section */}
              <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Our Approach</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Solutions", value: "Industrial", color: "border-blue-500" },
                    { title: "Focus", value: "Sustainability", color: "border-green-500" },
                    { title: "Quality", value: "High Standards", color: "border-gray-400" },
                    { title: "Support", value: "Consulting", color: "border-purple-500" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`bg-white border-l-4 ${item.color} pl-4 py-3 rounded-r-lg hover:bg-gray-50 transition-colors`}
                    >
                      <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        {item.title}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4
                    text-sm font-semibold text-white transition-all duration-300
                    hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start Your Project With Us
                  <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={aboutImage}
                    alt="VARMET Industrial Solutions"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white">
                    <p className="text-sm font-medium opacity-90">Trusted Industrial Partner</p>
                    <p className="text-lg font-bold mt-1">Quality Solutions Since Inception</p>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-gray-900">Expert</div>
                  <div className="text-sm text-gray-600 mt-1">Team</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl font-bold text-gray-900">Reliable</div>
                  <div className="text-sm text-gray-600 mt-1">Service</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Choose VARMET</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Tailored solutions for your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Commitment to quality and sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Dedicated customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner With Us Today
          </h2>
          
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's work together to find the right solutions for your industrial and environmental needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold 
                transition-all duration-300 hover:bg-blue-600 hover:shadow-lg
                hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              Contact Our Team
              <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/products"
              className="px-8 py-4 bg-white text-gray-900 border border-gray-300 rounded-xl font-semibold 
                transition-all duration-300 hover:border-blue-600 hover:bg-blue-50
                hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              View Products
              <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}