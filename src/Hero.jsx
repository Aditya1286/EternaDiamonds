import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Timeless Elegance",
      subtitle: "DIAMOND COLLECTION 2024",
      description: "Discover the brilliance of forever",
      image: "bg-gradient-to-r from-amber-50 via-white to-blue-50",
      accent: "from-amber-600 to-amber-800"
    },
    {
      title: "Crafted Perfection",
      subtitle: "BRIDAL COLLECTION",
      description: "Where love meets luxury",
      image: "bg-gradient-to-r from-rose-50 via-white to-pink-50",
      accent: "from-rose-600 to-pink-600"
    },
    {
      title: "Eternal Sparkle",
      subtitle: "SOLITAIRE DIAMONDS",
      description: "Pure. Precious. Priceless.",
      image: "bg-gradient-to-r from-blue-50 via-white to-cyan-50",
      accent: "from-blue-600 to-cyan-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 px-6 text-center text-sm">
        <p>✨ New Collection Launch | Free Shipping on Orders Above ₹50,000 | Use Code: ETERNA2024</p>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo-placeholder.png" 
                  alt="Eterna Diamonds Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-900 tracking-tight">ETERNA</div>
                <div className="text-xs text-gray-600 -mt-1">DIAMONDS</div>
              </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Diamonds</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Jewelry</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Collections</a>
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition">Gifts</a>
              <a href="#" className="text-red-600 font-semibold">New Arrivals</a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
              <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-900" />
              <Heart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-900" />
              <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-900" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-900" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider - Full Viewport Height */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === idx ? 'opacity-100' : 'opacity-0'
            } ${slide.image} flex items-center justify-center`}
          >
            <div className="w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-20 xl:px-32">
              <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="max-w-2xl text-center lg:text-left">
                  <div className={`inline-block px-4 py-1 bg-gradient-to-r ${slide.accent} text-white text-sm font-semibold rounded-full mb-4`}>
                    {slide.subtitle}
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 lg:mb-10">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold transition transform hover:scale-105 shadow-lg">
                      Explore Collection
                    </button>
                    <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg font-semibold transition">
                      Book Appointment
                    </button>
                  </div>
                </div>

                {/* Large Diamond Illustration - Responsive */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
                    <div className="absolute inset-0 bg-blue-900/5 rounded-full blur-3xl"></div>
                    <div className="absolute inset-8 bg-blue-900/10 rounded-full blur-xl"></div>
                    <div className="absolute inset-16 bg-blue-900/15 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition transform hover:scale-110 z-10"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl transition transform hover:scale-110 z-10"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-blue-900 w-8 sm:w-10' : 'bg-gray-400 w-2 sm:w-3'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 hidden md:block z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-600 text-sm font-medium whitespace-nowrap">Scroll Down</span>
            <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </section>
    </div>
  );
}