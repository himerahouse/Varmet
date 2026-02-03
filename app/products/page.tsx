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

const products = [
  {
    id: 1,
    title: "Metal Barrels",
    description: "Durable and reliable storage solutions for oils, fuels, and other industrial liquids.",
    image: metalBarrelsImg,
    features: ["Corrosion-resistant", "Various sizes available", "Reusable design", "Industrial grade"],
    category: "Storage Solutions"
  },
  {
    id: 2,
    title: "Agricultural & Technical Urea",
    description: "High-grade urea for use in AdBlue production and other applications.",
    image: ureaImg,
    features: ["High purity grade", "AdBlue production", "Agricultural use", "Technical applications"],
    category: "Industrial Chemicals"
  },
  {
    id: 3,
    title: "Alternative Fuels Supply",
    description: "Cost-effective and eco-friendly fuel options for thermal power and cement plants.",
    image: fuelsImg,
    features: ["Cost-effective", "Eco-friendly", "Industrial grade", "Reliable supply"],
    category: "Energy Solutions"
  },
  {
    id: 4,
    title: "Waste & Plastics Trade",
    description: "Sustainable solutions for waste management and recycling, driving a circular economy.",
    image: wasteImg,
    features: ["Sustainable recycling", "Waste management", "Circular economy", "Environmental compliance"],
    category: "Environmental Solutions"
  },
  {
    id: 5,
    title: "Wooden Pallets",
    description: "Sturdy and customizable pallets for safe and efficient transportation and storage.",
    image: palletsImg,
    features: ["Customizable sizes", "Durable construction", "Export standard", "Sustainable materials"],
    category: "Logistics"
  }
];

export default function ProductsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
              <span className="text-sm font-semibold tracking-wider text-gray-700">OUR OFFERINGS</span>
            </div>
            
            {/* Enhanced title with gradient */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            {/* Enhanced subtitle */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                & Services
              </span>
            </h2>
            
            {/* Enhanced paragraph */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
              We cater to a diverse range of industries, delivering customized solutions that drive performance and sustainability.
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
                <span>Get Custom Solutions</span>
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
                OUR PRODUCTS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Comprehensive
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                Industrial Solutions
              </span>
            </h2>
          </div>

          {/* Products Grid - Enhanced with About page card styling */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
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
                      alt={product.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Enhanced Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800 
                        border border-gray-200/50">
                        {product.category}
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
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    {/* Enhanced Features Section */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section - Enhanced */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-cyan-100/10 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Enhanced */}
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center mb-8 group">
                <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-4 group-hover:w-16 transition-all duration-300" />
                <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">
                  OUR COMMITMENT
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Driving
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
                  Environmental Excellence
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light">
                At VARMET, we prioritize sustainable practices in everything we do. From designing 
                eco-friendly products to implementing resource-efficient solutions, we are committed 
                to reducing the environmental impact of our operations and those of our clients.
              </p>
              
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-gray-900 to-blue-900 px-10 py-5
                  text-base font-semibold text-white transition-all duration-300
                  hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg"
              >
                Start Sustainable Partnership
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Right Stats - Enhanced with About page card styling */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "Sustainable", label: "Materials", desc: "Where possible", color: "from-blue-500 to-cyan-500", bg: "bg-gradient-to-br from-blue-50 to-cyan-50" },
                { value: "Eco", label: "Friendly", desc: "Solutions focus", color: "from-emerald-500 to-teal-500", bg: "bg-gradient-to-br from-emerald-50 to-teal-50" },
                { value: "Circular", label: "Economy", desc: "Waste management", color: "from-violet-500 to-purple-500", bg: "bg-gradient-to-br from-violet-50 to-purple-50" },
                { value: "Green", label: "Supply Chain", desc: "Ethical sourcing", color: "from-amber-500 to-orange-500", bg: "bg-gradient-to-br from-amber-50 to-orange-50" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group relative ${stat.bg} rounded-2xl p-8 border border-gray-100 
                    hover:border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                    ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    style={{ background: stat.color.includes('blue') ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' : 
                              stat.color.includes('emerald') ? 'linear-gradient(135deg, #10b981, #0d9488)' : 
                              stat.color.includes('violet') ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' : 
                              'linear-gradient(135deg, #f59e0b, #f97316)' }} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500">{stat.desc}</div>
                  <div className="mt-4 h-1 w-8 bg-gradient-to-r rounded-full group-hover:w-12 transition-all duration-300"
                    style={{ background: stat.color.includes('blue') ? 'linear-gradient(to right, #3b82f6, #06b6d4)' : 
                              stat.color.includes('emerald') ? 'linear-gradient(to right, #10b981, #0d9488)' : 
                              stat.color.includes('violet') ? 'linear-gradient(to right, #8b5cf6, #7c3aed)' : 
                              'linear-gradient(to right, #f59e0b, #f97316)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Community Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className={`relative mx-auto max-w-6xl px-6 text-center transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
            <span className="text-sm font-semibold tracking-[0.3em] text-blue-200 uppercase">JOIN OUR NETWORK</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Trusted By
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
            At VARMET, we are committed to quality, sustainability, and innovation, ensuring we provide 
            solutions that support your business while protecting the environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-white to-gray-100 
                text-base font-semibold text-gray-900 transition-all duration-300
                hover:from-blue-100 hover:to-cyan-100 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg inline-flex items-center justify-center"
            >
              Become a Partner
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="/about"
              className="group relative px-10 py-5 rounded-2xl border-2 border-white/30 
                text-base font-semibold text-white transition-all duration-300
                hover:border-blue-400 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl
                inline-flex items-center justify-center backdrop-blur-sm"
            >
              Learn About Us
              <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative divider */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        <div className={`mx-auto max-w-5xl px-6 text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
            <span className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">NEED ASSISTANCE?</span>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Custom Solutions
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">
              For Your Business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            Contact our expert team to discuss tailored requirements and specialized solutions designed for your industry needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-gray-900 to-blue-900 
                text-base font-semibold text-white transition-all duration-300
                hover:from-blue-700 hover:to-cyan-700 hover:scale-[1.02] hover:shadow-2xl
                shadow-lg inline-flex items-center justify-center"
            >
              Contact Sales Team
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