import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: "Cody's team completely transformed our backyard. They were professional, on time, and the attention to detail was incredible. Highly recommend their hardscaping services!",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      text: "We've used them for commercial property maintenance for over a year now. The property always looks pristine. Reliable and communicative.",
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'Homeowner',
      text: "From the initial design consultation to the final planting, the experience was seamless. They listened to what we wanted and delivered beyond our expectations.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-sage-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sage-800/50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-sage-800/50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
            <span className="text-sage-300 font-bold uppercase tracking-wider text-sm">Testimonials</span>
            <span className="h-[2px] w-12 bg-sage-500 block"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold !text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            >
              <Quote className="absolute top-6 right-6 text-sage-500/30" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-sage-50 text-lg leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sage-600 flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="!text-white font-bold">{review.name}</h4>
                  <p className="text-sage-300 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
