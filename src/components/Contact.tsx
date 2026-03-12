import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Inquiry: ${formData.service || 'General'} - ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Interested In: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:codyslawnco@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
            <span className="text-sage-600 font-bold uppercase tracking-wider text-sm">Get In Touch</span>
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-dark mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-text"
          >
            Contact us today for a free estimate. We look forward to working with you to create the outdoor living space of your dreams.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-sage-50 p-10 rounded-2xl border border-sage-100 shadow-lg"
          >
            <h3 className="text-3xl font-serif font-bold text-stone-dark mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-full shadow-sm text-sage-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-dark mb-1">Phone</h4>
                  <a href="tel:+18647569240" className="text-sage-600 hover:text-sage-800 text-lg transition-colors">
                    (864) 756-9240
                  </a>
                  <p className="text-stone-text text-sm mt-1">Mobile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-full shadow-sm text-sage-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-dark mb-1">Email</h4>
                  <a href="mailto:codyslawnco@gmail.com" className="text-sage-600 hover:text-sage-800 text-lg transition-colors">
                    codyslawnco@gmail.com
                  </a>
                  <p className="text-stone-text text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-full shadow-sm text-sage-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-dark mb-1">Location</h4>
                  <p className="text-stone-text text-lg">
                    Serving Greenville, SC<br />and surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-full shadow-sm text-sage-600 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-stone-dark mb-1">Business Hours</h4>
                  <p className="text-stone-text text-lg">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-2xl shadow-xl border border-sage-100"
          >
            <h3 className="text-3xl font-serif font-bold text-stone-dark mb-8">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-stone-dark mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-stone-dark mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-dark mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-dark mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-dark mb-2">Service Interested In</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50 text-stone-text"
                >
                  <option value="">Select a service...</option>
                  <option value="maintenance">Lawn Maintenance</option>
                  <option value="landscape">Landscape Design & Install</option>
                  <option value="hardscape">Hardscaping (Patios, Walls)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-dark mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:ring-2 focus:ring-sage-500 focus:border-sage-500 outline-none transition-all bg-sage-50/50 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sage-600 text-white font-bold py-4 rounded-lg hover:bg-sage-700 transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
