import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Maintenance',
      description: 'Keep your property looking pristine year-round with our comprehensive maintenance plans.',
      items: [
        'Mowing & Edging',
        'Weedeating',
        'Spraying weeds in flower beds',
        'Blowing off all hardscapes',
        'Seasonal Cleanups',
      ],
      image: 'https://i.imgur.com/x3Kyyiq.jpg',
    },
    {
      title: 'Landscape',
      description: 'Enhance your curb appeal with custom landscape design, installation, and care.',
      items: [
        'Mulch, Riverstone & Pinestraw',
        'Pea Gravel, Gravel & Slate Chips',
        'Metal & Stone Edging',
        'Planting & Plant Removal',
        'Trimming & Pruning',
        'Irrigation & Drainage (French Drains)',
        'Grading & Sod Installation',
      ],
      image: 'https://i.imgur.com/t9vm8w3.jpg',
    },
    {
      title: 'Hardscape',
      description: 'Create lasting outdoor living spaces with our expert hardscaping services.',
      items: [
        'Paver Patios & Walkways',
        'Stone Steps & Retaining Walls',
        'Flagstone Patios',
        'Outdoor Fireplaces & Fire Pits',
        'Astroturf Installation',
        'Custom Stonework',
      ],
      image: 'https://i.imgur.com/ES9ymAd.jpg',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
            <span className="text-sage-600 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-stone-dark mb-6"
          >
            Comprehensive Outdoor Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-text"
          >
            From regular lawn care to complete outdoor transformations, we offer a full suite of services to meet all your landscaping needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group bg-sage-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-sage-100 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative overflow-hidden bg-sage-900/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-4 pointer-events-none">
                  <h3 className="text-3xl font-serif font-bold !text-white drop-shadow-md">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-stone-text mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-dark">
                      <CheckCircle2 className="text-sage-500 shrink-0 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block text-center bg-white border-2 border-sage-600 text-sage-700 font-bold py-3 px-6 rounded-lg hover:bg-sage-600 hover:text-white transition-colors mt-auto"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
