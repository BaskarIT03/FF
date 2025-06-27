
import { useState, useEffect } from "react";
import { Heart, Share, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SavedDesign {
  id: string;
  material: string;
  pattern: string;
  color: string;
  timestamp: string;
  dataURL: string;
  liked?: boolean;
}

const DesignGallery = () => {
  const [savedDesigns, setSavedDesigns] = useState<SavedDesign[]>([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const designs = JSON.parse(localStorage.getItem("fabricFusionDesigns") || "[]");
    setSavedDesigns(designs);
  }, []);

  const updateDesigns = (designs: SavedDesign[]) => {
    setSavedDesigns(designs);
    localStorage.setItem("fabricFusionDesigns", JSON.stringify(designs));
  };

  const toggleLike = (designId: string) => {
    const updatedDesigns = savedDesigns.map(design =>
      design.id === designId
        ? { ...design, liked: !design.liked }
        : design
    );
    updateDesigns(updatedDesigns);
    toast.success("Design updated!");
  };

  const deleteDesign = (designId: string) => {
    const updatedDesigns = savedDesigns.filter(design => design.id !== designId);
    updateDesigns(updatedDesigns);
    toast.success("Design deleted!");
  };

  const shareDesign = async (design: SavedDesign) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `FabricFusion Design - ${design.material} with ${design.pattern}`,
          text: `Check out my custom fabric design created with FabricFusion!`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareText = `Check out my custom fabric design: ${design.material} with ${design.pattern} pattern!`;
      navigator.clipboard.writeText(shareText);
      toast.success("Design info copied to clipboard!");
    }
  };

  const filteredDesigns = filter === "all" 
    ? savedDesigns 
    : filter === "liked" 
    ? savedDesigns.filter(design => design.liked)
    : savedDesigns.filter(design => design.material === filter);

  const materials = [...new Set(savedDesigns.map(design => design.material))];

  if (savedDesigns.length === 0) {
    return (
      <section id="gallery" className="py-20 bg-lavender/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
              Design Gallery
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your saved designs will appear here. Start creating to build your collection!
            </p>
            <Button
              onClick={() => document.querySelector("#mixer")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-rose-gold hover:bg-rose-gold/80 text-white px-8 py-3 rounded-full"
            >
              Start Designing
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-lavender/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Design Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal collection of fabric designs. Like, share, and organize your creations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "all"
                ? "bg-lavender text-white shadow-lg"
                : "bg-white text-lavender border border-lavender hover:bg-lavender hover:text-white"
            }`}
          >
            All Designs ({savedDesigns.length})
          </button>
          <button
            onClick={() => setFilter("liked")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              filter === "liked"
                ? "bg-rose-gold text-white shadow-lg"
                : "bg-white text-rose-gold border border-rose-gold hover:bg-rose-gold hover:text-white"
            }`}
          >
            Favorites ({savedDesigns.filter(d => d.liked).length})
          </button>
          {materials.map(material => (
            <button
              key={material}
              onClick={() => setFilter(material)}
              className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                filter === material
                  ? "bg-sage text-white shadow-lg"
                  : "bg-white text-sage border border-sage hover:bg-sage hover:text-white"
              }`}
            >
              {material}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className="fabric-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={design.dataURL}
                  alt={`${design.material} with ${design.pattern}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-playfair font-semibold text-gray-800 capitalize">
                    {design.material} × {design.pattern}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Created {new Date(design.timestamp).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleLike(design.id)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        design.liked
                          ? "bg-rose-gold text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-rose-gold hover:text-white"
                      }`}
                    >
                      <Heart size={16} fill={design.liked ? "currentColor" : "none"} />
                    </button>
                    <button
                      onClick={() => shareDesign(design)}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-sage hover:text-white transition-all duration-300"
                    >
                      <Share size={16} />
                    </button>
                  </div>
                  <button
                    onClick={() => deleteDesign(design.id)}
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
