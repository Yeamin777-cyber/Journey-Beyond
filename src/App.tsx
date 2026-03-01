import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plane, Globe, ShieldCheck, TrendingUp, Mail, Phone, Linkedin, MapPin, Calendar, CreditCard, Ship, FileText, CheckCircle2, Star, MessageSquare, ArrowLeft, MoreVertical, Edit, Trash2 } from "lucide-react";

type Review = {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
};

const INITIAL_REVIEWS: Review[] = [
  { id: "1", name: "Ahmed Khan", rating: 5, date: "Oct 2025", text: "Yeamin made our Thailand trip unforgettable. Highly recommended!" },
  { id: "2", name: "Sarah J.", rating: 5, date: "Jan 2026", text: "Professional service and great attention to detail. The Norway tour was magical." },
  { id: "3", name: "David Miller", rating: 4, date: "Dec 2025", text: "Excellent planning for our family trip to Japan. Very responsive." },
  { id: "4", name: "Maria Garcia", rating: 5, date: "Feb 2026", text: "The best travel consultant I've worked with. Everything was seamless." }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "reviews">("home");
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem("journey_beyond_reviews");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure every review has a unique ID (fixes issues with old saved reviews)
      return parsed.map((r: any) => ({
        ...r,
        id: r.id || Math.random().toString(36).substr(2, 9)
      }));
    }
    return INITIAL_REVIEWS;
  });

  // Persist reviews to localStorage
  useEffect(() => {
    localStorage.setItem("journey_beyond_reviews", JSON.stringify(reviews));
  }, [reviews]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const addReview = (newReview: Review) => {
    setReviews((prev) => {
      const exists = prev.find(r => r.id === newReview.id);
      if (exists) {
        return prev.map(r => r.id === newReview.id ? newReview : r);
      }
      return [newReview, ...prev];
    });
  };

  const deleteReview = (id: string) => {
    setReviews((prev) => prev.filter(r => r.id !== id));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero />
            <About />
            <TourActivities />
            <Services />
            <Projects />
            <NorwayGallery />
            <Workflow />
            <Testimonials reviews={reviews.slice(0, 3)} onNavigate={() => setCurrentPage("reviews")} />
            <Contact />
          </motion.div>
        ) : (
          <motion.div
            key="reviews"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewsPage 
              reviews={reviews} 
              onAddReview={addReview} 
              onDeleteReview={deleteReview}
              onBack={() => setCurrentPage("home")} 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

function Navbar({ onNavigate, currentPage }: { onNavigate: (page: "home" | "reviews") => void, currentPage: string }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Plane className="text-amber-400 w-6 h-6" />
          <span className="font-display text-xl font-bold tracking-tighter text-white">Journey Beyond</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
          <button 
            onClick={() => onNavigate("home")}
            className={`${currentPage === "home" ? "text-emerald-400" : "text-white/70"} hover:text-white transition-colors`}
          >
            Home
          </button>
          <a href="#about" onClick={() => onNavigate("home")} className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#services" onClick={() => onNavigate("home")} className="text-white/70 hover:text-white transition-colors">Services</a>
          <button 
            onClick={() => onNavigate("reviews")}
            className={`${currentPage === "reviews" ? "text-emerald-400" : "text-white/70"} hover:text-white transition-colors flex items-center gap-2`}
          >
            Reviews
          </button>
          <a href="#contact" onClick={() => onNavigate("home")} className="bg-emerald-500 text-white px-8 py-2.5 rounded-full hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* High-Resolution Vibrant Background */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=1920&q=100" 
          alt="Dog Sledding in Tromsø, Norway" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Overlay - Refined for maximum clarity without blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 drop-shadow-lg font-display">Your Dedicated Travel Consultant</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl font-display tracking-tight">
            Turning Journeys into <br />
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="italic font-serif font-normal text-white inline-block"
              >
                {/* Typewriter animation for "Experiences" */}
                {"Experiences".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: 0.5 + index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 5,
                      repeatType: "reverse"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light drop-shadow-md leading-relaxed">
            Journey Beyond the Border creates seamless, memorable, and value-driven travel experiences across Asia and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#projects" className="w-full sm:w-auto bg-emerald-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-105">
              Explore Projects
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-deep-blue transition-all shadow-xl hover:scale-105">
              Get a Consultation
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-deep-blue/40"
      >
        <div className="w-6 h-10 border-2 border-deep-blue/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-deep-blue/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80" 
          alt="European City Attractions" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
            <p>
              I’m Yeamin, a professional travel consultant with ITS Holidays Ltd., specializing in luxury and premium international travel experiences.
            </p>
            <p>
              I design and manage high-end, tailor-made journeys with a strong focus on comfort, exclusivity, and seamless execution. From curated itineraries and premium hotel selections to visa assistance, flights, and private arrangements, I ensure every detail is handled with precision and discretion.
            </p>
            <p>
              With extensive experience in international destinations, group and bespoke travel planning, and close coordination with global suppliers, I help clients enjoy refined travel experiences that are smooth, elegant, and worry-free.
            </p>
            <p className="text-deep-blue font-bold">
              ✨ My goal is to transform travel into a sophisticated experience—where every journey feels effortless, personalized, and truly exceptional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-white/20">
              <div className="bg-sky-100 p-3 rounded-xl text-sky-600">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-blue">Global Expertise</h4>
                <p className="text-sm text-gray-500">Asia Zone Specialist</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-white/20">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-blue">Digital Strategy</h4>
                <p className="text-sm text-gray-500">Travel Brand Positioning</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-white/20">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-blue">Reliable Support</h4>
                <p className="text-sm text-gray-500">End-to-End Management</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-2xl shadow-sm border border-white/20">
              <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-deep-blue">Proven Results</h4>
                <p className="text-sm text-gray-500">High Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TourActivities() {
  const activities = [
    {
      title: "Arctic Aurora Safari",
      desc: "Witness the vibrant Northern Lights from a snowy hill in a calm, luxury setting.",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Guided Sightseeing",
      desc: "Explore iconic landmarks and hidden gems with expert local guides.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Cultural Immersion",
      desc: "Experience local traditions, authentic cuisines, and community life.",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Adventure & Nature",
      desc: "From mountain treks to Arctic safaris, embrace the great outdoors.",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Luxury & Leisure",
      desc: "Relax in premium resorts and enjoy curated wellness experiences.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Private Arctic Dining",
      desc: "Enjoy a gourmet meal under the stars in a heated glass lavvu.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tour Activities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We curate diverse experiences to ensure every moment of your journey is meaningful.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">{activity.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Travel & Consulting",
      icon: <Plane className="w-8 h-8" />,
      items: ["International & Domestic Packages", "Customized Itinerary Planning", "Group & Corporate Travel", "Cruise Packages (Asia Zone)"]
    }
  ];

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?auto=format&fit=crop&w=1920&q=80" 
          alt="Harbin Ice City" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-blue/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-sky-300 max-w-2xl mx-auto">Professional travel solutions tailored to your unique needs.</p>
        </div>
        
        <div className="flex justify-center">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 max-w-lg w-full shadow-2xl"
            >
              <div className="text-warm-orange mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Thailand Tour Campaign",
      category: "Leisure & Honeymoon",
      image: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=800&q=80",
      description: "Leisure, honeymoon, and family tour packages for Bangladeshi travelers."
    },
    {
      title: "Philippines Multi-City Tour",
      category: "Adventure & Culture",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80",
      description: "Manila · Boracay · Cebu · Bohol multi-destination itinerary."
    },
    {
      title: "Sri Lanka Tour Package",
      category: "Cultural & Nature",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80",
      description: "Cultural, nature, and leisure-focused travel experience."
    },
    {
      title: "Japan Experience Tour",
      category: "Cultural Exploration",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "Cultural, modern city, and seasonal travel packages (Tokyo · Osaka · Kyoto)."
    },
    {
      title: "China Discovery Tour",
      category: "Business & Leisure",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
      description: "Multi-city travel including Beijing · Shanghai · Guangzhou."
    },
    {
      title: "Norway Northern Lights",
      category: "Premium Luxury",
      image: "https://images.unsplash.com/photo-1531366930477-4f211903c3a0?auto=format&fit=crop&w=800&q=80",
      description: "Luxury winter tour focused on Northern Lights and Arctic experiences."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-deep-blue text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects & Case Studies</h2>
            <p className="text-sky-300 max-w-xl">Showcasing how strategic planning transforms travel into an experience.</p>
          </div>
          <button className="text-white border-b border-white pb-1 hover:text-sky-blue hover:border-sky-blue transition-all">
            View All Case Studies
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-sky-400 text-sm font-medium uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-sky-200 italic font-serif">
            “These projects demonstrate hands-on experience across Southeast Asia, East Asia, and Europe, covering leisure, corporate, family, and cultural travel segments.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function NorwayGallery() {
  const images = [
    "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531366930477-4f211903c3a0?auto=format&fit=crop&w=1920&q=80" 
          alt="Norway Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-deep-blue/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <span className="text-warm-orange font-bold uppercase tracking-widest text-xs">Premium Luxury</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Norway's Northern Lights</h2>
          </div>
          <p className="text-sky-100/80 max-w-md text-lg">
            A luxury winter tour focused on Northern Lights and Arctic experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={img} alt={`Norway ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    { title: "Analysis", desc: "Client Requirement Analysis" },
    { title: "Planning", desc: "Customized Itinerary Planning" },
    { title: "Negotiation", desc: "Cost Optimization & Supplier Negotiation" },
    { title: "Execution", desc: "Booking & On-Trip Support" }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Workflow</h2>
          <p className="text-gray-500">A systematic approach to ensuring your journey is unforgettable.</p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-deep-blue text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ reviews, onNavigate }: { reviews: Review[], onNavigate: () => void }) {
  return (
    <section className="section-padding overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Real experiences from travelers who journeyed with us.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md p-10 rounded-3xl bg-white border border-gray-100 shadow-sm italic text-lg text-deep-blue relative"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-sky-blue text-white rounded-full flex items-center justify-center text-2xl font-serif shadow-lg">“</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-warm-orange fill-warm-orange" : "text-gray-200"}`} />
                ))}
              </div>
              "{review.text}"
              <div className="mt-6 not-italic font-bold text-sm uppercase tracking-widest text-warm-orange flex items-center gap-2">
                <div className="w-6 h-0.5 bg-warm-orange/30" />
                {review.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onNavigate}
            className="inline-flex items-center gap-3 bg-white border-2 border-deep-blue text-deep-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-deep-blue hover:text-white transition-all shadow-lg group"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View All & Give Review
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewsPage({ reviews, onAddReview, onDeleteReview, onBack }: { reviews: Review[], onAddReview: (review: Review) => void, onDeleteReview: (id: string) => void, onBack: () => void }) {
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    review: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    if (activeMenu) {
      window.addEventListener('click', handleClickOutside);
    }
    return () => window.removeEventListener('click', handleClickOutside);
  }, [activeMenu]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.review) return;

    const newReview: Review = {
      id: formData.id || Math.random().toString(36).substr(2, 9),
      name: formData.name,
      rating: rating,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      text: formData.review
    };

    onAddReview(newReview);
    setIsSubmitted(true);
    setFormData({ id: "", name: "", review: "" });
    setRating(5);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleEdit = (rev: Review) => {
    setFormData({
      id: rev.id,
      name: rev.name,
      review: rev.text
    });
    setRating(rev.rating);
    setActiveMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-deep-blue font-bold hover:text-sky-blue transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <button 
          onClick={() => setIsAdmin(!isAdmin)}
          className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${isAdmin ? 'bg-deep-blue text-white border-deep-blue' : 'text-gray-400 border-gray-200 hover:border-deep-blue hover:text-deep-blue'}`}
        >
          {isAdmin ? 'Admin Mode: ON' : 'Admin Mode: OFF'}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left: Read Reviews */}
        <div>
          <h2 className="text-4xl font-bold text-deep-blue mb-4 font-serif">Client Experiences</h2>
          <p className="text-gray-500 mb-12">Read what our travelers have to say about their journeys.</p>

          <div className="space-y-8">
            {reviews.map((rev, idx) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-deep-blue text-lg">{rev.name}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{rev.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < rev.rating ? "text-warm-orange fill-warm-orange" : "text-gray-200"}`} />
                      ))}
                    </div>
                    
                    {/* Three-dot menu */}
                    <div className="relative">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent immediate closing from the window listener
                          setActiveMenu(activeMenu === rev.id ? null : rev.id);
                        }}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-deep-blue"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>
                      
                      <AnimatePresence>
                        {activeMenu === rev.id && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 rounded-xl shadow-xl z-30 overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent menu clicks from closing the menu
                          >
                            <button 
                              onClick={() => handleEdit(rev)}
                              className="w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 border-b border-gray-50"
                            >
                              <Edit className="w-4 h-4" /> Edit
                            </button>
                            {isAdmin && (
                              <button 
                                onClick={() => {
                                  onDeleteReview(rev.id);
                                  setActiveMenu(null);
                                }}
                                className="w-full px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50 flex items-center gap-2"
                              >
                                <Trash2 className="w-4 h-4" /> Delete
                              </button>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{rev.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Give Review */}
        <div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 sticky top-32">
            <h3 className="text-2xl font-bold text-deep-blue mb-2">
              {formData.id ? 'Edit Your Experience' : 'Share Your Experience'}
            </h3>
            <p className="text-gray-500 mb-8 text-sm">Your feedback helps us improve and helps others plan their dream trips.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold uppercase tracking-wider text-deep-blue">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="focus:outline-none transition-transform hover:scale-110"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <Star 
                        className={`w-10 h-10 ${(hover || rating) >= star ? "text-warm-orange fill-warm-orange" : "text-gray-300"}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-deep-blue">Full Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-sky-blue focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-deep-blue">Your Review</label>
                <textarea 
                  required
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  className="w-full p-4 bg-white rounded-xl border border-slate-200 focus:border-sky-blue focus:outline-none transition-colors h-32"
                  placeholder="Tell us about your trip..."
                />
              </div>

              <div className="flex gap-4">
                <button 
                  type="submit"
                  className="flex-1 bg-deep-blue text-white py-4 rounded-xl font-bold hover:bg-sky-blue transition-all shadow-lg flex items-center justify-center gap-3"
                >
                  {formData.id ? 'Update Review' : 'Submit Review'}
                </button>
                {formData.id && (
                  <button 
                    type="button"
                    onClick={() => {
                      setFormData({ id: "", name: "", review: "" });
                      setRating(5);
                    }}
                    className="px-6 py-4 bg-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-300 transition-all"
                  >
                    Cancel
                  </button>
                )}
              </div>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-bold text-sm"
                  >
                    {formData.id ? 'Review updated successfully!' : 'Thank you! Your review has been posted.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Tour Package",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    // Construct WhatsApp Message
    const whatsappNumber = "8801974770520";
    const text = `*New Inquiry from Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    setStatus("success");
    setFormData({ name: "", email: "", service: "Tour Package", message: "" });
    
    // Reset status after a few seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0a1128] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-sans">Let’s Plan Your Next Journey</h2>
            <p className="text-xl text-sky-200/80 mb-12">Whether you’re a traveler, travel agency, or brand looking to collaborate—let’s create something meaningful together.</p>
            
            <div className="space-y-8">
              <a 
                href="mailto:yeaminlekhon770@gmail.com" 
                className="flex items-center gap-6 group outline-none focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl p-2 -m-2 transition-all"
                aria-label="Send an email to yeaminlekhon770@gmail.com"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-warm-orange group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sky-300 text-sm uppercase tracking-widest font-sans font-bold">Email Me</p>
                  <p className="text-xl font-medium font-sans">yeaminlekhon770@gmail.com</p>
                </div>
              </a>
              <a 
                href="https://wa.me/8801974770520" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group outline-none focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl p-2 -m-2 transition-all"
                aria-label="Chat with me on WhatsApp at +880 1974-770520"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sky-300 text-sm uppercase tracking-widest font-sans font-bold">WhatsApp</p>
                  <p className="text-xl font-medium font-sans">+880 1974-770520</p>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/kazi-yeamin-bin-asad-166a42258" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group outline-none focus-visible:ring-2 focus-visible:ring-sky-blue rounded-xl p-2 -m-2 transition-all"
                aria-label="Visit my LinkedIn profile"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sky-300 text-sm uppercase tracking-widest font-sans font-bold">LinkedIn</p>
                  <p className="text-xl font-medium font-sans">Kazi Yeamin Bin Asad</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl text-deep-blue shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 font-sans">Quick Inquiry</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider font-sans">Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-4 bg-gray-100 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-deep-blue font-sans`} 
                    placeholder="Your Name" 
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider font-sans">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-4 bg-gray-100 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-deep-blue font-sans`} 
                    placeholder="Your Email" 
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider font-sans">Service Needed</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full p-4 bg-gray-100 rounded-xl border border-gray-200 focus:outline-none focus:border-deep-blue font-sans appearance-none"
                >
                  <option>Tour Package</option>
                  <option>Visa Assistance</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider font-sans">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-4 bg-gray-100 rounded-xl border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:border-deep-blue h-32 font-sans`} 
                  placeholder="Tell us about your plans..." 
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#0a1128] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg font-sans disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-bold font-sans"
                >
                  Success! Your message has been sent.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-bold font-sans"
                >
                  Oops! Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Plane className="text-warm-orange w-5 h-5" />
            <span className="font-serif text-lg font-bold">Journey Beyond the Border</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/8801974770520" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kazi-yeamin-bin-asad-166a42258" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:yeaminlekhon770@gmail.com" 
              className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-warm-orange hover:bg-warm-orange hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-50">
          <p className="text-gray-400 text-sm">© 2026 Journey Beyond the Border. All rights reserved.</p>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-deep-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-deep-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
