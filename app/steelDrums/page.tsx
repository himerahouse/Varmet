"use client";

import { useState, useEffect } from "react";
import { Shield, Factory, Package, Globe, Paintbrush, CheckCircle, Award, Users, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// You'll need to add these images to your assets folder
import steelDrumsHero from "../assets/Images/steel-drums-hero.jpg";
import factoryProduction from "../assets/Images/factory-production.jpg";
import drumsStacked from "../assets/Images/drums-stacked.jpg";

export default function SteelDrumsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Features data - using EXACT text from provided content
  const features = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "UN Certified",
      description: "Comply with stringent UN recommendations for packing dangerous and non-dangerous goods in packaging groups I, II and III.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      icon: <Factory className="w-7 h-7" />,
      title: "Spiraltainer® Technology",
      description: "Combines superior vacuum resistance with efficient loading in standard 20 and 40 ft freight containers.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Package className="w-7 h-7" />,
      title: "Spiralon Triple Seam",
      description: "Electrically welded vertical seam. Bottom and top seamed by Varmet Spiralon triple seam for safe performance.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      icon: <Paintbrush className="w-7 h-7" />,
      title: "Internal Coating",
      description: "Internally coated with epoxy or epoxy-phenolic water based lining. Technical assistance available.",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-50 to-amber-50",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Standard Gauge Range",
      description: "Range of standard gauge combinations covering required UN performance level for practically all filling goods.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50",
    },
    {
      icon: <CheckCircle className="w-7 h-7" />,
      title: "Independent Certification",
      description: "Certified by independent test institutes to comply with UN recommendations and transport regulations.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "RAL Colour System",
      description: "Standardized on international RAL colour system for external colours to ensure consistent quality worldwide.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "from-cyan-50 to-teal-50",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Custom Branding",
      description: "Can be painted in customer corporate colours. Logos and texts applied by means of screen-painting.",
      color: "from-gray-600 to-gray-700",
      bgColor: "from-gray-50 to-gray-100",
    },
  ];

  // Technical specifications - EXACT data from table
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

  // Material specifications - EXACT text from content
  const materialSpecs = [
    {
      category: "Steel",
      description: "Commercial grade steel sheet. Specification according to EN 101130 / EN 10131 or equivalent standards.",
      icon: "⚙️"
    },
    {
      category: "Closures",
      description: "Two Tri-Sure® 4S® closures, G2 and G ¾ are manufactured to meet ISO 15750 international standards. These closures may be sealed by Tab-Seal® caps, neutral or to customer design. Closures are fitted with Varmet's standard high performance air washers.",
      icon: "🔒"
    },
    {
      category: "Construction",
      description: "Body: electrically welded longitudinal seam. Spiraltainer body configuration. Below 1.0 mm with 2x3 corrugations to provide optimal vacuum resistance.",
      icon: "🏗️"
    },
    {
      category: "Assembly",
      description: "The Varmet Spiralon triple seam guarantees a safe performance.",
      icon: "⚡"
    },
    {
      category: "Standards",
      description: "EN210",
      icon: "📜"
    },
    {
      category: "Internal lining",
      description: "If plain drums are not suitable for your application, Varmet can apply epoxy or epoxy-phenolic water based lining.",
      icon: "🎨"
    },
    {
      category: "Exterior paints & decorations",
      description: "Colours according to the Varmet RAL standard range (or to special customer specifications). Options: Multi-colour drum and one-colour silk screen decorations.",
      icon: "✨"
    },
  ];

  // Trademarks - EXACT text from content
  const trademarks = ["RDL", "Spiralon", "Tri-Sure", "4S", "Tab-Seal"];

  return (
    <main className="bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-[90vh] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/3 to-cyan-400/2 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-lg mb-10 group hover:border-white/30 transition-all duration-300">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-glow-blue" />
              <span className="text-sm font-bold tracking-[0.3em] text-white/95 uppercase">
                VARMET MANUFACTURING
              </span>
            </div>
            
            {/* Enhanced Title */}
            <div className="mb-10">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent leading-[0.9]">
                  Steel Drums
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-300/90 mb-8">
                Large Tight Head Steel Drums (216,5 liter)
              </h2>
            </div>
            
            {/* Enhanced Subtitle */}
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed max-w-4xl font-light mb-12 tracking-wide">
              The packaging solution for the petrochemical, chemical, pharmaceutical and food industries.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-2xl 
                  bg-gradient-to-r from-white to-gray-100 px-10 py-5
                  text-lg font-bold text-black transition-all duration-500
                  hover:from-blue-50 hover:to-cyan-50 hover:scale-[1.02] hover:shadow-2xl
                  shadow-lg hover:shadow-blue-500/25 min-w-[240px]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Request Quote
                  <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                +359 890 998837
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Description with Image */}
      <section className="py-24 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <Factory className="w-32 h-32 mx-auto mb-8 text-blue-400 opacity-80" />
                      <p className="text-3xl font-bold mb-3">Our Manufacturing Facility</p>
                      <p className="text-gray-300 text-lg">Spiraltainer® technology production line</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-10 group">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mr-5 group-hover:w-20 transition-all duration-300" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">
                  INDUSTRIAL PACKAGING
                </span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8">
                  Drums are the backbone of Varmet's Industrial Packaging & Services activity. The wide range of steel drums complies with the highest packaging requirements imposed by the petrochemical, chemical, pharmaceutical and food industries.
                </p>
                <p className="text-xl leading-relaxed text-gray-700">
                  The packaging is produced with the latest production technology and tested in accordance with UN regulations to guarantee optimum protection for a broad range of dangerous and non-dangerous goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">KEY FEATURES</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                Advanced Technology
                <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text mt-4">
                  Superior Performance Drums
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
                  style={{ 
                    transitionDelay: `${400 + index * 100}ms`,
                    background: `linear-gradient(135deg, white, #f9fafb)`
                  }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500`} />
                  
                  {/* Icon container */}
                  <div className={`relative mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.bgColor} 
                    border border-gray-200 group-hover:border-transparent transition-all duration-300`}>
                    <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm relative">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trademarks */}
            <div className="mt-24 pt-12 border-t border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-500 font-medium">
                  Registered trademarks:{" "}
                  <span className="text-gray-700 font-bold">
                    {trademarks.join(" • ")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Specifications */}
      <section className="py-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">TECHNICAL DATA</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                Specifications
                <span className="block text-3xl md:text-4xl text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text mt-4">
                  216,5 Liter Steel Drums
                </span>
              </h2>
            </div>

            {/* Enhanced Table */}
            <div className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Table Header Gradient */}
              <div className="bg-gradient-to-r from-gray-900 to-blue-900 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Specifications Table</h3>
                    <p className="text-gray-300 text-sm mt-1">Large Tight Head Steel Drums (216,5 liter)</p>
                  </div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-white text-sm font-medium">UN Certified</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50/30">
                    <tr>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Nominal volume [dm³]
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Thickness [mm] top
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Thickness [mm] body
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Thickness [mm] bottom
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Type
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        Weight [kg] ± 3%
                      </th>
                      <th className="px-8 py-6 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                        UN markings
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

              {/* Table Footer */}
              <div className="bg-gradient-to-r from-gray-50/50 to-blue-50/30 px-8 py-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    <span>6 standard configurations available</span>
                  </div>
                  <button className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Download Full Spec Sheet
                    <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Material Specifications */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-5 mb-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />
                <span className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase">CONSTRUCTION DETAILS</span>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10">
                Material Specifications
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
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    {spec.category}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
     
    </main>
  );
}