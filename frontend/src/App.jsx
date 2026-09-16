import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  ChevronRight,
  Menu as MenuIcon,
  X,
  Users,
  TrendingUp,
  Award,
  Search,
  Flame,
  Sparkles,
  Coffee,
  Check,
  Mountain,
  Utensils,
  ArrowLeft,
  Phone
} from 'lucide-react';

import { CATEGORIES, MENU_ITEMS } from './data/menuData';
import { PrivacyPolicy } from './components/PrivacyPolicy';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// ==================== NAVBAR ====================
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isPrivacyPage = location.pathname.startsWith('/privacy');

  const navLinks = [
    { name: 'Home', href: isPrivacyPage ? '/#home' : '#home' },
    { name: 'Brand Story', href: isPrivacyPage ? '/#brand-story' : '#brand-story' },
    { name: 'Menu (75+)', href: isPrivacyPage ? '/#menu' : '#menu' },
    { name: 'About', href: isPrivacyPage ? '/#about' : '#about' },
    { name: 'Franchise', href: isPrivacyPage ? '/#franchise' : '#franchise' },
    { name: 'Contact', href: isPrivacyPage ? '/#contact' : '#contact' },
  ];

  return (
    <>
      <header className="cm-navbar">
        <div className="cm-container cm-navbar-inner">
          {/* Logo & Brand Identity */}
          {isPrivacyPage ? (
            <Link to="/" className="cm-brand-logo-wrap">
              <img
                src="/logo.png"
                alt="Chaw Momos Logo"
                className="cm-brand-logo-img"
              />
              <div>
                <div className="cm-brand-title">CHAW MOMOS</div>
                <span className="cm-brand-tagline">Himalayan • Punjabi • Café</span>
              </div>
            </Link>
          ) : (
            <a href="#home" className="cm-brand-logo-wrap">
              <img
                src="/logo.png"
                alt="Chaw Momos Logo"
                className="cm-brand-logo-img"
              />
              <div>
                <div className="cm-brand-title">CHAW MOMOS</div>
                <span className="cm-brand-tagline">Himalayan • Punjabi • Café</span>
              </div>
            </a>
          )}

          {/* Desktop Navigation Links */}
          <nav className="cm-nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="cm-nav-link">
                {link.name}
              </a>
            ))}
            {isPrivacyPage ? (
              <Link to="/" className="cm-nav-btn">
                <ArrowLeft size={14} /> Back to Home
              </Link>
            ) : (
              <a href="#menu" className="cm-nav-btn">
                Explore Menu <ChevronRight size={14} />
              </a>
            )}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            className="cm-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop */}
      {isMenuOpen && (
        <>
          <div className="cm-mobile-backdrop" onClick={() => setIsMenuOpen(false)} />
          <div className="cm-mobile-drawer">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="cm-nav-link"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/privacy-policy"
              onClick={() => setIsMenuOpen(false)}
              className="cm-nav-link"
              style={{ color: '#ffb703', fontWeight: 700 }}
            >
              Privacy Policy
            </Link>
            {isPrivacyPage ? (
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="cm-nav-btn cm-drawer-btn"
              >
                ← Return to Home
              </Link>
            ) : (
              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="cm-nav-btn cm-drawer-btn"
              >
                Explore 75+ Menu Items
              </a>
            )}
          </div>
        </>
      )}
    </>
  );
};

