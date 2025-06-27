import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    designType: "consultation"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store form data in localStorage for demo purposes
    const submissions = JSON.parse(localStorage.getItem("fabricFusionContacts") || "[]");
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    });
    localStorage.setItem("fabricFusionContacts", JSON.stringify(submissions));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      designType: "consultation"
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in FabricFusion custom designs. Can you help me?");
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your fabric vision to life? Contact us for custom orders, consultations, or any questions about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="fabric-card p-8">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-gray-800">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full text-black placeholder:text-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full text-black placeholder:text-gray-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="designType" className="block text-sm font-medium text-black mb-2">
                  Service Type
                </label>
                <select
                  id="designType"
                  name="designType"
                  value={formData.designType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-gold focus:border-transparent text-black bg-white"
                >
                  <option value="consultation">Design Consultation</option>
                  <option value="custom-order">Custom Order</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="collaboration">Business Collaboration</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full text-black placeholder:text-gray-500"
                  placeholder="Tell us about your project, requirements, or any questions you have..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-rose-gold hover:bg-rose-gold/80 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-8">
            {/* WhatsApp Section */}
            <div className="fabric-card p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-playfair font-semibold mb-4 text-gray-800">
                Chat with us on WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Get instant responses to your queries and quick consultations through WhatsApp.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="mr-2" size={20} />
                Start WhatsApp Chat
              </Button>
            </div>

            {/* Contact Details */}
            <div className="fabric-card p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-rose-gold/20 rounded-full flex items-center justify-center">
                    <Phone className="text-rose-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">0987654321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="text-sage" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">baskarmahendrank5@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-playfair font-semibold text-gray-800 mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="fabric-card p-8">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-gray-800">
                Quick FAQ
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">How long does custom design take?</h4>
                  <p className="text-sm text-gray-600">Typically 2-3 business days for digital designs, 1-2 weeks for physical samples.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Do you offer bulk discounts?</h4>
                  <p className="text-sm text-gray-600">Yes! We offer competitive pricing for orders of 50+ pieces.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Can I modify existing patterns?</h4>
                  <p className="text-sm text-gray-600">Absolutely! We can customize any pattern to match your vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
