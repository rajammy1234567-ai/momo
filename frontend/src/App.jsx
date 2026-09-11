import React, { useState, useMemo, useRef } from 'react';
import axios from 'axios';
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
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
  List,
  Grid,
  Phone,
  ShieldCheck,
  Clock,
  ExternalLink,
  Download,
  Maximize2,
  Image as ImageIcon
} from 'lucide-react';

import { CATEGORIES, MENU_ITEMS, RATE_LIST_SECTIONS } from './data/menuData';

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

// ==================== NAVBAR ====================
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Brand Story', href: '#brand-story' },
    { name: 'Menu & Rates', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="cm-navbar">
        <div className="cm-container cm-navbar-inner">
          {/* Logo & Brand Identity */}
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

          {/* Desktop Navigation Links */}
          <nav className="cm-nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="cm-nav-link">
                {link.name}
              </a>
            ))}

            <a href="#menu" className="cm-nav-btn">
              Explore Menu & Rates <ChevronRight size={14} />
            </a>
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
            <div className="cm-drawer-top-part">
              <div className="cm-drawer-header">
                <div className="cm-brand-logo-wrap">
                  <img
                    src="/logo.png"
                    alt="Chaw Momos Logo"
                    className="cm-brand-logo-img"
                    style={{ height: '36px' }}
                  />
                  <div>
                    <div className="cm-brand-title" style={{ fontSize: '18px' }}>CHAW MOMOS</div>
                    <span className="cm-brand-tagline" style={{ fontSize: '9px' }}>Himalayan • Punjabi • Café</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="cm-drawer-close-btn"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="cm-drawer-divider" />

              <nav className="cm-drawer-nav">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="cm-drawer-link"
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={16} />
                  </a>
                ))}
              </nav>
            </div>

            <div className="cm-drawer-footer">
              <a
                href="#menu"
                onClick={() => setIsMenuOpen(false)}
                className="cm-drawer-cta-btn"
              >
                📋 View 48+ Items & Rates
              </a>

              <a
                href="tel:9780524008"
                className="cm-drawer-phone-btn"
              >
                <Phone size={15} /> Call Hotline: +91 9780524008
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=919780524008&text=Hello%20Chaow%20Momo!%20I%20would%20like%20to%20inquire%20about%20the%20menu%20and%20takeaway."
                target="_blank"
                rel="noreferrer"
                className="cm-drawer-whatsapp-btn"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
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
          Not just a momo stall—India's premier fusion destination. Relish authentic Himalayan hand-folded momos with sizzling Punjabi Tadka, artisan thin-crust pizzas, barista coffees, and refreshing coolers.
        </p>

        <div className="cm-hero-actions">
          <a href="#menu" className="cm-btn-gold">
            View Menu & Rates (48+ Items) <ChevronRight size={16} />
          </a>
          <a href="#franchise" className="cm-btn-outline">
            Franchise Partnership
          </a>
        </div>

        {/* Brand Highlights */}
        <div className="cm-hero-stats">
          <div>
            <div className="cm-stat-number">7</div>
            <div className="cm-stat-label">Categories</div>
          </div>
          <div>
            <div className="cm-stat-number">70+</div>
            <div className="cm-stat-label">Fresh Variants</div>
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
      desc: "Authentic steamed, kurkure & fried momos folded with Himalayan herbs, ginger zest, and served with fiery red chutney.",
      categoryId: "momos"
    },
    {
      icon: <Flame size={26} />,
      title: "Punjabi Tadka",
      badge: "Desi Dhaba Twist",
      desc: "Sizzling desi ghee tadka, Amritsari ajwaini marinations, tandoori char-grilling, and achari spices for an explosive North-Indian punch.",
      categoryId: "momos"
    },
    {
      icon: <Coffee size={26} />,
      title: "Café & Coolers",
      badge: "Handcrafted Brews",
      desc: "Rich espresso roasts, thick hazelnut & oreo cold coffees, authentic kadak ginger chai, saffron Kashmiri Kahwa, and fizzy mojitos.",
      categoryId: "beverages"
    },
    {
      icon: <Utensils size={26} />,
      title: "Quick Bites",
      badge: "Crispy & Cheesy",
      desc: "Stone-baked crispy pizzas, cheesy loaded burgers, fiery arrabbiata & alfredo pastas, and street-style buttery tadka Maggi.",
      categoryId: "burgers"
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

// ==================== INFORMATIVE FOOD CARD COMPONENT ====================
const FoodCard = ({ item }) => {
  return (
    <div className="cm-food-card">
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
        {/* Top Badges */}
        <div className="cm-badge-row-top">
          <span
            className={item.isVeg ? 'cm-veg-dot' : 'cm-nonveg-dot'}
            title={item.isVeg ? 'Pure Veg' : 'Non-Veg'}
          />
          {item.tag && <span className="cm-tag-pill">{item.tag}</span>}
        </div>
        {item.portion && (
          <span className="cm-price-pill" style={{ fontSize: '11px', fontWeight: 800 }}>
            {item.portion}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="cm-card-content">
        <div>
          <div className="cm-item-category">{item.categoryLabel}</div>
          <h3 className="cm-item-name">{item.name}</h3>
          <p className="cm-item-desc">{item.description}</p>

          {/* Culinary Specifications */}
          <div className="cm-card-culinary-info">
            {item.spiceLevel && (
              <div className="cm-culinary-row">
                <span className="cm-culinary-label">Flavor:</span>
                <span>{item.spiceLevel}</span>
              </div>
            )}
            {item.servedWith && (
              <div className="cm-culinary-row">
                <span className="cm-culinary-label">Served With:</span>
                <span>{item.servedWith}</span>
              </div>
            )}
          </div>
        </div>

        {/* Clear Side-by-Side Rates Display */}
        <div className="cm-card-rates-container">
          <div className="cm-card-rates-header">
            {item.hasVariants ? 'Official Variety Rates (₹):' : 'Official Rate:'}
          </div>

          {item.hasVariants && item.variants ? (
            <div className="cm-card-rates-row">
              {item.variants.map((v) => (
                <div
                  key={v.type}
                  className={`cm-card-rate-pill ${v.type.toLowerCase()}`}
                >
                  <span className="cm-card-rate-type">
                    <span className={`cm-diet-dot ${v.isVeg ? 'veg' : 'non-veg'}`} style={{ marginTop: 0 }} />
                    {v.type}
                  </span>
                  <span className="cm-card-rate-price">₹{v.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="cm-card-single-rate-box">
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#6e584f', textTransform: 'uppercase' }}>
                Standard Portion Rate
              </span>
              <span className="cm-single-rate-val">₹{item.price}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== RESTAURANT RATE LIST VIEW COMPONENT ====================
const RateListView = ({ sections, searchQuery, onOpenPosterModal }) => {
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.map((sec) => {
      const matchingItems = sec.items.filter((item) =>
        item.name.toLowerCase().includes(q) ||
        sec.title.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q)) ||
        (item.tag && item.tag.toLowerCase().includes(q))
      );
      return { ...sec, items: matchingItems };
    }).filter((sec) => sec.items.length > 0);
  }, [sections, searchQuery]);

  if (filteredSections.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '20px', border: '1px solid #ebdcd3' }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#140905' }}>No items match your search</h3>
        <p style={{ fontSize: '13px', color: '#6e584f', marginTop: '6px' }}>Try searching another keyword like Momos, Coffee, Burger or Maggi.</p>
      </div>
    );
  }

  return (
    <div className="cm-rate-list-view">
      {/* Category Quick Jump Bar */}
      <div className="cm-rate-quick-nav">
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#rate-sec-${sec.id}`}
            className="cm-rate-nav-btn"
          >
            {sec.title}
          </a>
        ))}
      </div>

      {filteredSections.map((sec) => (
        <div key={sec.id} id={`rate-sec-${sec.id}`} className="cm-rate-card-block">
          {/* Category Header */}
          <div className="cm-rate-card-header">
            <div className="cm-rate-header-title">
              <span>{sec.title}</span>
              <span className="cm-rate-header-sub">• {sec.subtitle}</span>
            </div>
            <span style={{ fontSize: '11px', color: '#ffb703', fontWeight: 800 }}>
              {sec.items.length} Varieties
            </span>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="cm-table-mobile-hint">
            <span>👉 Swipe table sideways to see all portions & rates 👈</span>
          </div>

          {/* Table */}
          <div className="cm-rate-table-wrap">
            <table className="cm-rate-table">
              <thead>
                <tr>
                  {sec.columns.map((col, idx) => (
                    <th
                      key={col}
                      style={{ textAlign: idx === 0 ? 'left' : 'center' }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sec.items.map((row) => {
                  if (sec.type === 'multi-variant-3') {
                    // Momos: Veg | Paneer | Chicken
                    return (
                      <tr key={row.name}>
                        <td>
                          <div className="cm-rate-item-cell">
                            <span style={{ fontSize: '18px' }}>🥟</span>
                            <div>
                              <span style={{ display: 'block', fontWeight: 800 }}>{row.name}</span>
                              {row.tag && <span className="cm-rate-item-tag">{row.tag}</span>}
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill veg">
                            ₹{row.veg}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill paneer">
                            ₹{row.paneer}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill chicken">
                            ₹{row.chicken}
                          </span>
                        </td>
                      </tr>
                    );
                  } else if (sec.type === 'multi-variant-2') {
                    // Pizza, Pasta, Maggi: Veg | Chicken
                    return (
                      <tr key={row.name}>
                        <td>
                          <div className="cm-rate-item-cell">
                            <div>
                              <span style={{ display: 'block', fontWeight: 800 }}>{row.name}</span>
                              {row.tag && <span className="cm-rate-item-tag">{row.tag}</span>}
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill veg">
                            ₹{row.veg}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill chicken">
                            ₹{row.chicken}
                          </span>
                        </td>
                      </tr>
                    );
                  } else {
                    // Burgers, Quick Bites, Beverages
                    const isVeg = row.isVeg ?? true;
                    const typeLabel = row.subCategory || (isVeg ? 'Pure Veg' : 'Non-Veg');
                    return (
                      <tr key={row.name}>
                        <td>
                          <div className="cm-rate-item-cell">
                            <span className={`cm-diet-dot ${isVeg ? 'veg' : 'non-veg'}`} style={{ marginTop: 0 }} />
                            <div>
                              <span style={{ display: 'block', fontWeight: 800 }}>{row.name}</span>
                              {row.tag && <span className="cm-rate-item-tag">{row.tag}</span>}
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#6e584f' }}>
                          <span style={{
                            display: 'inline-block',
                            padding: '3px 8px',
                            borderRadius: '50px',
                            background: isVeg ? '#f0fdf4' : '#fef2f2',
                            color: isVeg ? '#16a34a' : '#dc2626',
                            border: `1px solid ${isVeg ? '#86efac' : '#fca5a5'}`
                          }}>
                            {typeLabel}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className="cm-table-rate-pill neutral">
                            ₹{row.price}
                          </span>
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Informative Rate Card Summary Banner */}
      <div className="cm-rate-card-notice-banner">
        <div className="cm-notice-left">
          <span style={{ fontSize: '24px' }}>📜</span>
          <div>
            <div className="cm-notice-title">Official Chaow Momo Dining & Takeaway Catalogue</div>
            <div className="cm-notice-sub">
              All prices in INR (₹) inclusive of taxes • Prepared fresh to order with authentic mountain herbs & zero preservatives.
            </div>
          </div>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=919780524008&text=Hello%20Chaow%20Momo!%20I%20would%20like%20to%20inquire%20about%20the%20menu%20and%20takeaway."
          target="_blank"
          rel="noopener noreferrer"
          className="cm-notice-btn"
        >
          <Phone size={14} /> Store Hotline (+91 9780524008)
        </a>
      </div>

      {/* Poster Callout Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #140905, #220e06)',
        color: '#ffffff',
        borderRadius: '20px',
        padding: '20px 24px',
        marginTop: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        border: '1.5px solid rgba(255, 183, 3, 0.35)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="/menu_poster.jpg"
            alt="Mini Poster Preview"
            style={{ width: '56px', height: '74px', objectFit: 'cover', borderRadius: '8px', border: '1.5px solid #ffb703', cursor: 'pointer' }}
            onClick={onOpenPosterModal}
          />
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>
              Official Restaurant Wall Menu Poster
            </h4>
            <p style={{ fontSize: '13px', color: '#d1d5db', lineHeight: 1.4 }}>
              View our complete laminated dining poster with food photography and all 7 categories.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenPosterModal}
          style={{
            background: '#ffb703',
            color: '#140905',
            padding: '10px 22px',
            borderRadius: '50px',
            fontWeight: 900,
            fontSize: '12px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Maximize2 size={14} /> View Menu Poster ➔
        </button>
      </div>
    </div>
  );
};

// ==================== OFFICIAL MENU POSTER SHOWCASE ====================
const MenuPosterShowcase = ({ onOpenModal }) => {
  return (
    <div className="cm-poster-showcase-wrap">
      {/* Left Framed Poster with glow */}
      <div
        className="cm-poster-frame-container"
        onClick={onOpenModal}
        title="Click to view full size poster"
      >
        <img
          src="/menu_poster.jpg"
          alt="Chaw Momos Official Menu Poster"
          className="cm-poster-img"
        />
        <div className="cm-poster-hover-hint">
          <Maximize2 size={14} /> Click to Zoom Fullscreen
        </div>
      </div>

      {/* Right Column: Information & Details */}
      <div className="cm-poster-info-col">
        <span className="cm-poster-badge">
          <Sparkles size={12} /> Official Restaurant Wall Poster
        </span>

        <h3 className="cm-poster-title">
          Chaw Momos Official <br />
          <span style={{ color: '#d63031' }}>Dine-In Menu Poster</span>
        </h3>

        <p className="cm-poster-desc">
          Displayed across all Chaw Momos franchise outlets & dining spaces throughout Punjab and Chandigarh. Highlighting our complete culinary spectrum—authentic Himalayan hand-folded momos, signature Punjabi tadka creations, stone-baked thin crust pizzas, and barista beverages.
        </p>

        {/* Feature Highlights Grid */}
        <div className="cm-poster-highlights-list">
          <div className="cm-poster-highlight-item">
            <span>🥟</span>
            <div>11 Momos Varieties</div>
          </div>
          <div className="cm-poster-highlight-item">
            <span>🍕</span>
            <div>Stone-Baked Pizzas</div>
          </div>
          <div className="cm-poster-highlight-item">
            <span>🍔</span>
            <div>Crispy Loaded Burgers</div>
          </div>
          <div className="cm-poster-highlight-item">
            <span>🥤</span>
            <div>Barista Coolers & Chai</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="cm-poster-actions">
          <button
            type="button"
            onClick={onOpenModal}
            className="cm-poster-btn-primary"
          >
            <Maximize2 size={16} /> View Fullscreen Poster
          </button>

          <a
            href="/menu_poster.jpg"
            download="Chaw_Momos_Official_Menu_Poster.jpg"
            className="cm-poster-btn-secondary"
          >
            <Download size={16} /> Download HD Poster
          </a>
        </div>
      </div>
    </div>
  );
};

// ==================== INFORMATIVE MENU SECTION ====================
const MenuSection = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' (Rate List Table), 'grid' (Showcase Cards), or 'poster' (Wall Poster)
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);
  const [dishLayout, setDishLayout] = useState('slider'); // 'slider' (Horizontal Sliding Carousel) or 'grid' (Multi-Column Grid)

  const categoryScrollRef = useRef(null);
  const foodSliderRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollFoodSlider = (direction) => {
    if (foodSliderRef.current) {
      const cardWidth = foodSliderRef.current.offsetWidth > 768 ? 360 : 300;
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      foodSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'nonveg' && item.isVeg && !item.hasVariants) return false;
      if (dietaryFilter === 'paneer' && !item.name.toLowerCase().includes('paneer') && !item.hasVariants) return false;
      if (dietaryFilter === 'special' && !item.isSpecial) return false;

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q);
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
        <div className="cm-section-header" style={{ marginBottom: '28px' }}>
          <span className="cm-section-pill" style={{ color: '#d63031', background: '#fde8e8', borderColor: '#f8b4b4' }}>
            Official Restaurant Menu & Rate Card • 7 Categories
          </span>
          <h2 className="cm-section-title" style={{ color: '#140905' }}>
            Our Complete <span style={{ color: '#d63031' }}>Menu & Official Rates</span>
          </h2>
          <p className="cm-section-desc" style={{ color: '#6e584f' }}>
            Explore our handcrafted Himalayan dumplings with 3 variants (Veg, Paneer & Chicken), artisanal stone-baked pizzas, gourmet pastas, street style buttery Maggi, barista coffees, and refreshing coolers with complete pricing and culinary specifications.
          </p>
        </div>

        {/* Quality Standards & Information Grid */}
        <div className="cm-menu-quality-grid">
          <div className="cm-quality-card">
            <div className="cm-quality-icon-box">🥟</div>
            <div>
              <div className="cm-quality-title">Hand-Folded Daily</div>
              <div className="cm-quality-sub">Thin dough wrapper, juicy filling</div>
            </div>
          </div>

          <div className="cm-quality-card">
            <div className="cm-quality-icon-box">🏔️</div>
            <div>
              <div className="cm-quality-title">Mountain Timbur Herbs</div>
              <div className="cm-quality-sub">Sourced wild high-altitude spices</div>
            </div>
          </div>

          <div className="cm-quality-card">
            <div className="cm-quality-icon-box">🧈</div>
            <div>
              <div className="cm-quality-title">Desi Ghee Tadka</div>
              <div className="cm-quality-sub">Pure butter & kasuri methi sizzling</div>
            </div>
          </div>

          <div className="cm-quality-card">
            <div className="cm-quality-icon-box">📞</div>
            <div>
              <div className="cm-quality-title">Chandigarh Hotline</div>
              <div className="cm-quality-sub">Inquiries: +91 9780524008</div>
            </div>
          </div>
        </div>

        {/* View Switcher Toggle & Results Count */}
        <div className="cm-view-mode-bar">
          <div className="cm-view-mode-toggle">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`cm-view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
            >
              <List size={16} />
              <span>📋 Official Rate List Table</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`cm-view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
            >
              <Grid size={16} />
              <span>🎴 Visual Dish Showcase Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('poster')}
              className={`cm-view-mode-btn ${viewMode === 'poster' ? 'active' : ''}`}
            >
              <ImageIcon size={16} />
              <span>🖼️ Official Menu Poster</span>
            </button>
          </div>

          <div style={{ fontSize: '13px', fontWeight: 800, color: '#6e584f' }}>
            {viewMode === 'poster' ? (
              <span style={{ color: '#d63031' }}>Official Wall Menu Poster</span>
            ) : viewMode === 'list' ? (
              <span>Showing <strong style={{ color: '#d63031' }}>48+ Items & 70+ Variants</strong></span>
            ) : (
              <span>Showing <strong style={{ color: '#d63031' }}>{filteredItems.length} Dishes</strong></span>
            )}
          </div>
        </div>

        {/* Mode Specific Controls & Views */}
        {viewMode === 'poster' ? (
          /* VIEW 3: OFFICIAL MENU POSTER SHOWCASE */
          <MenuPosterShowcase onOpenModal={() => setIsPosterModalOpen(true)} />
        ) : (
          <>
            {/* Controls: Search & Dietary Filters */}
            <div className="cm-menu-controls">
              <div className="cm-search-wrap">
                <Search size={18} className="cm-search-icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search momos, pasta, burgers, coffee, mojito..."
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
                  { id: 'veg', label: 'Pure Veg 🟢' },
                  { id: 'nonveg', label: 'Chicken / Non-Veg 🔴' },
                  { id: 'paneer', label: 'Paneer 🟡' },
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

            {/* Category Tabs Slider with Sliding Controls */}
            <div className="cm-category-slider-wrapper">
              <button
                type="button"
                className="cm-slider-nav-btn prev"
                onClick={() => scrollCategories('left')}
                aria-label="Slide categories left"
                title="Previous categories"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="cm-category-scroll" ref={categoryScrollRef}>
                {CATEGORIES.map((cat) => {
                  const count = cat.id === 'all'
                    ? MENU_ITEMS.length
                    : MENU_ITEMS.filter((i) => i.category === cat.id).length;

                  const isSelected = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        if (viewMode === 'list' && cat.id !== 'all') {
                          const el = document.getElementById(`rate-sec-${cat.id}`);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
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

              <button
                type="button"
                className="cm-slider-nav-btn next"
                onClick={() => scrollCategories('right')}
                aria-label="Slide categories right"
                title="Next categories"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* VIEW 1: AUTHENTIC RESTAURANT RATE LIST TABLE */}
            {viewMode === 'list' ? (
              <RateListView
                sections={RATE_LIST_SECTIONS}
                searchQuery={searchQuery}
                onOpenPosterModal={() => setIsPosterModalOpen(true)}
              />
            ) : (
              /* VIEW 2: VISUAL DISH SHOWCASE CARDS (WITH SLIDING CAROUSEL OPTION) */
              filteredItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '20px', border: '1px solid #ebdcd3' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#140905' }}>No dishes found</h3>
                  <p style={{ fontSize: '13px', color: '#6e584f', marginTop: '6px' }}>Try searching another keyword or reset the filters.</p>
                </div>
              ) : (
                <div className="cm-food-carousel-wrapper">
                  {/* Slider Controls Header */}
                  <div className="cm-food-carousel-header">
                    <div className="cm-food-carousel-hint">
                      <span>✨ Sliding Dish Carousel ({filteredItems.length} items)</span>
                      <span style={{ fontSize: '11px', color: '#6e584f', fontWeight: 600 }}>
                        • Swipe or use arrows to slide dishes ↔
                      </span>
                    </div>

                    <div className="cm-food-carousel-controls">
                      {/* Toggle between Slider & Grid */}
                      <div className="cm-dish-layout-toggle">
                        <button
                          type="button"
                          onClick={() => setDishLayout('slider')}
                          className={`cm-dish-layout-btn ${dishLayout === 'slider' ? 'active' : ''}`}
                          title="Sliding Carousel View"
                        >
                          ↔ Slider
                        </button>
                        <button
                          type="button"
                          onClick={() => setDishLayout('grid')}
                          className={`cm-dish-layout-btn ${dishLayout === 'grid' ? 'active' : ''}`}
                          title="Full Grid View"
                        >
                          ☷ Grid
                        </button>
                      </div>

                      {dishLayout === 'slider' && (
                        <>
                          <button
                            type="button"
                            onClick={() => scrollFoodSlider('left')}
                            className="cm-carousel-nav-btn"
                            aria-label="Previous dishes"
                            title="Slide left"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollFoodSlider('right')}
                            className="cm-carousel-nav-btn"
                            aria-label="Next dishes"
                            title="Slide right"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {dishLayout === 'slider' ? (
                    <div className="cm-food-carousel-track" ref={foodSliderRef}>
                      {filteredItems.map((item) => (
                        <FoodCard
                          key={item.id}
                          item={item}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="cm-food-grid">
                      {filteredItems.map((item) => (
                        <FoodCard
                          key={item.id}
                          item={item}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </>
        )}
      </div>

      {/* Fullscreen Poster Zoom Modal */}
      {isPosterModalOpen && (
        <div
          className="cm-poster-modal-backdrop"
          onClick={() => setIsPosterModalOpen(false)}
        >
          <div
            className="cm-poster-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cm-poster-modal-header">
              <div className="cm-poster-modal-header-info">
                <span className="cm-poster-modal-tag">Official HD Poster</span>
                <span className="cm-poster-modal-title">Chaw Momos Dining & Wall Menu</span>
              </div>
              <button
                type="button"
                onClick={() => setIsPosterModalOpen(false)}
                className="cm-poster-modal-close-btn"
                aria-label="Close Fullscreen Poster"
              >
                <X size={18} />
              </button>
            </div>

            <div className="cm-poster-modal-img-wrap">
              <img
                src="/menu_poster.jpg"
                alt="Chaw Momos Official Menu Poster"
                className="cm-poster-modal-img"
              />
            </div>

            <div className="cm-poster-modal-bottom-bar">
              <a
                href="/menu_poster.jpg"
                download="Chaw_Momos_Official_Menu_Poster.jpg"
                className="cm-poster-btn-primary"
              >
                <Download size={16} /> Download HD Poster
              </a>
              <button
                type="button"
                onClick={() => setIsPosterModalOpen(false)}
                className="cm-poster-btn-secondary"
              >
                ✕ Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
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
    hoursPerDay: 'more-than-8-hours',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppFranchise = () => {
    let msg = `🌟 *FRANCHISE INQUIRY - CHAW MOMOS*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Applicant:* ${formData.name || 'Interested Partner'}\n`;
    msg += `📞 *Phone:* ${formData.contactNumber || 'N/A'}\n`;
    msg += `📧 *Email:* ${formData.email || 'N/A'}\n`;
    msg += `📍 *City / Pincode:* ${formData.city || 'N/A'} - ${formData.pincode || 'N/A'}\n`;
    msg += `💼 *Occupation:* ${formData.currentOccupation}\n`;
    msg += `💰 *Investment Range:* ${formData.investmentRange}\n`;
    msg += `🏢 *Proposed Space:* ${formData.propertySize || 'N/A'}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Sent from Chaw Momos Official Portal_`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://api.whatsapp.com/send?phone=919780524008&text=${encoded}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting application...');
    try {
      if (API_BASE_URL) {
        await axios.post(`${API_BASE_URL}/api/franchise`, formData);
      }
      setStatus('Application Submitted Successfully! Our corporate team will reach out within 24 hours.');
      handleWhatsAppFranchise();
    } catch (err) {
      setStatus('Application recorded! Opening WhatsApp to connect with franchise desk...');
      handleWhatsAppFranchise();
    }
  };

  return (
    <section id="franchise" className="cm-franchise-section">
      <div className="cm-container cm-franchise-grid">
        <div className="cm-franchise-text">
          <span className="cm-section-pill" style={{ color: '#ffb703', background: 'rgba(255,183,3,0.15)', borderColor: 'rgba(255,183,3,0.35)' }}>
            Franchise Partnership
          </span>
          <h2 className="cm-section-title" style={{ textAlign: 'left', color: '#fff' }}>
            Partner With India's <br />
            <span style={{ color: '#ffb703' }}>Fastest Growing</span> Momo & Café Brand
          </h2>
          <p className="cm-section-desc" style={{ color: '#d1d5db', marginBottom: '24px' }}>
            Join our 500+ outlet expansion blueprint. High profit margins, end-to-end cloud ERP, authentic chef seasonings, and barista training.
          </p>

          <div style={{ background: 'rgba(255,183,3,0.1)', border: '1px solid rgba(255,183,3,0.3)', padding: '16px 20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#ffb703', fontWeight: 800, textTransform: 'uppercase' }}>Franchise Desk</div>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>Instant WhatsApp Support</div>
            </div>
            <button
              onClick={handleWhatsAppFranchise}
              style={{ background: '#ffb703', color: '#140905', border: 'none', padding: '10px 18px', borderRadius: '50px', fontWeight: 900, fontSize: '12px', cursor: 'pointer' }}
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        <div className="cm-franchise-form-wrap">
          <h3 className="cm-form-title">Apply for Franchise</h3>
          <p className="cm-form-sub">Fill this quick interest form to receive our official franchise kit.</p>

          <form onSubmit={handleSubmit}>
            <div className="cm-form-grid-2">
              <div>
                <label className="cm-form-label">Full Name *</label>
                <input type="text" name="name" required placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="cm-form-input" />
              </div>
              <div>
                <label className="cm-form-label">Mobile Number *</label>
                <input type="tel" name="contactNumber" required placeholder="10-digit number" value={formData.contactNumber} onChange={handleInputChange} className="cm-form-input" />
              </div>
            </div>

            <div className="cm-form-grid-2">
              <div>
                <label className="cm-form-label">City *</label>
                <input type="text" name="city" required placeholder="e.g. Chandigarh" value={formData.city} onChange={handleInputChange} className="cm-form-input" />
              </div>
              <div>
                <label className="cm-form-label">Investment Budget</label>
                <select name="investmentRange" value={formData.investmentRange} onChange={handleInputChange} className="cm-form-select">
                  <option value="15-lakhs-to-25-lakhs">₹15 Lakhs - ₹25 Lakhs</option>
                  <option value="25-lakhs-to-35-lakhs">₹25 Lakhs - ₹35 Lakhs</option>
                  <option value="35-lakhs-plus">₹35 Lakhs+</option>
                </select>
              </div>
            </div>

            <button type="submit" className="cm-submit-btn" style={{ marginTop: '14px' }}>
              Submit Franchise Application
            </button>

            {status && (
              <p style={{ textAlign: 'center', fontSize: '12px', fontWeight: 800, marginTop: '12px', color: '#ffb703' }}>
                {status}
              </p>
            )}
          </form>
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
    setStatus('Sending message...');
    try {
      if (API_BASE_URL) {
        await axios.post(`${API_BASE_URL}/api/contact`, formData);
      }
      setStatus('Message Sent Successfully! We will respond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('Message noted! You can also chat directly with our store support on WhatsApp.');
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
const Footer = () => (
  <footer className="cm-footer">
    <div className="cm-container">
      <div className="cm-footer-grid">
        <div className="cm-footer-col cm-footer-brand">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img src="/logo.png" alt="Chaw Momos" style={{ height: '44px', width: 'auto' }} />
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
            <li><a href="#home" style={{ color: '#9ca3af' }}>Home</a></li>
            <li><a href="#brand-story" style={{ color: '#9ca3af' }}>Brand Story</a></li>
            <li><a href="#menu" style={{ color: '#9ca3af' }}>Menu & Rates (48+ Items)</a></li>
            <li><a href="#about" style={{ color: '#9ca3af' }}>About Founders</a></li>
            <li><a href="#franchise" style={{ color: '#9ca3af' }}>Franchise</a></li>
            <li><a href="#contact" style={{ color: '#9ca3af' }}>Contact</a></li>
          </ul>
        </div>

        <div className="cm-footer-col">
          <h4 style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', letterSpacing: '1px', marginBottom: '14px' }}>Location & Contact</h4>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af', marginBottom: '10px' }}>
            Chandigarh
          </p>
          <div style={{ fontSize: '13px', color: '#ffb703', fontWeight: 700 }}>academyqsr@gmail.com</div>
        </div>
      </div>

      <div className="cm-footer-bottom">
        <div>&copy; {new Date().getFullYear()} Chaw Momos Franchise & Café. All Rights Reserved.</div>
        <div>Himalayan Taste • Punjabi Tadka • Café & Quick Bites</div>
      </div>
    </div>
  </footer>
);

// ==================== ROOT APP ====================
function App() {
  const handleSelectCategoryFromBanner = (categoryId) => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <BrandStory onSelectCategory={handleSelectCategoryFromBanner} />
      <MenuSection />
      <About />
      <FranchiseForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
