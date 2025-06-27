import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const MeasurementGuide = () => {
  const [activeGarment, setActiveGarment] = useState("kurti");

  const garmentTypes = {
    kurti: {
      name: "Kurti/Tunic",
      measurements: [
        { name: "Bust", description: "Around the fullest part of the bust", visual: "Measure around chest at nipple line" },
        { name: "Waist", description: "At the narrowest part of the waist", visual: "Measure around natural waistline" },
        { name: "Hip", description: "Around the fullest part of the hips", visual: "Measure around hip bone level" },
        { name: "Length", description: "From shoulder to desired hemline", visual: "Measure from shoulder seam down" },
        { name: "Sleeve Length", description: "From shoulder to wrist", visual: "Arm slightly bent, measure outer arm" }
      ]
    },
    shirt: {
      name: "Shirt/Blouse",
      measurements: [
        { name: "Chest", description: "Around the fullest part of the chest", visual: "Measure around chest, under arms" },
        { name: "Waist", description: "At the natural waistline", visual: "Measure around narrowest part" },
        { name: "Shoulder", description: "From shoulder point to shoulder point", visual: "Across back, shoulder to shoulder" },
        { name: "Arm Length", description: "From shoulder to wrist", visual: "Down the arm with slight bend" },
        { name: "Neck", description: "Around the base of the neck", visual: "Comfortable fit around neck base" }
      ]
    },
    pant: {
      name: "Pants/Trousers",
      measurements: [
        { name: "Waist", description: "Around the natural waistline", visual: "At the narrowest part of waist" },
        { name: "Hip", description: "Around the fullest part of hips", visual: "Around hip bone level" },
        { name: "Inseam", description: "From crotch to ankle", visual: "Inner leg measurement" },
        { name: "Outseam", description: "From waist to ankle", visual: "Side of leg measurement" },
        { name: "Thigh", description: "Around the fullest part of thigh", visual: "Upper leg circumference" }
      ]
    }
  };

  return (
    <section id="measurements" className="py-20 bg-light-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-raisin mb-4">
            Measurement Guide
          </h2>
          <p className="text-xl text-raisin/80 max-w-2xl mx-auto">
            Get the perfect fit with our comprehensive measurement guide. Step-by-step instructions for accurate measurements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Garment Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(garmentTypes).map(([key, garment]) => (
              <button
                key={key}
                onClick={() => setActiveGarment(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeGarment === key
                    ? "bg-light-pink text-raisin shadow-lg transform scale-105"
                    : "bg-white text-light-pink border border-light-pink hover:bg-light-pink hover:text-raisin"
                }`}
              >
                {garment.name}
              </button>
            ))}
          </div>

          {/* Measurement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {garmentTypes[activeGarment as keyof typeof garmentTypes].measurements.map((measurement, index) => (
              <div
                key={measurement.name}
                className="fabric-card p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-raisin">
                    {measurement.name}
                  </h3>
                  <div className="w-12 h-12 bg-light-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-light-pink font-bold">{index + 1}</span>
                  </div>
                </div>
                <p className="text-raisin/70 mb-2">{measurement.description}</p>
                <p className="text-sm text-light-pink font-medium bg-light-pink/10 px-3 py-2 rounded-lg">
                  💡 {measurement.visual}
                </p>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-12 fabric-card p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-raisin text-center">
              Measurement Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Use a flexible measuring tape for accurate results</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Measure over undergarments you'll wear with the garment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Stand straight and relax your shoulders</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Don't pull the tape too tight or too loose</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Have someone help you for more accurate measurements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-light-pink rounded-full mt-2"></div>
                  <p className="text-raisin/70">Round measurements to the nearest half inch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeasurementGuide;
