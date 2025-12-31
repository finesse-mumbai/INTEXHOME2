
import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ChevronDown, ExternalLink, ArrowRight, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTION_IMAGES: Record<string, string> = {
  "Show": "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
  "Exhibitor": "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
  "Buyer": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  "Media": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
  "Download": "https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80&w=800",
  "Flashback": "https://images.unsplash.com/photo-1531050171669-7df9bbef64ef?auto=format&fit=crop&q=80&w=800",
};

const SUB_ITEM_IMAGES: Record<string, string> = {
  "Show Profile": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  "Exhibitor Profile": "https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?auto=format&fit=crop&q=80&w=800",
  "Featured Exhibitors": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
  "Buyers Profile": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  "Visitor Registration": "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
  "Photo Gallery": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
  "Industry Partners": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  "Promotion Activities": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
  "Booth Booking Enquiry": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
};

const NAV_ITEMS = [
  { label: "Home", link: "/" },
  {
    label: "Show",
    link: "#",
    children: [
      { label: "Show Profile", link: "/show-profile" },
      { label: "About Organiser", link: "/organiser" },
      { label: "IBF Seminar Series", link: "/interactive_business_forum" },
      { label: "Promotion Activities", link: "/promotions" },
      { label: "Industry Partners", link: "/partners" },
    ],
  },
  {
    label: "Exhibitor",
    link: "#",
    children: [
      { label: "Exhibitor Profile", link: "/ex-profile" },
      { label: "Featured Exhibitors", link: "/exhibitor-partners" },
      { label: "Exhibitor's Testimonial", link: "/ex-testimonial" },
      { label: "Booth Booking Enquiry", link: "/enquiry-form" },
      { label: "Hotel & Travel", link: "/hotel" },
    ],
  },
  {
    label: "Buyer",
    link: "#",
    children: [
      { label: "Buyers Profile", link: "/buyer-profile" },
      { label: "Buyer's Testimonial", link: "/buyer-testimonial" },
      { label: "Exhibitor's List", link: "/assets/pdf/Exhibitor-List.pdf", external: true },
      { label: "Visitor Registration", link: "/buyer_reg" },
      { label: "Hotel & Travel", link: "/hotel" },
    ],
  },
  {
    label: "Media",
    link: "#",
    children: [
      { label: "Newsletters", link: "/newsletter" },
      { label: "Press Release", link: "/press_release" },
      { label: "Media Coverage", link: "/media-coverage" },
      { label: "Media Partners", link: "/media-partners" },
      { label: "Media Registration", link: "/media_reg_form" },
    ],
  },
  {
    label: "Download",
    link: "#",
    children: [
      { label: "Show Info Kit", link: "/show-info-kit" },
      { label: "Factsheet", link: "/factsheet" },
      { label: "Branding Opportunities", link: "/branding_opportunity" },
      { label: "Media Coverage Report", link: "/media-coverage-report" },
      { label: "InDyChem Brochure", link: "/assets/pdf/InDyChem-Brochure.pdf", external: true },
      { label: "FAQ – Exhibitors | Buyers", link: "/faq" },
    ],
  },
  {
    label: "Flashback",
    link: "#",
    children: [
      { label: "Post Show Reports", link: "/post-show-report" },
      { label: "Post Show Video", link: "/post-show-video" },
      { label: "Photo Gallery", link: "/gallery" },
      { label: "Intex Times", link: "/intex-times" },
    ],
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredChild, setHoveredChild] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentImage = (itemLabel: string) => {
    if (hoveredChild && SUB_ITEM_IMAGES[hoveredChild]) {
      return SUB_ITEM_IMAGES[hoveredChild];
    }
    return SECTION_IMAGES[itemLabel] || SECTION_IMAGES["Show"];
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      {/* Museum Style Top Bar */}
      <div className="bg-archive-charcoal text-archive-cream py-3 px-12 hidden md:flex justify-between items-center text-[9px] font-black tracking-[0.3em] uppercase border-b border-archive-clay/20 z-[60] relative">
        <div className="flex gap-10">
           <div className="flex items-center gap-2">
              <Clock size={10} className="text-archive-clay" />
              <span>Show Access: 09:00 — 18:30</span>
           </div>
           <div className="flex items-center gap-2 cursor-pointer hover:text-archive-clay transition-colors">
              <MapPin size={10} className="text-archive-clay" />
              <span>Venue Directions</span>
           </div>
        </div>
        <div className="flex gap-10 items-center">
           <div className="flex gap-4">
              <span className="text-archive-clay">EN</span>
              <span className="opacity-20">|</span>
              <span className="opacity-60 hover:text-archive-clay cursor-pointer font-serif">HI</span>
           </div>
           <button className="bg-archive-clay text-archive-cream px-4 py-1 hover:bg-archive-cream hover:text-archive-charcoal transition-all font-black">
              Show Tickets
           </button>
        </div>
      </div>

      <nav className={`fixed top-[34px] left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-archive-charcoal/10 py-5 top-0' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1440px] mx-auto px-12 flex justify-between items-center">
          <div className="flex items-center gap-20">
            <div className="flex items-center gap-5 cursor-pointer group">
              <div className={`w-12 h-12 flex items-center justify-center border transition-all duration-500 ${isScrolled ? 'border-archive-charcoal bg-archive-charcoal text-white' : 'border-white text-white bg-black/20 group-hover:bg-archive-clay group-hover:border-archive-clay'}`}>
                <span className="font-serif font-black text-xl italic">IX</span>
              </div>
              <div className={`flex flex-col transition-colors ${isScrolled ? 'text-archive-charcoal' : 'text-white'}`}>
                <span className="font-serif font-black text-2xl leading-none tracking-tighter uppercase">INTEX.</span>
                <span className="text-[8px] font-black tracking-[0.4em] uppercase opacity-50">SOUTH ASIA</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className={`hidden lg:flex gap-14 text-[13px] font-black tracking-[0.25em] transition-colors ${isScrolled ? 'text-archive-charcoal' : 'text-white'}`}>
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.label} 
                  className="relative group/item"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setHoveredChild(null);
                  }}
                >
                  <a 
                    href={item.link} 
                    className={`hover:text-archive-clay uppercase transition-all flex items-center gap-2 py-4 relative group`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={10} className="opacity-40 group-hover:rotate-180 transition-transform duration-500" />}
                    <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-archive-clay transition-all duration-500 group-hover:w-full"></span>
                  </a>
                  
                  <AnimatePresence>
                    {activeDropdown === item.label && item.children && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-[-50px] w-[800px] bg-white text-archive-charcoal p-0 z-[70] overflow-hidden border border-archive-charcoal/5"
                        style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)' }}
                      >
                        <div className="grid grid-cols-12 h-[500px]">
                          <div className="col-span-5 p-12 flex flex-col justify-between border-r border-archive-charcoal/5">
                            <div className="space-y-8">
                              <div className="text-[8px] font-mono tracking-[0.5em] text-archive-clay font-bold uppercase mb-4">Registry // {item.label}</div>
                              <div className="flex flex-col gap-6">
                                {item.children.map((child, idx) => (
                                  <motion.a 
                                    key={child.label} 
                                    href={child.link} 
                                    onMouseEnter={() => setHoveredChild(child.label)}
                                    onMouseLeave={() => setHoveredChild(null)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    target={child.external ? '_blank' : '_self'}
                                    className="text-[13px] font-black tracking-widest hover:text-archive-clay transition-all flex items-center justify-between group/sub"
                                  >
                                    <span className="flex items-center gap-4">
                                      <span className="text-[9px] font-mono opacity-20 italic">0{idx + 1}</span>
                                      {child.label}
                                    </span>
                                    <ArrowRight size={14} className="opacity-0 -translate-x-4 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-500 text-archive-clay" />
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                            <div className="pt-10 border-t border-archive-charcoal/5">
                               <p className="text-[9px] font-bold text-archive-charcoal/30 uppercase tracking-[0.2em] italic">
                                 Sourcing the future of South Asian textiles through digital heritage.
                               </p>
                            </div>
                          </div>

                          <div className="col-span-7 bg-archive-charcoal relative overflow-hidden group/img-cont">
                             <AnimatePresence mode="wait">
                               <motion.div 
                                 key={getCurrentImage(item.label)}
                                 className="absolute inset-0 w-full h-full"
                                 initial={{ scale: 1.1, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                               >
                                 <img 
                                   src={getCurrentImage(item.label)} 
                                   className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[2000ms] group-hover/img-cont:scale-110"
                                   alt={hoveredChild || item.label}
                                 />
                                 <div className="absolute inset-0 bg-archive-clay/10 mix-blend-multiply"></div>
                               </motion.div>
                             </AnimatePresence>
                             
                             <motion.div 
                               initial={{ rotateY: 30, opacity: 0, x: 50 }}
                               animate={{ rotateY: -10, opacity: 1, x: 0 }}
                               transition={{ duration: 1, delay: 0.1 }}
                               className="absolute inset-0 flex items-center justify-center p-16 pointer-events-none"
                               style={{ perspective: '1000px' }}
                             >
                                <div className="border border-white/20 p-10 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center transform group-hover/img-cont:translate-z-20 transition-transform duration-700">
                                   <Database size={32} className="text-archive-clay mb-6" />
                                   <h4 className="text-5xl font-serif font-black italic text-white uppercase tracking-tighter leading-none mb-4">
                                     {hoveredChild || item.label} <br /> <span className="text-archive-clay not-italic">Matrix</span>
                                   </h4>
                                   <div className="w-12 h-[2px] bg-archive-clay"></div>
                                </div>
                             </motion.div>
                             <div className="absolute top-8 right-8 text-[8px] font-mono text-white/40 uppercase tracking-widest">Specimen_Ref: IX_2025</div>
                             <div className="absolute bottom-8 left-8 flex gap-2">
                                <div className="w-2 h-2 bg-archive-clay animate-pulse"></div>
                                <span className="text-[7px] font-mono text-white/60 font-bold tracking-widest uppercase">Live_Node_Access</span>
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex items-center gap-10 transition-colors ${isScrolled ? 'text-archive-charcoal' : 'text-white'}`}>
            {/* Unified Login Button */}
            <a 
              href="https://portal.intexfair.com/login.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex flex-col items-end gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
            >
               <span className="text-[10px] font-black tracking-widest uppercase">Login</span>
               <div className="w-12 h-px bg-current group-hover:bg-archive-clay transition-colors"></div>
            </a>

            {/* Apple-style Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center z-[110]"
            >
              <div className="flex flex-col gap-1.5 w-6 overflow-hidden">
                <motion.div 
                  animate={isMenuOpen ? { rotate: 45, y: 4.5, backgroundColor: '#2F2C2C' } : { rotate: 0, y: 0, backgroundColor: 'currentColor' }}
                  className="w-full h-[2px] origin-center" 
                />
                <motion.div 
                  animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, backgroundColor: 'currentColor' }}
                  className="w-full h-[2px]" 
                />
                <motion.div 
                  animate={isMenuOpen ? { rotate: -45, y: -4.5, backgroundColor: '#2F2C2C' } : { rotate: 0, y: 0, backgroundColor: 'currentColor' }}
                  className="w-full h-[2px] origin-center" 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-white/98 backdrop-blur-xl z-[100] flex flex-col pt-40 px-12 md:px-24 pb-12 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden">
               <span className="text-[50vw] font-black text-black select-none">IX</span>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-20 items-center h-full"
            >
              <div className="space-y-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.div key={item.label} variants={itemVariants} className="group">
                    <a 
                      href={item.link}
                      onClick={() => !item.children && setIsMenuOpen(false)}
                      className="text-5xl md:text-8xl font-serif font-black text-archive-charcoal hover:italic hover:text-archive-clay transition-all flex items-center gap-8"
                    >
                      <span className="text-[12px] font-mono opacity-20 font-black">0{idx + 1}</span>
                      {item.label}
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={itemVariants} className="hidden md:flex flex-col justify-between p-12 bg-archive-charcoal text-white relative h-[600px] overflow-hidden group">
                <div className="absolute inset-0 opacity-20 grayscale transition-transform duration-[4000ms] group-hover:scale-110">
                   <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Heritage" />
                </div>
                <div className="relative z-10 space-y-8">
                   <div className="text-[8px] font-mono tracking-[0.6em] text-archive-clay font-bold uppercase">MANIFEST // IX_2025</div>
                   <h4 className="text-6xl font-serif font-black uppercase italic leading-[0.8] text-archive-clay">The Digital <br /> Matrix.</h4>
                   <p className="text-[13px] font-bold tracking-[0.2em] uppercase opacity-60 max-w-sm leading-relaxed">
                     Sourcing at the intersection of cultural heritage and industrial innovation.
                   </p>
                </div>
                <div className="relative z-10 flex gap-4 mt-12">
                   <button className="flex-1 bg-archive-clay text-white font-black text-[11px] tracking-[0.4em] uppercase py-6 hover:bg-white hover:text-archive-charcoal transition-all">
                      Secure Access
                   </button>
                   <div className="w-20 h-20 border border-white/20 flex items-center justify-center hover:bg-archive-clay hover:border-archive-clay transition-all cursor-pointer">
                      <ExternalLink size={24} />
                   </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-12 pt-8 border-t border-archive-charcoal/10 flex justify-between items-center">
              <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-archive-charcoal/40">
                <span>© 2025 INTEX SOUTH ASIA</span>
                <span className="hidden sm:block">GLOBAL TEXTILE SOURCING PLATFORM</span>
              </div>
              <div className="flex gap-6">
                <div className="w-2 h-2 bg-archive-clay rounded-full animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-archive-clay">SYSTEM_SYNC_STABLE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
