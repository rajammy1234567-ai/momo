import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Mountain, Coffee, Sparkles, ChevronRight, Award, Utensils, Heart } from 'lucide-react';

export const ChaowSpecialsBanner = ({ onSelectCategory }) => {
  const pillars = [
    {
      icon: <Mountain className="w-8 h-8 text-amber-300" />,
      title: "Himalayan Taste",
      badge: "Authentic & Earthy",
      desc: "Authentic steamed & fried momos, warm Tibetan Thukpa, hand-crafted Shaphaley, and Himalayan Timbur herbs sourced with mountain heritage.",
      color: "from-amber-600/30 to-amber-900/40",
      categoryId: "himalayan"
    },
    {
      icon: <Flame className="w-8 h-8 text-red-400" />,
      title: "Punjabi Tadka",
      badge: "Desi Dhaba Twist",
      desc: "Sizzling ghee tadka, Amritsari ajwaini marinations, rich butter chicken makhani, and tandoori charcoal smoking for an explosive North-Indian punch.",
      color: "from-red-600/30 to-orange-900/40",
      categoryId: "punjabi"
    },
    {
      icon: <Coffee className="w-8 h-8 text-yellow-300" />,
      title: "Café & Coolers",
      badge: "Handcrafted Brews",
      desc: "Rich espresso roasts, thick hazelnut & caramel cold coffees, authentic kadak ginger chai, and electric Himalayan Buransh mojitos.",
      color: "from-yellow-600/30 to-amber-900/40",
      categoryId: "cold-coffee"
    },
    {
      icon: <Utensils className="w-8 h-8 text-emerald-300" />,
      title: "Quick Bites",
      badge: "Crispy & Cheesy",
      desc: "Stone-baked crispy pizzas, cheesy loaded burgers, fiery arrabbiata & alfredo pastas, and street-style buttery Punjabi tadka Maggi.",
      color: "from-emerald-600/30 to-teal-900/40",
      categoryId: "pizza"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1f130e] via-[#291712] to-[#1a0e0a] text-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-yellow-300 text-xs font-black uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            The Chaow Brand Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight"
          >
            Himalayan Taste • Punjabi Tadka <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Café & Quick Bites
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl font-normal leading-relaxed"
          >
            Chaow Momos is more than just a momo counter—we are India's premier fusion hangout blending authentic Himalayan solace with the bold spirit of Punjab, freshly ground coffees, artisan pizzas, and beloved quick bites.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${pillar.color} border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between group transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/15 text-yellow-200 uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">{pillar.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
              </div>

              <button
                onClick={() => onSelectCategory(pillar.categoryId)}
                className="inline-flex items-center gap-2 text-xs font-black text-yellow-300 group-hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Explore {pillar.title} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Key Brand Stats Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl md:text-5xl font-black text-yellow-400">75+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Menu Items A to Z</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black text-white">11</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Delicious Categories</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black text-red-400">500+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Target Outlets Nationwide</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-black text-emerald-400">100%</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mt-1">Fresh & Daily Sourced</div>
          </div>
        </div>
      </div>
    </section>
  );
};
