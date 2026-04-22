import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Users,
  TrendingUp,
  Award,
  Loader2
} from 'lucide-react';


const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }}
      className={`fixed inset-0 z-[100] bg-bg-cream flex flex-col items-center justify-center ${!isVisible ? 'hidden' : ''}`}
    >
      <motion.img
        src="/logo.png"
        initial={{ scale: 0.8, opacity: 0.1 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 mb-8"
      />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="h-1 bg-primary-red rounded-full"
      />
      <span className="mt-4 font-black tracking-widest text-primary-red animate-pulse uppercase">CHAOWMOMO</span>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Social', href: '#social' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Chaowmomo Logo" className="w-16 h-auto" />
          <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-primary-red' : 'text-white'}`}>CHAOWMOMO</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-bold uppercase text-sm transition-colors ${isScrolled ? 'hover:text-primary-red' : 'text-white hover:text-yellow-200'}`}>
              {link.name}
            </a>
          ))}
          <a href="#menu" className={`btn-primary ${!isScrolled ? 'bg-white text-primary-red-important shadow-none' : ''}`}>Check Menu</a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? 'text-text-dark' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 w-full p-6 shadow-xl border-t border-gray-100 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-bold uppercase text-lg border-b border-gray-50 pb-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const MenuSection = () => {
  const categories = [
    'FRIED MOMO', 'PAN FRIED MOMO', 'CHILLI MOMO', 'MOLTEN CHEESY MOMO',
    'MOMO BURGER', 'THUKPAS', 'BEVERAGES', 'EXTRA', 'CHOCOLATE MOMO'
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Chicken Pahari Fresh Steam Momo',
      desc: 'Savor the essence of the mountains with our Chicken Pahari Fresh Steam Momo, filled with juicy chicken and Himalayan herbs.',
      image: 'image3.png'
    },
    {
      id: 2,
      name: 'Veg Pahari Feast Fried Momo',
      desc: 'Indulge in the authentic taste of the mountains with our Veg Pahari Feast Fried Momo. Each bite is a crispy delight.',
      image: '/image.png'
    },
    {
      id: 3,
      name: 'Veg Pahari Fresh Fried Momo',
      desc: 'Savor the essence of the mountains with our Veg Pahari Fresh Fried Momo, filled with fresh vegetables and secret spices.',
      image: 'image2.png'
    }
  ];

  // activeIndex points at the currently large/center card (0..menuItems.length-1)
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + menuItems.length) % menuItems.length);
  const next = () => setActiveIndex((i) => (i + 1) % menuItems.length);

  // helper to pick an index with wrap-around
  const idxFor = (offset) => {
    const len = menuItems.length;
    return (activeIndex + offset + len) % len;
  };

  return (
    <section id="menu" className="relative py-24">
      <div className="container mx-auto">
        <h2 className="section-title text-white mb-16">Our <span className="text-yellow-400">Menu</span></h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="menu-sidebar shadow-2xl overflow-hidden">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`menu-category-btn ${idx === 0 ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Controlled 3-card Carousel */}
          <div id='fr' className="md:col-span-3 relative flex items-center justify-center" style={{ width: "220%" }}>
            <button
              onClick={prev}
              aria-label="Previous"
              className="absolute -left-6 z-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="rotate-180" />
            </button>

            <div className="flex gap-6 items-center justify-center">
              {[-1, 0, 1].map((offset) => {
                const idx = idxFor(offset);
                const item = menuItems[idx];
                const isActive = offset === 0;
                // hide side cards on very small screens
                const sideHidden = offset !== 0 ? 'hidden sm:block' : '';
                return (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveIndex(idx)}
                    onKeyDown={(e) => { if (e.key === 'Enter') setActiveIndex(idx); }}
                    key={item.id + '-' + offset}
                    className={`transition-all duration-500 ease-in-out flex-shrink-0 ${sideHidden} ${isActive
                      ? 'w-[320px] sm:w-[380px] md:w-[450px] h-[600px] z-20 scale-100 opacity-100 shadow-2xl rounded-2xl overflow-hidden cursor-pointer'
                      : 'w-[220px] sm:w-[300px] md:w-[350px] h-[520px] opacity-60 scale-95 rounded-2xl overflow-hidden cursor-pointer'
                      }`}
                  >
                    <div className={`menu-card h-full bg-white/5 ${isActive ? 'border-4 border-white/10' : ''}`}>
                      <div className={`menu-card-img-wrapper ${isActive ? 'h-1/2' : 'h-[48%]'} overflow-hidden`}>
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="menu-card-content flex flex-col justify-between p-4 h-1/2 bg-gradient-to-t from-black/20 to-transparent">
                        <div>
                          <h3 className={`menu-card-title text-lg md:text-xl font-black ${isActive ? '' : 'opacity-90'}`}>{item.name}</h3>
                          <p className="menu-card-desc text-sm line-clamp-3 mt-2 text-gray-100 opacity-90">{item.desc}</p>
                        </div>
                        <div className="wow-eats-footer mt-4 flex items-center justify-between">
                          <div className="wow-eats-logo leading-none text-white">
                            <span className="text-sm font-bold opacity-70">chaow!</span><br />
                            <span className="text-primary-red font-black text-lg">Eats</span>
                          </div>
                          <button className="order-btn mt-2 py-3 px-4 rounded-lg font-bold bg-primary-red text-white">Order</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="absolute -right-6 z-10 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen relative flex items-center bg-primary-red px-0 py-0 overflow-hidden">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 mt-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className="text-7xl md:text-9xl font-black mb-2 leading-none tracking-tighter text-3d">
          CHAOWMOMO
        </h1>
        <div className="subtext-3d text-2xl md:text-4xl mb-12 uppercase">
          FRANCHISE & MORE
        </div>
        <p className="text-xl md:text-2xl mb-10 text-white opacity-90 font-medium max-w-xl">
          Experience the authentic taste of Himalayan tradition. Join India's most vibrant momo revolution.
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="#franchise" className="px-10 py-4 bg-white text-primary-red rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Get a Franchise
          </a>
          <a href="#about" className="px-10 py-4 border-2 border-white text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-primary-red transition-all">
            Our Legacy
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative hidden md:block"
      >
        <div className="rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-8 border-white/10 aspect-[4/5]" style={{ borderRadius: '37px' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/animatee.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
      </motion.div>
    </div>

    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#fff_1px,transparent_0)] bg-[length:40px_40px]"></div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-white font-bold tracking-widest uppercase mb-4 inline-block">Established Excellence</span>
        <h2 className="section-title text-left mb-8">Redefining the <br /><span className="text-yellow-400">Chaowmomo Spirit</span></h2>
        <p className="text-white/80 text-lg mb-6">
          Chaow Momo is a popular chain of quick-service restaurants that specializes in serving momos, a popular street food from the Indian subcontinent. Founded in punjab, India in 2025 by Rajesh dahiya, Dinesh, Harpreet Singh and Rekha Bhardwaj, Chaow Momo has since expanded to become one of the largest fast-food chains in India, with over 500 outlets across the country.
        </p>
        <p className="text-white/80 text-lg mb-6">
          Chaow Momo has become known for its affordable prices and wide variety of momo options, making it a popular destination for both college students and families alike. Overall, Chaow Momo is a popular and beloved fast-food chain in India and beyond, known for its delicious momos and commitment to quality and sustainability.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col gap-2">
            <Users className="text-yellow-400 w-10 h-10" />
            <h4 className="font-bold text-white">500+ Outlets</h4>
            <p className="text-sm text-text-gray">One of the largest fast-food chains in India.</p>
          </div>
          <div className="flex flex-col gap-2">
            <Award className="text-yellow-400 w-10 h-10" />
            <h4 className="font-bold text-white">Punjab Born</h4>
            <p className="text-sm text-text-gray">Started in 2025 with a vision for quality.</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-secondary-teal/20">
          <img src="/about.png" alt="Chaowmomo Experience" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-primary-red p-8 rounded-2xl shadow-xl hidden md:block">
          <p className="text-4xl font-black">2024</p>
          <p className="font-bold uppercase tracking-tighter">Scaling New Heights</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const SocialTimeline = () => {
  const posts = [
    { id: 1, img: "s.png", likes: '1.2k' },
    { id: 2, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=400", likes: '2.5k' },
    { id: 3, img: "ss.png", likes: '3.1k', placeholder: true }, // Placeholder image
    { id: 4, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&q=80&w=400", likes: '890' },
  ];

  return (
    <section id="social" className="relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="section-title text-white">Join The <span className="text-yellow-400">Momo Tribe</span></h2>
        <div className="flex justify-center gap-6 mb-12">
          <Instagram className="text-white hover:text-yellow-400 cursor-pointer" />
          <Facebook className="text-white hover:text-yellow-400 cursor-pointer" />
          <Twitter className="text-white hover:text-yellow-400 cursor-pointer" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map(post => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={post.img} alt="Social Post" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary-red/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                <span>❤️ {post.likes}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-12 btn-primary">Follow us on Instagram</button>
      </div>
    </section>
  );
};

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contactNumber: '',
    email: '',
    currentOccupation: 'family-business',
    city: '',
    pincode: '',
    investmentRange: '20-lakhs-to-35-lakhs',
    proposedLocation: '',
    propertySize: '',
    googleLocation: '',
    hoursPerDay: 'more-than-8-hours',
    responsibility: 'self'
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/franchise`, formData);
      setStatus('Application Submitted Successfully!');
      setFormData({
        name: '', age: '', contactNumber: '', email: '', currentOccupation: 'family-business',
        city: '', pincode: '', investmentRange: '20-lakhs-to-35-lakhs',
        proposedLocation: '', propertySize: '', googleLocation: '',
        hoursPerDay: 'more-than-8-hours', responsibility: 'self'
      });
    } catch (err) {
      setStatus('Error. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="franchise" className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img src="/franchise.png" className="w-full h-full object-cover" alt="Franchise" />
        <div className="absolute inset-0 bg-accent-brown/90 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-start">
        <div className="text-white sticky top-24">
          <h2 className="text-5xl font-black mb-8">BUILD YOUR <br /><span className="text-yellow-400">BUSINESS EMPIRE</span></h2>
          <p className="text-xl mb-12 opacity-90">
            Become a part of India's fastest-growing Momos chain. Low investment, high returns, and complete operational support.
          </p>
          <div className="space-y-6">
            {[
              { icon: <TrendingUp />, title: "Proven Business Model", desc: "Sustainable growth with high-profit margins." },
              { icon: <Users />, title: "Brand Identity", desc: "Join a brand that resonates with the youth." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="bg-secondary-teal p-3 rounded-xl text-white">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <h3 className="text-3xl font-black mb-8 text-center text-text-dark">Franchise Application</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Name *</label>
                <input
                  type="text" name="name" required placeholder="Full Name"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all outline-none"
                  value={formData.name} onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Age *</label>
                <input
                  type="text" name="age" required placeholder="Your Age"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.age} onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Contact Number *</label>
                <input
                  type="text" name="contactNumber" required placeholder="Phone Number"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.contactNumber} onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Email *</label>
                <input
                  type="email" name="email" required placeholder="Email Address"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.email} onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Current Occupation *</label>
              <select
                name="currentOccupation" required
                className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                value={formData.currentOccupation} onChange={handleChange}
              >
                <option value="family-business">Family Business</option>
                <option value="own-business">Own Business</option>
                <option value="private-sector-job">Private Sector Job</option>
                <option value="consultant-free-lancer">Consultant / Free Lancer</option>
                <option value="fresh-college-pass-out">Fresh College Pass Out</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">City *</label>
                <input
                  type="text" name="city" required placeholder="City"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.city} onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Pincode *</label>
                <input
                  type="text" name="pincode" required placeholder="Pincode"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.pincode} onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Investment Range *</label>
              <select
                name="investmentRange" required
                className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                value={formData.investmentRange} onChange={handleChange}
              >
                <option value="20-lakhs-to-35-lakhs">20 lakhs to 35 lakhs</option>
                <option value="35-lakhs-to-50-lakhs">35 lakhs to 50 lakhs</option>
                <option value="above-50-lakhs">Above 50 lakhs</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Proposed Location (If Any) *</label>
              <input
                type="text" name="proposedLocation" required placeholder="Location details"
                className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                value={formData.proposedLocation} onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Property Size (If Available) *</label>
                <input
                  type="text" name="propertySize" required placeholder="Size in sq. ft."
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.propertySize} onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Google Map Link *</label>
                <input
                  type="text" name="googleLocation" required placeholder="Location URL"
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.googleLocation} onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Daily Commitment *</label>
                <select
                  name="hoursPerDay" required
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.hoursPerDay} onChange={handleChange}
                >
                  <option value="more-than-8-hours">More than 8 hours</option>
                  <option value="4-8-hours">4 – 8 hours</option>
                  <option value="2-4-hours">2 – 4 hours</option>
                  <option value="less-than-2-hours">Less than 2 hours</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-600">Running Responsibility *</label>
                <select
                  name="responsibility" required
                  className="form-input w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-primary-red"
                  value={formData.responsibility} onChange={handleChange}
                >
                  <option value="self">Self</option>
                  <option value="someone-from-within-the-family">Someone from within the family</option>
                  <option value="appointed-manager">Appointed Manager</option>
                  <option value="partners">Partners</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full py-5 btn-primary rounded-2xl text-lg font-black tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
              Apply Now
            </button>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center mt-4 font-bold ${status.includes('Error') ? 'text-red-500' : 'text-green-600'}`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus('Message Sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Error. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="section-title text-left mb-8 text-white">Get In <br /><span className="text-yellow-400">Touch</span></h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-yellow-400" />
                <div className="text-white">
                  <h4 className="font-bold">Call Us</h4>
                  <p className="opacity-80">+91 9780524008</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-yellow-400" />
                <div className="text-white">
                  <h4 className="font-bold">Email</h4>
                  <p className="opacity-80">rajammy1234567@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-yellow-400" />
                <div className="text-white">
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="opacity-80">Motia'z Royal Business Park, ZIRAPPUR, Sighpura 140603 (AMB-CHD Highway)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-10 rounded-3xl grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <label className="font-bold mb-2 block">Name</label>
                <input
                  type="text" required className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary-orange"
                  value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="font-bold mb-2 block">Email</label>
                <input
                  type="email" required className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary-orange"
                  value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="col-span-2">
                <label className="font-bold mb-2 block">Subject</label>
                <input
                  type="text" required className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary-orange"
                  value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div className="col-span-2">
                <label className="font-bold mb-2 block">Message</label>
                <textarea
                  rows="5" className="w-full p-4 rounded-xl border-none focus:ring-2 focus:ring-primary-orange"
                  value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <div className="col-span-2">
                <button type="submit" className="btn-primary w-full py-4 text-lg">Send Message</button>
                {status && <p className="text-center mt-4 text-primary-orange font-bold">{status}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <img src="/logo.png" alt="Chaowmomo Logo" className="w-16 h-auto" />
            <span className="text-3xl font-black tracking-tighter text-primary-red">CHAOWMOMO</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            The ultimate destination for momo lovers. Chaowmomo is more than a brand; it's a movement of taste and tradition.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary-orange"><Instagram size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary-orange"><Facebook size={20} /></a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary-orange"><Twitter size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#about" className="hover:text-primary-orange">About Us</a></li>
            <li><a href="#franchise" className="hover:text-primary-orange">Franchise</a></li>
            <li><a href="#menu" className="hover:text-primary-orange">Our Menu</a></li>
            <li><a href="#contact" className="hover:text-primary-orange">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-8">Newsletter</h4>
          <p className="text-gray-400 mb-6">Get weekly updates on our new flavors and stores.</p>
          <div className="flex">
            <input type="email" placeholder="Email Address" className="bg-white/10 border-none p-4 rounded-l-xl focus:ring-0 w-full" />
            <button className="bg-white text-primary-red px-4 rounded-r-xl"><ChevronRight /></button>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
        <p className="mb-4">Motia'z Royal Business Park, ZIRAPPUR, Sighpura 140603 (AMB-CHD Highway)</p>
        &copy; {new Date().getFullYear()} Chaowmomo Franchise & More. All Rights Reserved.
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="scroll-smooth">
      <Preloader />
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <FranchiseForm />
      <SocialTimeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
