import { motion } from 'motion/react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://i.imgur.com/hxLf83C.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-sage-950/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-sage-950/70 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sage-200 font-medium tracking-widest uppercase text-sm md:text-base mb-4 block"
        >
          Premium Outdoor Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-4xl !text-white"
        >
          <span className="text-transparent" style={{ fontFamily: "'Cinzel', serif", WebkitTextStroke: '2px white' }}>Transforming Lawns into</span> <span className="text-white italic">Elegant Landscapes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-sage-50 mb-10 max-w-2xl font-light leading-relaxed"
        >
          Professional, reliable, and elegant solutions for your outdoor living spaces. We bring your vision to life with expert care and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-sage-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-sage-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get a Free Estimate
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/20 transition-all"
          >
            Explore Services
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
