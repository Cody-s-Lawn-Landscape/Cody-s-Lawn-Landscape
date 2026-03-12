import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-sage-200 py-16 border-t border-sage-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://i.imgur.com/w4QjY3x.png"
                alt="Cody's Lawn & Landscape Logo"
                className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              <span className="font-serif text-2xl font-bold text-white tracking-wide">
                Cody's
              </span>
            </div>
            <p className="text-sage-300 mb-6 leading-relaxed">
              Transforming outdoor spaces with professional lawn care, landscaping, and hardscaping services. Your dream yard is just a call away.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/codyslawnmaintenance" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sage-900 flex items-center justify-center hover:bg-sage-700 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/codyslawnmaintenance?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-sage-900 flex items-center justify-center hover:bg-sage-700 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="!text-white font-serif font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="!text-white font-serif font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Lawn Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landscape Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hardscaping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Irrigation Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Seasonal Cleanups</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="!text-white font-serif font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-sage-500 mt-1">📍</span>
                <span>Greenville, SC<br />Serving Surrounding Areas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sage-500">📞</span>
                <a href="tel:+18647569240" className="hover:text-white transition-colors">(864) 756-9240</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-sage-500">✉️</span>
                <a href="mailto:codyslawnco@gmail.com" className="hover:text-white transition-colors">codyslawnco@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-sage-900 text-center text-sage-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Cody's Lawn & Landscape. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
