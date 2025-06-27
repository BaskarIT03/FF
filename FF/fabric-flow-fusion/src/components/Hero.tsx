
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToMixer = () => {
    const element = document.querySelector("#mixer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMaterials = () => {
    const element = document.querySelector("#materials");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-raisin relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="floating-shapes">
        <div className="floating-shape w-20 h-20 bg-gradient-to-r from-light-pink to-aqua-mint" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="floating-shape w-16 h-16 bg-gradient-to-r from-pink-coral to-light-pink" style={{left: '80%', animationDelay: '5s'}}></div>
        <div className="floating-shape w-12 h-12 bg-gradient-to-r from-gold-bronze to-light-pink" style={{left: '60%', animationDelay: '10s'}}></div>
        <div className="floating-shape w-24 h-24 bg-gradient-to-r from-light-pink to-radiant-orchid" style={{left: '30%', animationDelay: '15s'}}></div>
        <div className="floating-shape w-14 h-14 bg-gradient-to-r from-raisin to-light-pink" style={{left: '70%', animationDelay: '8s'}}></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-light-pink/30 to-aqua-mint/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-coral/30 to-light-pink/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-gold-bronze/30 to-light-pink/30 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-r from-light-pink/20 to-radiant-orchid/20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-60 right-1/3 w-10 h-10 bg-gradient-to-r from-pink-coral/20 to-light-pink/20 rounded-full animate-pulse-slow"></div>

      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="shimmer">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-whisper-white mb-6 animate-fade-in-up">
            Design Your Perfect
            <span className="text-gradient block">Fabric Combo</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-whisper-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Where premium materials meet stunning patterns in perfect harmony. Create, visualize, and bring your fabric dreams to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={scrollToMixer}
            className="bg-pink-raisin-gradient hover:from-light-pink hover:to-dark-raisin text-whisper-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border-2 border-transparent hover:border-light-pink"
          >
            ✨ Start Designing
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.querySelector("#materials")?.scrollIntoView({ behavior: "smooth" })}
            className="border-2 border-whisper-white text-whisper-white hover:bg-light-pink hover:text-raisin hover:border-light-pink px-8 py-4 text-lg rounded-full transition-all duration-300 backdrop-blur-sm bg-white/10"
          >
            🧵 Explore Materials
          </Button>
        </div>

        {/* Enhanced Interactive Stats Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {/* Premium Materials Card */}
          <button 
            onClick={scrollToMaterials}
            className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-light-pink/15 to-gold-bronze/10 backdrop-blur-sm border-2 border-light-pink/30 hover:border-gold-bronze hover:from-light-pink/25 hover:to-gold-bronze/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:rotate-1 cursor-pointer overflow-hidden"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-bronze/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 group-hover:animate-bounce transition-all duration-300 group-hover:scale-125">🎨</div>
              <div className="text-5xl font-bold text-gradient mb-3 group-hover:text-gold-bronze transition-all duration-300">50+</div>
              <div className="text-whisper-white/90 font-medium group-hover:text-whisper-white transition-all duration-300">Premium Materials</div>
              
              {/* Floating particles effect */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-gold-bronze rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-light-pink rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{animationDelay: '0.2s'}}></div>
            </div>
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gold-bronze/0 via-gold-bronze/50 to-gold-bronze/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          </button>

          {/* Unique Patterns Card */}
          <button 
            onClick={scrollToMixer}
            className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-radiant-orchid/15 to-aqua-mint/10 backdrop-blur-sm border-2 border-radiant-orchid/30 hover:border-aqua-mint hover:from-radiant-orchid/25 hover:to-aqua-mint/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden"
          >
            {/* Spinning background effect */}
            <div className="absolute inset-0 bg-gradient-conic from-radiant-orchid/20 via-transparent to-aqua-mint/20 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-1000"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 group-hover:animate-spin transition-all duration-700 group-hover:scale-125">🌟</div>
              <div className="text-5xl font-bold text-gradient mb-3 group-hover:text-aqua-mint transition-all duration-300">100+</div>
              <div className="text-whisper-white/90 font-medium group-hover:text-whisper-white transition-all duration-300">Unique Patterns</div>
              
              {/* Sparkle effects */}
              <div className="absolute top-4 left-4 text-2xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300">✨</div>
              <div className="absolute bottom-4 right-4 text-xl opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500" style={{animationDelay: '0.3s'}}>⭐</div>
            </div>
            
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-aqua-mint/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 blur-md"></div>
          </button>

          {/* Happy Designers Card */}
          <button 
            onClick={scrollToGallery}
            className="group relative text-center p-8 rounded-2xl bg-gradient-to-br from-pink-coral/15 to-light-pink/10 backdrop-blur-sm border-2 border-pink-coral/30 hover:border-light-pink hover:from-pink-coral/25 hover:to-light-pink/20 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden"
          >
            {/* Heart beat effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-coral/10 to-light-pink/10 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-6xl mb-4 transition-all duration-300 group-hover:scale-125 group-hover:animate-pulse">💖</div>
              <div className="text-5xl font-bold text-gradient mb-3 group-hover:text-pink-coral transition-all duration-300">1000+</div>
              <div className="text-whisper-white/90 font-medium group-hover:text-whisper-white transition-all duration-300">Happy Designers</div>
              
              {/* Heart floating effects */}
              <div className="absolute top-2 left-6 text-sm opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500">💕</div>
              <div className="absolute bottom-3 right-6 text-xs opacity-0 group-hover:opacity-100 group-hover:animate-float transition-all duration-700" style={{animationDelay: '0.4s'}}>❤️</div>
              <div className="absolute top-1/2 left-2 text-xs opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-600" style={{animationDelay: '0.2s'}}>💝</div>
            </div>
            
            {/* Warm glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-coral/20 to-light-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 text-6xl opacity-20 animate-spin text-light-pink" style={{animationDuration: '20s'}}>⚡</div>
        <div className="absolute -bottom-10 -right-10 text-5xl opacity-20 animate-pulse text-light-pink">✨</div>
      </div>
    </section>
  );
};

export default Hero;
