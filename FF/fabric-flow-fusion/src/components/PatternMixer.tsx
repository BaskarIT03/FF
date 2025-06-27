import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, Rect, Pattern } from "fabric";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PatternMixer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState("silk");
  const [selectedPattern, setSelectedPattern] = useState("floral");
  const [selectedColor, setSelectedColor] = useState("#f3e8ff");

  const materials = [
    { id: "silk", name: "Silk", texture: "smooth" },
    { id: "cotton", name: "Cotton", texture: "soft" },
    { id: "linen", name: "Linen", texture: "rough" },
    { id: "velvet", name: "Velvet", texture: "plush" },
    { id: "chiffon", name: "Chiffon", texture: "sheer" },
    { id: "denim", name: "Denim", texture: "sturdy" },
    { id: "satin", name: "Satin", texture: "glossy" },
    { id: "georgette", name: "Georgette", texture: "flowing" },
    { id: "organza", name: "Organza", texture: "crisp" },
    { id: "tweed", name: "Tweed", texture: "textured" },
    { id: "crepe", name: "Crepe", texture: "crinkled" },
    { id: "tulle", name: "Tulle", texture: "net-like" }
  ];

  const patterns = [
    { id: "floral", name: "Floral", description: "Delicate flower motifs" },
    { id: "geometric", name: "Geometric", description: "Modern angular designs" },
    { id: "stripes", name: "Stripes", description: "Classic linear patterns" },
    { id: "checks", name: "Checks", description: "Traditional checkered design" },
    { id: "paisley", name: "Paisley", description: "Elegant teardrop shapes" },
    { id: "abstract", name: "Abstract", description: "Artistic flowing forms" },
    { id: "polka-dots", name: "Polka Dots", description: "Playful circular patterns" },
    { id: "chevron", name: "Chevron", description: "Zigzag V-shaped design" },
    { id: "damask", name: "Damask", description: "Ornate reversible pattern" },
    { id: "tribal", name: "Tribal", description: "Ethnic geometric motifs" },
    { id: "botanical", name: "Botanical", description: "Nature-inspired leaves" },
    { id: "art-deco", name: "Art Deco", description: "Vintage glamour patterns" }
  ];

  const colors = [
    "#FDF0D5", "#C084FC", "#F4A261", "#3DDC97", "#FF5F7E", "#5B2C6F", 
    "#8E44AD", "#FAFAFA", "#FFF7EC", "#144552", "#f3e8ff", "#fce7f3", 
    "#fef3c7", "#dcfce7", "#dbeafe", "#fce7f3", "#e0f2fe", "#f0fdf4", 
    "#fff7ed", "#fef7f7", "#f8fafc", "#f5f3ff", "#ecfdf5", "#fdf4ff"
  ];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 400,
      backgroundColor: "#ffffff",
    });

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas) return;

    // Clear canvas
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";

    // Create pattern based on selection
    createPattern();
  }, [fabricCanvas, selectedMaterial, selectedPattern, selectedColor]);

  const createPattern = () => {
    if (!fabricCanvas) return;

    // Create base fabric rectangle
    const baseRect = new Rect({
      left: 0,
      top: 0,
      width: 400,
      height: 400,
      fill: selectedColor,
      selectable: false
    });

    fabricCanvas.add(baseRect);

    // Add pattern overlay based on selection
    addPatternOverlay();

    fabricCanvas.renderAll();
  };

  const addPatternOverlay = () => {
    if (!fabricCanvas) return;

    const patternSize = 40;
    const rows = Math.ceil(400 / patternSize);
    const cols = Math.ceil(400 / patternSize);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * patternSize;
        const y = row * patternSize;

        let patternElement;

        switch (selectedPattern) {
          case "floral":
            patternElement = new Rect({
              left: x + 10,
              top: y + 10,
              width: 20,
              height: 20,
              fill: "rgba(255, 255, 255, 0.3)",
              rx: 10,
              ry: 10,
              selectable: false
            });
            break;
          case "stripes":
            if (row % 2 === 0) {
              patternElement = new Rect({
                left: x,
                top: y,
                width: patternSize,
                height: patternSize / 2,
                fill: "rgba(255, 255, 255, 0.2)",
                selectable: false
              });
            }
            break;
          case "checks":
            if ((row + col) % 2 === 0) {
              patternElement = new Rect({
                left: x,
                top: y,
                width: patternSize,
                height: patternSize,
                fill: "rgba(255, 255, 255, 0.2)",
                selectable: false
              });
            }
            break;
          case "polka-dots":
            patternElement = new Rect({
              left: x + 15,
              top: y + 15,
              width: 10,
              height: 10,
              fill: "rgba(255, 255, 255, 0.4)",
              rx: 5,
              ry: 5,
              selectable: false
            });
            break;
          case "chevron":
            if ((row + col) % 4 < 2) {
              patternElement = new Rect({
                left: x,
                top: y,
                width: patternSize,
                height: patternSize / 4,
                fill: "rgba(255, 255, 255, 0.25)",
                angle: 45,
                selectable: false
              });
            }
            break;
          case "paisley":
            patternElement = new Rect({
              left: x + 8,
              top: y + 8,
              width: 24,
              height: 16,
              fill: "rgba(255, 255, 255, 0.3)",
              rx: 12,
              ry: 8,
              selectable: false
            });
            break;
          case "damask":
            if ((row + col) % 3 === 0) {
              patternElement = new Rect({
                left: x + 12,
                top: y + 12,
                width: 16,
                height: 16,
                fill: "rgba(255, 255, 255, 0.35)",
                rx: 8,
                ry: 8,
                angle: 45,
                selectable: false
              });
            }
            break;
          case "geometric":
            patternElement = new Rect({
              left: x + 15,
              top: y + 15,
              width: 10,
              height: 10,
              fill: "rgba(255, 255, 255, 0.3)",
              angle: 45,
              selectable: false
            });
            break;
          default:
            patternElement = new Rect({
              left: x + 5,
              top: y + 5,
              width: 30,
              height: 30,
              fill: "rgba(255, 255, 255, 0.1)",
              rx: 15,
              ry: 15,
              selectable: false
            });
        }

        if (patternElement) {
          fabricCanvas.add(patternElement);
        }
      }
    }
  };

  const saveDesign = () => {
    if (!fabricCanvas) return;

    const design = {
      id: Date.now().toString(),
      material: selectedMaterial,
      pattern: selectedPattern,
      color: selectedColor,
      timestamp: new Date().toISOString(),
      dataURL: fabricCanvas.toDataURL()
    };

    const savedDesigns = JSON.parse(localStorage.getItem("fabricFusionDesigns") || "[]");
    savedDesigns.push(design);
    localStorage.setItem("fabricFusionDesigns", JSON.stringify(savedDesigns));

    toast.success("Design saved successfully!");
  };

  return (
    <section id="mixer" className="py-20 bg-paper-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-deep-charcoal mb-4">
            Pattern Mixer Studio
          </h2>
          <p className="text-xl text-deep-charcoal/70 max-w-2xl mx-auto">
            Combine materials, patterns, and colors to create your perfect fabric design. See your vision come to life instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-8">
            {/* Material Selection */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-deep-charcoal">
                Choose Material
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {materials.map((material) => (
                  <Button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    variant={selectedMaterial === material.id ? "default" : "outline"}
                    className={`p-4 h-auto flex flex-col items-center transition-all duration-300 border-2 ${
                      selectedMaterial === material.id
                        ? "bg-indigo-gradient text-whisper-white shadow-lg scale-105 border-aqua-mint"
                        : "border-radiant-orchid text-deep-charcoal hover:bg-aqua-mint hover:text-whisper-white hover:border-aqua-mint"
                    }`}
                  >
                    <span className="font-medium">{material.name}</span>
                    <span className="text-xs opacity-70">{material.texture}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Pattern Selection */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-deep-charcoal">
                Choose Pattern
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {patterns.map((pattern) => (
                  <Button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(pattern.id)}
                    variant={selectedPattern === pattern.id ? "default" : "outline"}
                    className={`p-4 h-auto flex flex-col items-center transition-all duration-300 border-2 ${
                      selectedPattern === pattern.id
                        ? "bg-radiant-orchid text-whisper-white shadow-lg scale-105 border-gold-bronze"
                        : "border-gold-bronze text-deep-charcoal hover:bg-gold-bronze hover:text-whisper-white hover:border-aqua-mint"
                    }`}
                  >
                    <span className="font-medium">{pattern.name}</span>
                    <span className="text-xs opacity-70">{pattern.description}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-deep-charcoal">
                Choose Base Color
              </h3>
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                      selectedColor === color ? "border-deep-charcoal scale-110 shadow-lg" : "border-radiant-orchid/50 hover:border-aqua-mint hover:scale-105"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <Button
              onClick={saveDesign}
              className="w-full bg-gradient-to-r from-pink-coral to-radiant-orchid hover:from-radiant-orchid hover:to-pink-coral text-whisper-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-aqua-mint"
            >
              💾 Save Design
            </Button>
          </div>

          {/* Canvas Preview */}
          <div className="flex flex-col items-center">
            <div className="fabric-card p-6 max-w-fit bg-whisper-white border-2 border-radiant-orchid/30 hover:border-aqua-mint">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-center text-deep-charcoal">
                Live Preview
              </h3>
              <canvas
                ref={canvasRef}
                className="border-2 border-gold-bronze/50 rounded-lg shadow-inner"
              />
              <div className="mt-4 text-center">
                <p className="text-sm text-deep-charcoal/70">
                  <span className="font-medium text-radiant-orchid">Material:</span> {materials.find(m => m.id === selectedMaterial)?.name} |{" "}
                  <span className="font-medium text-gold-bronze">Pattern:</span> {patterns.find(p => p.id === selectedPattern)?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternMixer;
