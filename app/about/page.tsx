import Image from "next/image";
import Link from "next/link";

// change path to your real file
import aboutImage from "../assets/Images/about.jpg";

export default function Page() {
  return (
    <main className="bg-white">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-600 tracking-wide">INDUSTRIAL SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="block">Engineering</span>
              <span className="block text-blue-600">Excellence</span>
              <span className="block">in Industrial</span>
              <span className="block">Innovation</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              VARMET delivers precision-engineered solutions for industrial and environmental challenges, 
              combining technical expertise with sustainable practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold 
                  transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/25
                  transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Start a Partnership
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/products"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-800 rounded-xl font-semibold 
                  transition-all duration-300 hover:border-blue-600 hover:bg-blue-50 
                  transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Explore Solutions
                <svg className="w-5 h-5 ml-2 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="relative py-24 bg-white">
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* LEFT - Text Content */}
            <div className="lg:col-span-6">
              <div className="sticky top-24">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-px bg-blue-600 mr-4"></div>
                  <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                    About VARMET
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Building Sustainable Industrial Solutions
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    With decades of combined expertise, VARMET stands at the intersection of industrial 
                    innovation and environmental responsibility. We engineer solutions that not only 
                    meet today's operational demands but also anticipate tomorrow's sustainability challenges.
                  </p>
                  
                  <p>
                    Our approach combines rigorous engineering with strategic insight, delivering 
                    measurable results across manufacturing, energy, and environmental sectors.
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="mt-12 grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-600 pl-4 py-3">
                    <div className="text-3xl font-bold text-gray-900">99.8%</div>
                    <div className="text-sm text-gray-600 font-medium mt-1">Client Satisfaction</div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4 py-3">
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600 font-medium mt-1">Technical Support</div>
                  </div>
                </div>

                {/* Core Values */}
                <div className="mt-12">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Our Core Principles</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: "Precision", desc: "Engineering Excellence", color: "text-blue-600" },
                      { title: "Sustainability", desc: "Future-Focused", color: "text-green-600" },
                      { title: "Reliability", desc: "Consistent Delivery", color: "text-gray-900" },
                      { title: "Innovation", desc: "Continuous Improvement", color: "text-purple-600" },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-blue-200 transition-colors"
                      >
                        <div className={`text-sm font-bold ${value.color} mb-1`}>{value.title}</div>
                        <div className="text-xs text-gray-600">{value.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Image & Capabilities */}
            <div className="lg:col-span-6">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={aboutImage}
                    alt="VARMET Industrial Facility"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium opacity-90">Advanced Manufacturing Facility</div>
                      <div className="text-2xl font-bold mt-1">VARMET Operations Center</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <div className="text-xs opacity-90">ISO 9001 Certified</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Capabilities</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Industrial Solutions",
                      items: ["Process Optimization", "Equipment Supply", "Maintenance"],
                      icon: "⚙️"
                    },
                    {
                      title: "Environmental",
                      items: ["Waste Management", "Energy Efficiency", "Compliance"],
                      icon: "🌱"
                    },
                    {
                      title: "Consulting",
                      items: ["Technical Advisory", "Project Management", "Training"],
                      icon: "📈"
                    }
                  ].map((capability, index) => (
                    <div
                      key={index}
                      className="group relative bg-white border border-gray-200 rounded-2xl p-6 
                        hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-2xl mb-4">{capability.icon}</div>
                      <h4 className="font-bold text-gray-900 text-lg mb-3">{capability.title}</h4>
                      <ul className="space-y-2">
                        {capability.items.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="text-sm font-semibold text-blue-700 mb-1">TRUSTED BY INDUSTRY LEADERS</div>
                    <div className="text-2xl font-bold text-gray-900">Global Reach, Local Expertise</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="h-12 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">200+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Connect with our team of experts to discuss how VARMET can optimize your industrial processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-white text-gray-900 rounded-xl font-bold 
                text-lg transition-all duration-300 hover:bg-blue-100 hover:shadow-2xl
                transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              Schedule a Consultation
              <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link
              href="/products"
              className="group px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold 
                text-lg transition-all duration-300 hover:bg-white/10 hover:border-white
                transform hover:-translate-y-1 inline-flex items-center justify-center backdrop-blur-sm"
            >
              View Case Studies
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm mt-8">
            Average response time: <span className="font-semibold">2 business hours</span>
          </p>
        </div>
      </section>

      {/* Add to your global CSS or Tailwind config */}
      <style global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}