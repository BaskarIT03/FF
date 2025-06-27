
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "Materials", href: "#materials", icon: "🧵" },
    { name: "Pattern Mixer", href: "#mixer", icon: "🎨" },
    { name: "Measurements", href: "#measurements", icon: "📏" },
    { name: "Gallery", href: "#gallery", icon: "🖼️" },
    { name: "Contact", href: "#contact", icon: "📞" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-playfair font-bold text-gradient flex items-center gap-2">
              <span className="text-3xl">✂️</span>
              FabricFusion
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-whisper-white hover:text-aqua-mint px-3 py-2 text-sm font-medium transition-all duration-200 relative group flex items-center gap-2 hover:bg-aqua-mint/10 rounded-lg border border-transparent hover:border-gold-bronze/30"
                >
                  <span className="text-gold-bronze">{item.icon}</span>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-radiant-orchid to-aqua-mint transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-whisper-white hover:text-aqua-mint p-2 rounded-lg hover:bg-aqua-mint/10 transition-all duration-200 border border-transparent hover:border-gold-bronze/30"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-deep-sea-teal/90 backdrop-blur-md rounded-lg mt-2 border border-radiant-orchid/20">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-whisper-white hover:text-aqua-mint block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 flex items-center gap-3 hover:bg-aqua-mint/10 rounded-lg border border-transparent hover:border-gold-bronze/30"
                >
                  <span className="text-gold-bronze">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
