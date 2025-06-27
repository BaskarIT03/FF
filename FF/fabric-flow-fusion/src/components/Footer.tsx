
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-raisin text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
              FabricFusion
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Where premium materials meet stunning patterns in perfect harmony. 
              Create, visualize, and bring your fabric dreams to life with our innovative design platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://m.facebook.com/profile.php?id=100040523051996"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-light-pink/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-light-pink/30 transition-all duration-300 relative"
              >
                <Facebook className="w-5 h-5 text-light-pink group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-light-pink text-dark-raisin px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Facebook
                </span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/baskar-m-89543728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-light-pink/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-light-pink/30 transition-all duration-300 relative"
              >
                <Linkedin className="w-5 h-5 text-light-pink group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-light-pink text-dark-raisin px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  LinkedIn
                </span>
              </a>
              
              <a
                href="https://www.instagram.com/baskarpikachu/profilecard/?igsh=MWJ3M2tmazFwc21xdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 bg-light-pink/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-light-pink/30 transition-all duration-300 relative"
              >
                <Instagram className="w-5 h-5 text-light-pink group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-light-pink text-dark-raisin px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Instagram
                </span>
              </a>
              
              <a
                href="#"
                className="group w-10 h-10 bg-light-pink/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-light-pink/30 transition-all duration-300 relative"
              >
                <Twitter className="w-5 h-5 text-light-pink group-hover:scale-110 transition-transform duration-300" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-light-pink text-dark-raisin px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Twitter
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-light-pink transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#materials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-light-pink transition-colors"
                >
                  Materials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#mixer")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-light-pink transition-colors"
                >
                  Pattern Mixer
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-light-pink transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>baskarmahendrank5@gmail.com</p>
              <p>0987654321</p>
              <p>Mon-Fri: 9AM-6PM</p>
              <p>Sat: 10AM-4PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FabricFusion. All rights reserved. Made with ❤️ for fabric enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
