import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Leaf } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award className="text-sage-600" size={32} />, label: 'Established', value: '2020' },
    { icon: <Users className="text-sage-600" size={32} />, label: 'Happy Clients', value: '500+' },
    { icon: <Leaf className="text-sage-600" size={32} />, label: 'Projects Completed', value: '1000+' },
  ];

  return (
    <section id="about" className="py-24 bg-sage-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-sage-200/30 blur-3xl mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-sage-300/20 blur-3xl mix-blend-multiply pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px] bg-sage-900/10 flex items-center justify-center">
              <img
                src="https://i.imgur.com/f9IxQGe.jpg"
                alt="Cody's Lawn & Landscape Team"
                className="w-full h-full object-contain"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/60 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-sage-100 max-w-[240px] hidden sm:block"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-700">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-serif font-bold text-xl text-stone-dark">Top Rated</p>
                  <p className="text-sm text-stone-text">Landscaping Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-sage-500 block"></span>
              <span className="text-sage-600 font-bold uppercase tracking-wider text-sm">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-dark mb-6 leading-tight">
              Cultivating Beauty in Every Detail
            </h2>

            <p className="text-lg text-stone-text mb-6 leading-relaxed">
              At Cody's Lawn & Landscape, we believe your outdoor space is an extension of your home. Since 2020, we have been transforming ordinary yards into breathtaking landscapes that enhance your property's value and your quality of life.
            </p>

            <p className="text-lg text-stone-text mb-8 leading-relaxed">
              Our team of experienced professionals is committed to delivering excellence in every project, from routine maintenance to complex hardscape installations. We pride ourselves on reliability, attention to detail, and a deep understanding of horticulture and design.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                'Licensed & Insured',
                'Expert Team',
                'Custom Designs',
                'Quality Materials',
                'Reliable Service',
                'Free Estimates',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-dark font-medium">
                  <CheckCircle2 className="text-sage-500 shrink-0" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sage-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="mb-3 flex justify-center sm:justify-start">{stat.icon}</div>
                  <p className="text-3xl font-serif font-bold text-stone-dark mb-1">{stat.value}</p>
                  <p className="text-sm text-stone-text uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
