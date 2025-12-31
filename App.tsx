
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Schedule from './components/Schedule';
import ExhibitorProfile from './components/ExhibitorProfile';
import BuyerProfile from './components/BuyerProfile';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import Partners from './components/Partners';
import BuyerCategories from './components/BuyerCategories';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import RevealWrapper from './components/RevealWrapper';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-archive-cream text-archive-charcoal selection:bg-archive-clay selection:text-archive-cream min-h-screen relative font-sans">
      {/* Global Page Reveal Shutter on Mount */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="fixed inset-0 z-[200] bg-black flex items-center justify-center pointer-events-none"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-6xl md:text-9xl font-serif font-black uppercase italic tracking-tighter"
        >
          INTEX<span className="text-archive-clay">.</span>
        </motion.div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-archive-clay z-[110] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex flex-col relative z-10">
        <RevealWrapper text="WELCOME." subtext="SYS_BOOT // 2025" type="slide" direction="up">
          <Hero />
        </RevealWrapper>
        
        {/* About Section */}
        <RevealWrapper text="ARCHIVE." subtext="REG_ID // 01" type="center-split-h" delay={0.2}>
          <section className="bg-archive-cream py-32 border-b border-archive-charcoal/10 overflow-hidden" id="about">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase text-archive-clay">About Us</span>
                  <h2 className="text-5xl md:text-7xl font-serif font-black tracking-tighter leading-[0.9] uppercase text-archive-charcoal">
                    Archive of <br /> South Asia.
                  </h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-serif font-bold italic leading-tight text-archive-bronze">
                    The Premier International Textile Sourcing Shows of South Asia.
                  </h3>
                  <p className="text-archive-charcoal text-xs leading-relaxed max-w-lg uppercase tracking-widest font-medium opacity-80">
                    Since its launch in 2015, Intex has evolved into the region's most influential and largest international textile sourcing show in South Asia, with a strong presence across Sri Lanka, Bangladesh, and India. Over the course of 17 successful editions, the platform has consistently brought together the global textile community at the heart of South Asia's manufacturing ecosystem.

Intex has connected over 70,000+ qualified trade buyers from more than 40 countries with 3,000+ international textile exhibitors, enabling meaningful business engagement across fibres, fabrics, trims, dyes and chemicals, technology, and allied services. Shaped by industry needs, the platform empowers stakeholders to discover innovation, build strategic partnerships, and stay aligned with evolving global sourcing trends.
                  </p>
                  <button className="px-10 py-5 border border-archive-charcoal text-archive-charcoal font-black text-[10px] tracking-[0.4em] uppercase hover:bg-archive-clay hover:text-archive-cream hover:border-archive-clay transition-all">
                    View Records
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 relative flex justify-end">
                <div className="relative w-full max-w-[600px] flex justify-end">
                    <div className="w-[80%] aspect-[3/4] border border-archive-charcoal overflow-hidden bg-archive-clay/10">
                      <img src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                    </div>
                    <div className="absolute top-1/4 -left-12 w-[60%] aspect-square border border-archive-charcoal bg-archive-cream overflow-hidden z-10 p-2">
                      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                    </div>
                    <div className="absolute -bottom-12 right-0 w-[50%] aspect-video border border-archive-charcoal bg-archive-clay overflow-hidden z-20">
                      <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale brightness-75" />
                    </div>
                    <div className="absolute -top-12 right-4 flex items-center gap-4 rotate-90 origin-right">
                      <span className="text-7xl font-serif font-black text-archive-clay opacity-20">E</span>
                      <div className="text-[9px] font-black tracking-[0.2em] leading-none whitespace-nowrap text-archive-charcoal">ESTABLISHED // 1955</div>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </RevealWrapper>

        <RevealWrapper text="EVENTS." subtext="REG_ID // 02" type="bands-v" amount={0.3}>
          <ExhibitorProfile />
        </RevealWrapper>

        <RevealWrapper text="TIMELINE." subtext="REG_ID // 03" type="center-split-v" delay={0.15}>
          <Schedule />
        </RevealWrapper>

        <RevealWrapper text="EXHIBITORS." subtext="REG_ID // 04" type="bands-h" amount={0.25}>
          <BuyerProfile />
        </RevealWrapper>

        <RevealWrapper text="GALLERY." subtext="REG_ID // 05" type="slide" direction="left" amount={0.3}>
          <Gallery />
        </RevealWrapper>

        <RevealWrapper text="METRICS." subtext="REG_ID // 06" type="center-split-h" amount={0.4}>
          <Stats />
        </RevealWrapper>

        <RevealWrapper text="VOICES." subtext="REG_ID // 07" type="bands-v" amount={0.2}>
          <Testimonials />
        </RevealWrapper>

        {/* <RevealWrapper text="BUYERS." subtext="REG_ID // 08" type="center-split-h" amount={0.2}>
          <BuyerCategories />
        </RevealWrapper> */}

                  <BuyerCategories />


        <RevealWrapper text="PARTNERS." subtext="REG_ID // 09" type="bands-h" amount={0.4}>
          <Partners />
        </RevealWrapper>

        <RevealWrapper text="RESOURCES." subtext="REG_ID // 10" type="slide" direction="down" amount={0.4}>
          <Resources />
        </RevealWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default App;
