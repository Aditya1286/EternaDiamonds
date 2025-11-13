import React, { useState, useEffect } from 'react';
import { Search, Heart, User, ShoppingBag, ChevronLeft, ChevronRight, Menu, X, Facebook, Twitter, Instagram, Mail, Hammer, Leaf, Eye } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const heroSlides = [
    {
      title: "Crafted Perfection",
      subtitle: "BRIDAL COLLECTION",
      description: "Where love meets luxury",
      cta: "Explore Collection",
      image: "bg-[url('/im1.png')]", // Placeholder; replace with actual bridal image URL later
      accent: "from-rose-600 to-pink-600"
    },
    {
      title: "Timeless Elegance",
      subtitle: "DIAMOND COLLECTION 2024",
      description: "Discover the brilliance of forever",
      cta: "Shop Now",
      image: "bg-[url('/im2.png')]", // Placeholder
      accent: "from-amber-600 to-amber-700"
    },
    {
      title: "Eternal Sparkle",
      subtitle: "SOLITAIRE DIAMONDS",
      description: "Pure. Precious. Priceless.",
      cta: "Book Appointment",
      image: "bg-[url('/im3.png')]", // Placeholder
      accent: "from-blue-600 to-indigo-600"
    }
  ];

  useEffect(() => {
    // Load Meddon font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Meddon&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const handleComingSoon = () => setShowComingSoon(true);

  const navItems = [
    "All Jewellery", "Gold", "Diamond", "Earrings", "Rings", "Daily Wear", "Collections", "Wedding", "Gifting", "More"
  ];

  const categories = [
    { name: "Earrings", image: "bg-[url('/ear.png')]", link: "/shop/earrings" },
    { name: "Finger Rings", image: "bg-[url('/finger.png')]", link: "/shop/rings" },
    { name: "Pendants", image: "bg-[url('/pen.png')]", link: "/shop/pendants" },
    { name: "Mangalsutra", image: "bg-[url('/man.png')]", link: "/shop/mangalsutra" },
    { name: "Bangles", image: "bg-[url('/ban.png')]", link: "/shop/bangles" },
    { name: "Chains", image: "bg-[url('/chain.png')]", link: "/shop/chains" }
  ];

  const trending = [
    { title: "Auspicious Occasion", subtitle: "A companion for every occasion", image: "bg-[url('/d1.png')]" },
    { title: "Gifting Jewellery", subtitle: "Jewellery everyone's eyeing right now", image: "bg-[url('/d2.png')]" },
    { title: "Drops of Radiance", subtitle: "A companion for every occasion", image: "bg-[url('/d3.png')]" }
  ];

  const taniWorld = [
    { title: "Wedding", image: "bg-[url('/e1.png')]", desc: "Bridal collections" },
    { title: "Diamond", image: "bg-[url('/e2.png')]", desc: "Solitaire diamonds" }
  ];

  const etnaFontStyle = { fontFamily: "'Meddon', cursive" };
  const premiumBlue = '#2C4C9C';

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 sm:px-6 flex items-center justify-between text-sm font-medium">
          <div className="flex-1  text-center sm:text-left">
            <p>New Collection Launch | Free Shipping on Orders Above ₹50,000 | Use Code: <span style={{ color: premiumBlue }}>ETERNA2024</span></p>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className={`bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-100 border border-amber-200 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src="/nav.png" // Empty as requested
                  alt="Eterna Diamonds Logo" 
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-wide text-[#2C4C9C]" style={etnaFontStyle}>Eterna</h1>
                <p className="text-xs text-gray-600 font-light tracking-wider">DIAMONDS</p>
              </div>
            </div>

            {/* Right: Search, Nav, Icons, Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <div className="hidden md:block relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for Diamond Jewellery and more..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
                {navItems.map((item, idx) => (
                  <button key={idx} onClick={handleComingSoon} className={`hover:text-amber-800 transition cursor-pointer ${item === 'Gifting' ? 'text-amber-600 font-semibold' : ''}`}>
                    {item}
                  </button>
                ))}
              </div>

              {/* Icons */}
              <div className="flex items-center gap-2 text-gray-700">
                <button className="hidden sm:block" onClick={handleComingSoon}><Heart className="w-5 h-5 cursor-pointer hover:text-amber-800 transition" /></button>
                <button onClick={handleComingSoon}><User className="w-5 h-5 cursor-pointer hover:text-amber-800 transition" /></button>
                <div className="relative">
                  <button onClick={handleComingSoon}><ShoppingBag className="w-5 h-5 cursor-pointer hover:text-amber-800 transition" /></button>
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 text-sm font-medium text-gray-700">
                {navItems.map((item, idx) => (
                  <button key={idx} onClick={() => { handleComingSoon(); setMobileMenuOpen(false); }} className="hover:text-amber-800 transition w-full text-left">{item}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'} ${slide.image} bg-cover bg-center bg-no-repeat`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
            <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4 border border-white/30`}>
                  {slide.subtitle}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={etnaFontStyle}>
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto">{slide.description}</p>
                <button onClick={handleComingSoon} className="bg-white hover:bg-gray-100 text-amber-800 px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition shadow-lg hover:shadow-xl">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-colors">
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-8' : 'bg-white/50 w-2'}`}
            />
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-[#2C4C9C]" style={etnaFontStyle}>Eterna</span> Collections
            </h2>
            <p className="text-lg text-gray-600">Explore our newly launched collection</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative h-64 lg:h-96 bg-gradient-to-br from-amber-50 to-rose-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('/c1.png')]" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Floral Bloom</h3>
                <p className="text-sm mb-3">Inspired by nature's elegance</p>
                <button onClick={handleComingSoon} className="bg-white text-amber-800 px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">Shop Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="relative h-48 lg:h-48 bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/c2.png')]" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex items-end">
                  <div>
                    <h3 className="font-bold text-white mb-1">Festive Edit</h3>
                    <p className="text-white/90 text-sm">Celebrate in style</p>
                  </div>
                </div>
              </div>
              <div className="relative h-48 lg:h-48 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[url('/c3.png')]" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-4 flex items-end">
                  <div>
                    <h3 className="font-bold text-white mb-1">Stunning Ears</h3>
                    <p className="text-white/90 text-sm">Every ear deserves sparkle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Categories */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Find Your Perfect Match</h2>
            <p className="text-lg text-gray-600">Shop by Categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {categories.map((cat, idx) => (
              <button key={idx} onClick={handleComingSoon} className="group relative overflow-hidden rounded-lg aspect-square bg-gray-100 w-full">
                <div className={`h-full w-full ${cat.image} bg-cover bg-center transition-transform group-hover:scale-110 duration-300`} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <h3 className="text-white text-sm font-semibold">{cat.name}</h3>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={handleComingSoon} className="text-amber-600 hover:text-amber-800 font-semibold">View All Categories</button>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Trending Now</h2>
            <p className="text-lg text-gray-600">Jewellery pieces everyone's eyeing right now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {trending.map((item, idx) => (
              <div key={idx} className="relative h-64 lg:h-80 rounded-lg overflow-hidden group">
                <div className={`h-full w-full ${item.image} bg-cover bg-center`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/90 mb-4">{item.subtitle}</p>
                  <button onClick={handleComingSoon} className="w-full bg-white text-amber-800 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Shop Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eterna World */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-[#2C4C9C]" style={etnaFontStyle}>Eterna</span> World
            </h2>
            <p className="text-lg text-gray-600">A companion for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {taniWorld.map((item, idx) => (
              <div key={idx} className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                <div className={`h-full w-full ${item.image} bg-cover bg-center`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 mb-4">{item.desc}</p>
                    <button onClick={handleComingSoon} className="bg-white text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              <span className="text-[#2C4C9C]" style={etnaFontStyle}>Eterna</span> Assurance
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">Crafted by experts, cherished by you. Our commitment to excellence in every detail.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Hammer className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">Unmatched Craftsmanship</h3>
              <p className="text-gray-600 text-center text-base lg:text-lg leading-relaxed">Handcrafted by master artisans using time-honored techniques for enduring beauty and precision.</p>
            </div>
            <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Leaf className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">Ethically Sourced</h3>
              <p className="text-gray-600 text-center text-base lg:text-lg leading-relaxed">Sourced responsibly from conflict-free mines, ensuring sustainability and integrity in every gem.</p>
            </div>
            <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center">
                <Eye className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">100% Transparency</h3>
              <p className="text-gray-600 text-center text-base lg:text-lg leading-relaxed">Full disclosure on origins, certifications, and processes—because trust is the foundation of our legacy.</p>
            </div>
          </div>
          <div className="text-center mt-16">
            <p className="text-lg lg:text-xl text-gray-500">Lifetime Exchange Program | Trusted by 2.8M+ families worldwide</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 lg:py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 lg:mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2C4C9C]" style={etnaFontStyle}>Eterna</h3>
              <p className="text-gray-300">Timeless elegance in every piece. Discover the brilliance of forever with <span className="text-[#2C4C9C]">Eterna</span> Diamonds.</p>
              <div className="flex gap-4 pt-2">
                <button onClick={handleComingSoon} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Facebook className="w-5 h-5" /></button>
                <button onClick={handleComingSoon} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Twitter className="w-5 h-5" /></button>
                <button onClick={handleComingSoon} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Instagram className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Categories</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Gold Jewellery</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Diamond Rings</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Earrings</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Wedding Collections</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Customer Care</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Track Order</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Returns & Exchanges</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Size Guide</button></li>
                <li><button onClick={handleComingSoon} className="hover:text-white transition-colors">Contact Us</button></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <p className="text-gray-300">Subscribe for updates and offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button onClick={handleComingSoon} className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded-r-full font-semibold transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-300 text-sm">
            <p>&copy; 2025 <span className="text-[#2C4C9C]">Eterna</span> Diamonds. All rights reserved. | <button onClick={handleComingSoon} className="text-amber-400 hover:text-amber-300 underline transition-colors">Privacy Policy</button> | <button onClick={handleComingSoon} className="text-amber-400 hover:text-amber-300 underline transition-colors">Terms of Service</button></p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full transform transition-all scale-100">
            <h2 className="text-2xl font-bold mb-4" style={etnaFontStyle}>Coming Soon!</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">This feature is under development. Please stay tuned for our upcoming launch.</p>
            <button 
              onClick={() => setShowComingSoon(false)} 
              className="bg-blue-600 hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}