// ==================== HERO SECTION ====================
const Hero = () => (
  <section id="home" className="cm-hero">
    <div className="cm-container cm-hero-grid">
      {/* Left Column: Text and Actions */}
      <div className="cm-hero-text">
        <div className="cm-badge-pill">
          <Sparkles size={14} />
          Himalayan Taste • Punjabi Tadka • Café & Quick Bites
        </div>

        <h1 className="cm-hero-title">CHAW MOMOS</h1>

        <div className="cm-hero-subtitle">CAFÉ, QUICK BITES & MORE</div>

        <p className="cm-hero-desc">
          Not just a momo stall—India's premier fusion destination. Relish authentic Himalayan Thukpa & handcrafted momos fired up with robust Punjabi Tadka, barista hot & cold coffees, artisan pizzas, and refreshing coolers.
        </p>

        <div className="cm-hero-actions">
          <a href="#menu" className="cm-btn-gold">
            Explore 75+ Items Menu <ChevronRight size={16} />
          </a>
          <a href="#franchise" className="cm-btn-outline">
            Franchise Partnership
          </a>
        </div>

        {/* Brand Highlights */}
        <div className="cm-hero-stats">
          <div>
            <div className="cm-stat-number">11</div>
            <div className="cm-stat-label">Categories</div>
          </div>
          <div>
            <div className="cm-stat-number">75+</div>
            <div className="cm-stat-label">Fresh Items</div>
          </div>
          <div>
            <div className="cm-stat-number">500+</div>
            <div className="cm-stat-label">Target Outlets</div>
          </div>
        </div>
      </div>

      {/* Right Column: Video Showcase */}
      <div className="cm-hero-media">
        <div className="cm-hero-video-card">
          <video autoPlay loop muted playsInline className="cm-hero-video">
            <source src="/animatee.mp4" type="video/mp4" />
          </video>
          <div className="cm-hero-floating-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '26px' }}>🥟</span>
              <div>
                <strong style={{ fontSize: '14px', display: 'block' }}>Punjabi Tadka Momos</strong>
                <span style={{ fontSize: '11px', color: '#ffb703' }}>Sizzling Desi Ghee & Ajwaini Tadka</span>
              </div>
            </div>
            <span style={{
              background: '#d63031',
              color: '#fff',
              fontSize: '10px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '50px',
              textTransform: 'uppercase'
            }}>
              Signature
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== BRAND STORY SECTION ====================
const BrandStory = ({ onSelectCategory }) => {
  const pillars = [
    {
      icon: <Mountain size={26} />,
      title: "Himalayan Taste",
      badge: "Authentic & Earthy",
      desc: "Authentic steamed & fried momos, warm Tibetan Thukpa, hand-crafted Shaphaley, and Himalayan Timbur herbs sourced with mountain heritage.",
      categoryId: "himalayan"
    },
    {
      icon: <Flame size={26} />,
      title: "Punjabi Tadka",
      badge: "Desi Dhaba Twist",
      desc: "Sizzling ghee tadka, Amritsari ajwaini marinations, rich butter chicken makhani, and tandoori charcoal smoking for an explosive North-Indian punch.",
      categoryId: "punjabi"
    },
    {
      icon: <Coffee size={26} />,
      title: "Café & Coolers",
      badge: "Handcrafted Brews",
      desc: "Rich espresso roasts, thick hazelnut & caramel cold coffees, authentic kadak ginger chai, and electric Himalayan Buransh mojitos.",
      categoryId: "cold-coffee"
    },
    {
      icon: <Utensils size={26} />,
      title: "Quick Bites",
      badge: "Crispy & Cheesy",
      desc: "Stone-baked crispy pizzas, cheesy loaded burgers, fiery arrabbiata & alfredo pastas, and street-style buttery Punjabi tadka Maggi.",
      categoryId: "pizza"
    }
  ];

  return (
    <section id="brand-story" className="cm-brand-story">
      <div className="cm-container">
        <div className="cm-section-header">
          <span className="cm-section-pill">The Chaw Brand Story</span>
          <h2 className="cm-section-title">
            Himalayan Taste • Punjabi Tadka <br />
            <span style={{ color: '#ffb703' }}>Café & Quick Bites</span>
          </h2>
          <p className="cm-section-desc">
            Chaw Momos is more than just a momo counter—we are India's premier fusion hangout blending authentic Himalayan solace with the bold spirit of Punjab, freshly ground coffees, artisan pizzas, and beloved quick bites.
          </p>
        </div>

        <div className="cm-pillars-grid">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="cm-pillar-card">
              <div>
                <div className="cm-pillar-icon-box">{pillar.icon}</div>
                <span className="cm-pillar-badge">{pillar.badge}</span>
                <h3 className="cm-pillar-title">{pillar.title}</h3>
                <p className="cm-pillar-desc">{pillar.desc}</p>
              </div>
              <button
                onClick={() => onSelectCategory(pillar.categoryId)}
                style={{
                  marginTop: '20px',
                  background: 'none',
                  border: 'none',
                  color: '#ffb703',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textAlign: 'left',
                  padding: 0
                }}
              >
                Explore {pillar.title} <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== INFORMATIVE MENU SECTION ====================
const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'nonveg' && item.isVeg) return false;
      if (dietaryFilter === 'punjabi' && !item.name.toLowerCase().includes('punjabi') && item.category !== 'punjabi') return false;
      if (dietaryFilter === 'special' && !item.isSpecial) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchCat = item.categoryLabel.toLowerCase().includes(q);
        const matchTag = item.tag?.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchCat && !matchTag) return false;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="cm-menu-section">
      <div className="cm-container">
        {/* Header */}
        <div className="cm-section-header" style={{ marginBottom: '36px' }}>
          <span className="cm-section-pill" style={{ color: '#d63031', background: '#fde8e8', borderColor: '#f8b4b4' }}>
            Culinary Menu Showcase • 11 Categories
          </span>
          <h2 className="cm-section-title" style={{ color: '#140905' }}>
            Our Complete <span style={{ color: '#d63031' }}>Menu</span> (75+ Delights)
          </h2>
          <p className="cm-section-desc" style={{ color: '#6e584f' }}>
            Discover our complete culinary catalog—from authentic Himalayan mountain momos and traditional Tibetan Thukpa to rich Punjabi tadka specialties, stone-baked pizzas, barista coffees, and refreshing coolers.
          </p>
        </div>

        {/* Controls: Search & Dietary Filters */}
        <div className="cm-menu-controls">
          <div className="cm-search-wrap">
            <Search size={18} className="cm-search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search momos, pasta, burgers, coffee..."
              className="cm-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#8c7b74'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="cm-dietary-filters">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'veg', label: 'Pure Veg' },
              { id: 'nonveg', label: 'Non-Veg' },
              { id: 'punjabi', label: 'Punjabi Tadka 🌶️' },
              { id: 'special', label: 'Chef Specials ⭐' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setDietaryFilter(filter.id)}
                className={`cm-filter-btn ${dietaryFilter === filter.id ? 'active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Category Tabs */}
        <div className="cm-category-scroll">
          {CATEGORIES.map((cat) => {
            const count = cat.id === 'all'
              ? MENU_ITEMS.length
              : MENU_ITEMS.filter((i) => i.category === cat.id).length;

            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`cm-category-btn ${isSelected ? 'active' : ''}`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span style={{
                  fontSize: '10px',
                  padding: '2px 6px',
                  borderRadius: '20px',
                  background: isSelected ? 'rgba(255,255,255,0.25)' : '#ebdcd3',
                  color: isSelected ? '#ffffff' : '#55443d'
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: '#6e584f', letterSpacing: '1px' }}>
            Showing <span style={{ color: '#d63031', fontWeight: 900 }}>{filteredItems.length}</span> menu items
          </div>
          {(selectedCategory !== 'all' || dietaryFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#d63031',
                background: 'none',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Food Items Grid (Purely Informative, No Order Buttons) */}
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '20px', border: '1px solid #ebdcd3' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#140905' }}>No dishes found</h3>
            <p style={{ fontSize: '13px', color: '#6e584f', marginTop: '6px' }}>Try searching another keyword or reset the category filter.</p>
          </div>
        ) : (
          <div className="cm-food-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="cm-food-card">
                {/* Food Image */}
                <div className="cm-card-media">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="cm-card-img"
                    onError={(e) => {
                      e.target.src = '/image.png';
                    }}
                  />
                  {/* Top Badges (No prices, no veg/non-veg dots) */}
                  {item.tag && (
                    <div className="cm-badge-row-top">
                      <span className="cm-tag-pill">{item.tag}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="cm-card-content">
                  <div>
                    <div className="cm-item-category">{item.categoryLabel}</div>
                    <h3 className="cm-item-name">{item.name}</h3>
                    <p className="cm-item-desc">{item.description}</p>
                  </div>

                  {/* Informative Footer */}
                  <div className="cm-card-footer">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#d63031' }}>
                      <Sparkles size={13} color="#ffb703" />
                      <span>{item.isSpecial ? 'Chef Signature' : 'Fresh Daily'}</span>
                    </span>
                    <span style={{ color: '#8c7b74', textTransform: 'uppercase' }}>
                      {item.isSpicy ? '🌶️ Spicy' : 'Mild Flavor'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// ==================== ABOUT US SECTION ====================
const About = () => (
  <section id="about" className="cm-about-section">
    <div className="cm-container cm-about-grid">
      <div className="cm-about-text">
        <span className="cm-section-pill" style={{ color: '#d63031', background: '#fde8e8', borderColor: '#f8b4b4' }}>
          Established Excellence & Tradition
        </span>
        <h2 className="cm-section-title" style={{ color: '#140905', textAlign: 'left' }}>
          Redefining the <br />
          <span style={{ color: '#d63031' }}>Chaw Momos Legacy</span>
        </h2>
        <p style={{ fontSize: '16px', color: '#55443d', lineHeight: 1.7, marginBottom: '16px' }}>
          Founded in Punjab in 2025 by <strong>Rajesh Dahiya, Dinesh, Harpreet Singh, and Rekha Bhardwaj</strong>, Chaw Momos started with a singular vision: to honor authentic Himalayan steam traditions while boldly fusing them with the rich, aromatic tadka culture of Punjab.
        </p>
        <p style={{ fontSize: '16px', color: '#55443d', lineHeight: 1.7, marginBottom: '28px' }}>
          Today, Chaw Momos has evolved far beyond an ordinary street counter—becoming a vibrant nationwide <strong>Himalayan-Punjabi Café & Quick-Bites Chain</strong> with a network target of over <strong>500+ outlets</strong> across India. From students to families, our artisanal coffees, cheesy pizzas, fiery pastas, and signature Punjabi Tadka momos bring people together.
        </p>

        <div className="cm-about-stats">
          <div className="cm-about-stat-item">
            <div className="cm-stat-icon-yellow">
              <Users size={22} />
            </div>
            <div>
              <strong className="cm-about-stat-title">500+ Outlets</strong>
              <span className="cm-about-stat-desc">Rapidly growing café network</span>
            </div>
          </div>

          <div className="cm-about-stat-item">
            <div className="cm-stat-icon-red">
              <Award size={22} />
            </div>
            <div>
              <strong className="cm-about-stat-title">Punjab Born</strong>
              <span className="cm-about-stat-desc">Authentic Himalayan & Desi Tadka</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cm-about-media">
        <img src="/about.png" alt="Chaw Momos Experience" className="cm-about-img" />
        <div className="cm-about-badge">
          <div className="cm-about-badge-year">2025–2026</div>
          <div className="cm-about-badge-text">Scaling Heights Nationwide</div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== FRANCHISE APPLICATION SECTION ====================
const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    primaryReason: 'I want to start a new business',
    investmentBudget: '₹2–3 Lakh',
    hasLocation: 'Yes, I have a location',
    timeline: 'Within 1 month',
    fnbExperience: 'No',
    name: '',
    contactNumber: '',
    email: '',
    city: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting application and opening WhatsApp (+91 97805 24008)...');

    // Automatically send details to official WhatsApp (+91 97805 24008)
    handleWhatsAppFranchise();

    try {
      if (API_BASE_URL) {
        await axios.post(`${API_BASE_URL}/api/franchise`, formData);
      }
      setSubmitted(true);
      setStatus('');
    } catch (err) {
      setSubmitted(true);
      setStatus('');
    }
  };

  const handleWhatsAppFranchise = () => {
    let msg = `🤝 *FRANCHISE INQUIRY - CHAW MOMOS*\n\n`;
    msg += `📞 *APPLICANT CONTACT DETAILS*:\n`;
    msg += `• Name: ${formData.name || 'Interested Partner'}\n`;
    msg += `• Phone: ${formData.contactNumber || 'N/A'}\n`;
    msg += `• Email: ${formData.email || 'N/A'}\n`;
    msg += `• City: ${formData.city || 'N/A'}\n\n`;
    msg += `📋 *QUALIFICATION ANSWERS*:\n`;
    msg += `1. Primary Reason: ${formData.primaryReason}\n`;
    msg += `2. Investment Budget: ${formData.investmentBudget}\n`;
    msg += `3. Commercial Location: ${formData.hasLocation}\n`;
    msg += `4. Start Timeline: ${formData.timeline}\n`;
    msg += `5. Prior F&B Business: ${formData.fnbExperience}\n\n`;
    msg += `🌐 *Sent from Chaw Momos Official Website*`;
    window.open(`https://api.whatsapp.com/send?phone=919780524008&text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="franchise" className="cm-franchise-section">
      <div className="cm-container cm-franchise-grid">
        <div className="cm-franchise-info">
          <span className="cm-section-pill">Franchise Partnership 2026</span>
          <h2 className="cm-section-title" style={{ textAlign: 'left' }}>
            Build Your Food Empire With <span style={{ color: '#ffb703' }}>Chaw Momos</span>
          </h2>
          <p className="cm-section-desc" style={{ marginBottom: '32px' }}>
            Become a franchise partner of India's fastest-growing Himalayan-Punjabi café and quick-bites restaurant. High return on investment, full culinary training, and complete store setup support.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {[
              { icon: <TrendingUp size={20} />, title: 'High-Profit Margins', desc: 'Proven business model with morning-to-night versatile 75+ menu.' },
              { icon: <Users size={20} />, title: 'Youth & Family Favorite', desc: 'Attracts students, youth, and families with affordable café ambiance.' },
              { icon: <Award size={20} />, title: 'Complete Turnkey Setup', desc: 'Store design, equipment sourcing, chef training, and supply chain.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '14px', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#ffb703' }}>{item.icon}</div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: '#fff' }}>{item.title}</strong>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)', padding: '16px 20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#ffb703', fontWeight: 800, textTransform: 'uppercase' }}>Franchise Desk</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>Instant WhatsApp Support</div>
            </div>
            <button
              onClick={handleWhatsAppFranchise}
              style={{
                background: '#16a34a',
                color: '#fff',
                border: 'none',
                padding: '10px 18px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Application Form */}
        <div className="cm-franchise-form-wrap">
          <h3 className="cm-form-title">Franchise Application</h3>
          <p className="cm-form-sub">Answer these brief qualification questions to receive our official franchise prospectus.</p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 16px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{ fontSize: '50px', marginBottom: '16px' }}>🥟</div>
              <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#140905', marginBottom: '12px' }}>
                Thank you for your interest in Chaw Momos!
              </h3>
              <p style={{ fontSize: '14px', color: '#55443d', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto 24px' }}>
                Our franchise team will review your details and contact you to discuss the opportunity, investment, and next steps.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={handleWhatsAppFranchise}
                  style={{
                    background: '#16a34a',
                    color: '#ffffff',
                    border: 'none',
                    padding: '13px 26px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 15px rgba(22, 163, 74, 0.35)'
                  }}
                >
                  <span>Chat on WhatsApp Directly →</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      primaryReason: 'I want to start a new business',
                      investmentBudget: '₹2–3 Lakh',
                      hasLocation: 'Yes, I have a location',
                      timeline: 'Within 1 month',
                      fnbExperience: 'No',
                      name: '',
                      contactNumber: '',
                      email: '',
                      city: '',
                    });
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#6e584f',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginTop: '6px',
                    textDecoration: 'underline'
                  }}
                >
                  Submit another application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Question 1 */}
              <div className="cm-form-group">
                <label className="cm-form-label">
                  1. What is your primary reason for exploring a Chaw Momos franchise? *
                </label>
                <select
                  name="primaryReason"
                  value={formData.primaryReason}
                  onChange={handleChange}
                  className="cm-form-input"
                  required
                >
                  <option value="I want to start a new business">I want to start a new business</option>
                  <option value="I want to expand my existing food business">I want to expand my existing food business</option>
                  <option value="I’m looking for an investment opportunity">I’m looking for an investment opportunity</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              {/* Question 2 */}
              <div className="cm-form-group">
                <label className="cm-form-label">
                  2. What is your estimated investment budget? *
                </label>
                <select
                  name="investmentBudget"
                  value={formData.investmentBudget}
                  onChange={handleChange}
                  className="cm-form-input"
                  required
                >
                  <option value="₹2–3 Lakh">₹2–3 Lakh (Kiosk / Quick-Counter)</option>
                  <option value="₹3–4 Lakh">₹3–4 Lakh (Compact Takeaway & Delivery)</option>
                  <option value="₹4–6 Lakh">₹4–6 Lakh (Full Momo Café & Quick Bites)</option>
                  <option value="₹6 Lakh+">₹6 Lakh+ (Flagship Dine-In Model)</option>
                </select>
              </div>

              {/* Question 3 & 4 (Grid 2) */}
              <div className="cm-form-grid-2">
                <div>
                  <label className="cm-form-label">
                    3. Do you already have a commercial location? *
                  </label>
                  <select
                    name="hasLocation"
                    value={formData.hasLocation}
                    onChange={handleChange}
                    className="cm-form-input"
                    required
                  >
                    <option value="Yes, I have a location">Yes, I have a location</option>
                    <option value="No, I need help finding a location">No, I need help finding a location</option>
                    <option value="I’m currently searching">I’m currently searching</option>
                  </select>
                </div>

                <div>
                  <label className="cm-form-label">
                    4. When are you planning to start? *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="cm-form-input"
                    required
                  >
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Question 5 */}
              <div className="cm-form-group">
                <label className="cm-form-label">
                  5. Have you previously operated a food/F&B business? *
                </label>
                <select
                  name="fnbExperience"
                  value={formData.fnbExperience}
                  onChange={handleChange}
                  className="cm-form-input"
                  required
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>

              {/* Contact Details Header */}
              <div style={{ marginTop: '20px', marginBottom: '12px', borderTop: '1px solid #ebdcd3', paddingTop: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#d63031', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  📞 Contact Details
                </span>
              </div>

              <div className="cm-form-grid-2">
                <div>
                  <label className="cm-form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="cm-form-input"
                  />
                </div>
                <div>
                  <label className="cm-form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="cm-form-input"
                  />
                </div>
              </div>

              <div className="cm-form-grid-2">
                <div>
                  <label className="cm-form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="cm-form-input"
                  />
                </div>
                <div>
                  <label className="cm-form-label">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Your City"
                    value={formData.city}
                    onChange={handleChange}
                    className="cm-form-input"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="cm-submit-btn"
                style={{
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Submit Application & Open WhatsApp (+91 97805 24008) 🥟</span>
              </button>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#16a34a', fontWeight: 700, marginTop: '8px' }}>
                ⚡ Submitting opens WhatsApp directly with our Franchise Director at +91 97805 24008
              </div>

              <p style={{ textAlign: 'center', fontSize: '11px', color: '#9ca3af', lineHeight: 1.5, marginTop: '12px' }}>
                By submitting this application, you agree to our{' '}
                <Link to="/privacy-policy" style={{ color: '#ffb703', textDecoration: 'underline', fontWeight: 700 }}>
                  Privacy Policy
                </Link>{' '}
                and consent to receive communication via Call, SMS, WhatsApp, or Email regarding franchise opportunities.
              </p>

              {status && (
                <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: 800, marginTop: '12px', color: '#d97706' }}>
                  {status}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION ====================
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending message to WhatsApp (+91 97805 24008)...');

    // Automatically send contact message to official WhatsApp (+91 97805 24008)
    let msg = `💬 *STORE & CORPORATE MESSAGE - CHAW MOMOS*\n\n`;
    msg += `• Name: ${formData.name || 'N/A'}\n`;
    msg += `• Email: ${formData.email || 'N/A'}\n`;
    msg += `• Subject: ${formData.subject || 'General Inquiry'}\n`;
    msg += `• Message: ${formData.message || 'N/A'}\n\n`;
    msg += `🌐 *Sent from Chaw Momos Official Website*`;
    window.open(`https://api.whatsapp.com/send?phone=919780524008&text=${encodeURIComponent(msg)}`, '_blank');

    try {
      if (API_BASE_URL) {
        await axios.post(`${API_BASE_URL}/api/contact`, formData);
      }
      setStatus('Message opened in WhatsApp (+91 97805 24008)! We will respond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Message opened in WhatsApp (+91 97805 24008)! We will respond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="cm-contact-section">
      <div className="cm-container cm-contact-grid">
        <div className="cm-contact-info">
          <span className="cm-section-pill">Connect With Us</span>
          <h2 className="cm-section-title" style={{ textAlign: 'left' }}>
            Store & Corporate <span style={{ color: '#ffb703' }}>Inquiries</span>
          </h2>
          <p className="cm-section-desc" style={{ marginBottom: '28px' }}>
            Have questions regarding our café menu, catering, or want to visit our headquarters? Reach out to our team.
          </p>

          <div className="cm-contact-card">
            <div className="cm-contact-icon"><Phone size={20} /></div>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase' }}>Phone & WhatsApp</div>
              <a href="https://api.whatsapp.com/send?phone=919780524008" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', color: '#ffffff', fontWeight: 700, textDecoration: 'none' }}>
                +91 97805 24008
              </a>
            </div>
          </div>

          <div className="cm-contact-card">
            <div className="cm-contact-icon"><Mail size={20} /></div>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase' }}>Official Email</div>
              <strong style={{ fontSize: '15px' }}>academyqsr@gmail.com</strong>
            </div>
          </div>

          <div className="cm-contact-card">
            <div className="cm-contact-icon"><MapPin size={20} /></div>
            <div>
              <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 700, textTransform: 'uppercase' }}>Location</div>
              <strong style={{ fontSize: '15px', lineHeight: 1.4, display: 'block' }}>
                Chandigarh
              </strong>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="cm-contact-form-wrap">
          <h3 className="cm-form-title">Send a Message</h3>
          <p className="cm-form-sub">We usually respond within a few hours on business days.</p>

          <form onSubmit={handleSubmit}>
            <div className="cm-form-grid-2">
              <div>
                <label className="cm-form-label">Your Name *</label>
                <input type="text" required placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="cm-form-input" />
              </div>
              <div>
                <label className="cm-form-label">Your Email *</label>
                <input type="email" required placeholder="Email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="cm-form-input" />
              </div>
            </div>

            <div className="cm-form-group">
              <label className="cm-form-label">Subject *</label>
              <input type="text" required placeholder="e.g. Catering / Menu Feedback / Business" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="cm-form-input" />
            </div>

            <div className="cm-form-group">
              <label className="cm-form-label">Message *</label>
              <textarea rows="4" required placeholder="Your message..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="cm-form-input" style={{ resize: 'none' }}></textarea>
            </div>

            <button type="submit" className="cm-submit-btn">
              Send Message
            </button>

            <p style={{ textAlign: 'center', fontSize: '11px', color: '#9ca3af', lineHeight: 1.5, marginTop: '12px' }}>
              We respect your data privacy. Read our{' '}
              <Link to="/privacy-policy" style={{ color: '#ffb703', textDecoration: 'underline', fontWeight: 700 }}>
                Privacy Policy
              </Link>.
            </p>

            {status && (
              <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: 800, marginTop: '12px', color: status.includes('Successfully') ? '#16a34a' : '#d97706' }}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER ====================
const Footer = () => {
  const location = useLocation();
  const isPrivacyPage = location.pathname.startsWith('/privacy');

  return (
    <footer className="cm-footer">
      <div className="cm-container">
        <div className="cm-footer-grid">
          <div className="cm-footer-col cm-footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img src="/logo.png" alt="Chaw Momos" style={{ height: '48px', width: '48px', borderRadius: '50%', objectFit: 'contain' }} />
              <div>
                <div style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff' }}>CHAW MOMOS</div>
                <span style={{ fontSize: '9px', fontWeight: 800, color: '#ffb703', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Himalayan Taste • Punjabi Tadka • Café & Quick Bites
                </span>
              </div>
            </div>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af' }}>
              India's ultimate destination for handcrafted mountain momos, traditional Thukpa, fiery Punjabi tadka delights, barista coffees, and quick bites.
            </p>
          </div>

          <div className="cm-footer-col">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '1px', marginBottom: '14px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <li><a href={isPrivacyPage ? "/#home" : "#home"} style={{ color: '#9ca3af' }}>Home</a></li>
              <li><a href={isPrivacyPage ? "/#brand-story" : "#brand-story"} style={{ color: '#9ca3af' }}>Brand Story</a></li>
              <li><a href={isPrivacyPage ? "/#menu" : "#menu"} style={{ color: '#9ca3af' }}>Menu (75+ Items)</a></li>
              <li><a href={isPrivacyPage ? "/#about" : "#about"} style={{ color: '#9ca3af' }}>About Founders</a></li>
              <li><a href={isPrivacyPage ? "/#franchise" : "#franchise"} style={{ color: '#9ca3af' }}>Franchise</a></li>
              <li><a href={isPrivacyPage ? "/#contact" : "#contact"} style={{ color: '#9ca3af' }}>Contact</a></li>
              <li>
                <Link to="/privacy-policy" style={{ color: '#ffb703', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  Privacy Policy ↗
                </Link>
              </li>
            </ul>
          </div>

          <div className="cm-footer-col">
            <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '1px', marginBottom: '14px' }}>Location & Contact</h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af', marginBottom: '10px' }}>
              Chandigarh
            </p>
            <div style={{ fontSize: '13px', color: '#ffb703', fontWeight: 700, marginBottom: '6px' }}>
              <a href="mailto:academyqsr@gmail.com" style={{ color: '#ffb703' }}>academyqsr@gmail.com</a>
            </div>
            <div style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 600 }}>
              <a href="tel:+919780524008" style={{ color: '#9ca3af' }}>+91 97805 24008</a>
            </div>
          </div>
        </div>

        <div className="cm-footer-bottom">
          <div>&copy; {new Date().getFullYear()} Chaw Momos Franchise & Café. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span>Himalayan Taste • Punjabi Tadka • Café & Quick Bites</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <Link to="/privacy-policy" style={{ color: '#ffb703', textDecoration: 'underline', fontWeight: 700 }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==================== HOME PAGE ====================
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  const handleSelectCategoryFromBanner = (categoryId) => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <BrandStory onSelectCategory={handleSelectCategoryFromBanner} />
      <MenuSection />
      <About />
      <FranchiseForm />
      <Contact />
    </>
  );
};

// Helper: Scroll to top on pathname changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ==================== ROOT APP ====================
function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
