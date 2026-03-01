import React, { useState } from "react";
import { motion } from "motion/react";
import { Plane, Globe, ShieldCheck, TrendingUp, Mail, Phone, Linkedin, MapPin, Calendar, CreditCard, Ship, FileText, CheckCircle2 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TourActivities />
      <Services />
      <Projects />
      <NorwayGallery />
      <Workflow />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Plane className="text-warm-orange w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight">Journey Beyond</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-sky-blue transition-colors">About</a>
          <a href="#services" className="hover:text-sky-blue transition-colors">Services</a>
          <a href="#projects" className="hover:text-sky-blue transition-colors">Projects</a>
          <a href="#contact" className="bg-deep-blue text-white px-6 py-2 rounded-full hover:bg-sky-blue transition-all">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-0 bg-slate-50 opacity-50" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Reduced Size Hero Image */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-sky-400 blur-2xl opacity-20 rounded-full" />
            <img 
              src="https://i.ibb.co.com/YTNq2cnW/Whats-App-Image-2026-02-25-at-9-51-12-PM.jpg" 
              alt="Journey Beyond the Border" 
              className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-2xl mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <span className="text-warm-orange font-bold tracking-widest uppercase text-xs mb-4 block">Your Dedicated Travel Consultant</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-deep-blue mb-6 leading-tight">
            Turning Journeys into <br /><span className="italic text-sky-blue">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Journey Beyond the Border creates seamless, memorable, and value-driven travel experiences across Asia and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto bg-deep-blue text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sky-blue transition-all shadow-xl">
              Explore Projects
            </a>
            <a href="#contact" className="w-full sm:w-auto border-2 border-deep-blue text-deep-blue px-8 py-4 rounded-full text-lg font-medium hover:bg-deep-blue hover:text-white transition-all">
              Get a Consultation
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gray-300 rounded-full" />
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

function Testimonials() {
  const reviews = [
    { text: "Very professional and reliable service. Everything was perfectly managed.", author: "Corporate Client" },
    { text: "Great communication and excellent tour planning support.", author: "Group Traveler" },
    { text: "A trustworthy travel consultant who truly understands client needs.", author: "Honeymoon Couple" }
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">What Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md p-10 rounded-3xl bg-sky-50 border border-sky-100 italic text-lg text-deep-blue"
            >
              "{review.text}"
              <div className="mt-6 not-italic font-bold text-sm uppercase tracking-widest text-warm-orange">— {review.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
