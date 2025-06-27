import { useState } from "react";
import { Button } from "@/components/ui/button";

const MaterialGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const materials = [
    {
      name: "Silk",
      category: "Luxury",
      useCase: "Party Wear",
      description: "Lustrous and smooth with natural sheen",
      color: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800",
      icon: "✨"
    },
    {
      name: "Cotton",
      category: "Natural",
      useCase: "Daily Use",
      description: "Breathable and comfortable for everyday wear",
      color: "from-blue-100 to-blue-200",
      textColor: "text-blue-800",
      icon: "🌿"
    },
    {
      name: "Linen",
      category: "Natural",
      useCase: "Summer Wear",
      description: "Light and airy with natural texture",
      color: "from-green-100 to-green-200",
      textColor: "text-green-800",
      icon: "🍃"
    },
    {
      name: "Velvet",
      category: "Luxury",
      useCase: "Party Wear",
      description: "Rich and plush with deep texture",
      color: "from-purple-100 to-purple-200",
      textColor: "text-purple-800",
      icon: "👑"
    },
    {
      name: "Chiffon",
      category: "Sheer",
      useCase: "Party Wear",
      description: "Delicate and flowing with ethereal quality",
      color: "from-pink-100 to-pink-200",
      textColor: "text-pink-800",
      icon: "🌸"
    },
    {
      name: "Denim",
      category: "Casual",
      useCase: "Daily Use",
      description: "Durable and versatile for casual wear",
      color: "from-indigo-100 to-indigo-200",
      textColor: "text-indigo-800",
      icon: "👖"
    },
    {
      name: "Satin",
      category: "Luxury",
      useCase: "Party Wear",
      description: "Glossy finish with elegant drape",
      color: "from-rose-100 to-rose-200",
      textColor: "text-rose-800",
      icon: "💎"
    },
    {
      name: "Georgette",
      category: "Sheer",
      useCase: "Party Wear",
      description: "Slightly textured with graceful flow",
      color: "from-violet-100 to-violet-200",
      textColor: "text-violet-800",
      icon: "🌺"
    },
    {
      name: "Organza",
      category: "Sheer",
      useCase: "Party Wear",
      description: "Crisp and lightweight with subtle shine",
      color: "from-teal-100 to-teal-200",
      textColor: "text-teal-800",
      icon: "🦋"
    },
    {
      name: "Tweed",
      category: "Textured",
      useCase: "Winter Wear",
      description: "Rough texture with classic appeal",
      color: "from-amber-100 to-amber-200",
      textColor: "text-amber-800",
      icon: "🧥"
    },
    {
      name: "Crepe",
      category: "Natural",
      useCase: "Daily Use",
      description: "Wrinkled texture with comfortable feel",
      color: "from-slate-100 to-slate-200",
      textColor: "text-slate-800",
      icon: "🌾"
    },
    {
      name: "Tulle",
      category: "Sheer",
      useCase: "Party Wear",
      description: "Net-like structure with romantic appeal",
      color: "from-cyan-100 to-cyan-200",
      textColor: "text-cyan-800",
      icon: "💃"
    },
    {
      name: "Corduroy",
      category: "Textured",
      useCase: "Daily Use",
      description: "Ribbed texture with vintage charm",
      color: "from-orange-100 to-orange-200",
      textColor: "text-orange-800",
      icon: "🍂"
    },
    {
      name: "Brocade",
      category: "Luxury",
      useCase: "Party Wear",
      description: "Rich patterns woven with metallic threads",
      color: "from-gold-100 to-gold-200",
      textColor: "text-yellow-800",
      icon: "🏺"
    },
    {
      name: "Muslin",
      category: "Natural",
      useCase: "Summer Wear",
      description: "Soft and lightweight cotton weave",
      color: "from-emerald-100 to-emerald-200",
      textColor: "text-emerald-800",
      icon: "☁️"
    }
  ];

  const filters = ["All", "Luxury", "Natural", "Casual", "Sheer", "Textured"];

  const filteredMaterials = activeFilter === "All" 
    ? materials 
    : materials.filter(material => material.category === activeFilter);

  return (
    <section id="materials" className="py-20 bg-soft-pink relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl animate-pulse text-light-pink">🎨</div>
        <div className="absolute top-20 right-20 text-4xl animate-bounce text-gold-bronze">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float text-light-pink">🧵</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-pulse text-pink-coral">🌟</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-raisin mb-4 flex items-center justify-center gap-4">
            <span className="text-5xl text-gold-bronze">🧵</span>
            Premium Material Gallery
            <span className="text-5xl text-light-pink">✨</span>
          </h2>
          <p className="text-xl text-raisin/80 max-w-2xl mx-auto">
            Discover our curated collection of high-quality fabrics, each with unique characteristics and perfect applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-pink-raisin-gradient text-whisper-white shadow-lg hover:shadow-xl border-2 border-transparent"
                  : "border-2 border-light-pink text-raisin hover:bg-light-pink hover:text-raisin hover:border-light-pink backdrop-blur-sm bg-white/50"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMaterials.map((material, index) => (
            <div
              key={material.name}
              className="fabric-card p-6 pattern-overlay animate-scale-in hover:scale-105 bg-paper-cream/80 backdrop-blur-sm border-2 border-light-pink/20 hover:border-light-pink"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-40 rounded-lg bg-gradient-to-br ${material.color} mb-4 flex items-center justify-center relative overflow-hidden border-2 border-light-pink/30`}>
                <div className="absolute top-2 right-2 text-2xl">{material.icon}</div>
                <div className={`text-2xl font-playfair font-bold ${material.textColor}`}>
                  {material.name}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-playfair font-semibold text-raisin flex items-center gap-2">
                  <span className="text-light-pink">{material.icon}</span>
                  {material.name}
                </h3>
                <p className="text-raisin/70">{material.description}</p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm bg-light-pink/20 text-raisin px-3 py-1 rounded-full border border-light-pink/30">
                    {material.category}
                  </span>
                  <span className="text-sm text-raisin/60 bg-gold-bronze/20 px-2 py-1 rounded-full">
                    {material.useCase}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialGallery;
