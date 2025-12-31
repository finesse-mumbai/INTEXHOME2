
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Hash, CornerDownRight, ChevronLeft, ChevronRight, Binary, Fingerprint } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Divide testimonials into packets of 10
  const pages = useMemo(() => {
    const p = [];
    for (let i = 0; i < TESTIMONIALS.length; i += ITEMS_PER_PAGE) {
      p.push(TESTIMONIALS.slice(i, i + ITEMS_PER_PAGE));
    }
    return p;
  }, []);

  const handleNextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const handlePrevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  return (
    <section className="flex flex-col border-y border-archive-charcoal bg-archive-cream overflow-hidden" id="testimonials">
      
      {/* FULL WIDTH HEADER: TESTIMONIALS RECORDS */}
      <div className="w-full border-b border-archive-charcoal bg-white py-12 md:py-20 px-12 overflow-hidden relative group">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="flex items-center gap-6 mb-4">
             <Fingerprint size={20} className="text-archive-clay" />
             <span className="text-[10px] font-black tracking-[0.8em] uppercase text-archive-charcoal/40">Verified Human Feedback // Archive_S25</span>
          </div>
          <h2 className="text-[9vw] md:text-[8vw] font-serif font-black uppercase italic leading-[0.8] tracking-tighter text-archive-charcoal">
            TESTIMONIALS <span className="text-outline" style={{ WebkitTextStroke: '2px #2F2C2C' }}>RECORDS.</span>
          </h2>
        </motion.div>
        
        {/* Background Decorative Matrix */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-archive-charcoal/5 flex items-center justify-center pointer-events-none opacity-20">
           <Binary size={120} strokeWidth={0.5} className="text-archive-charcoal rotate-12" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[700px]">
        
        {/* LEFT PANEL: ACTIVE SPECIMEN (Dark/Charcoal) - 50% */}
        <div className="w-full lg:w-1/2 bg-archive-charcoal text-archive-cream p-12 md:p-24 flex flex-col justify-between relative border-r border-archive-charcoal">
          <div className="flex justify-between items-center opacity-40 mb-12">
             <div className="flex items-center gap-3">
                <Hash size={14} className="text-archive-clay" />
                <span className="text-[9px] font-black tracking-[0.5em] uppercase">SPECIMEN_ANALYSIS // NODE_07</span>
             </div>
             <span className="text-[8px] font-mono uppercase tracking-[0.3em]">RECORD_INT_STABLE</span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <blockquote className="text-3xl md:text-5xl font-serif font-black italic leading-[1.1] text-white tracking-tighter max-w-2xl">
                  “{TESTIMONIALS[active].quote}”
                </blockquote>

                <div className="flex items-start gap-8 pt-12 border-t border-white/10">
                   {/* Requested 60px * 60px Image */}
                   <div className="w-[60px] h-[60px] bg-archive-clay overflow-hidden flex-shrink-0 border border-white/20">
                      <img 
                        src={TESTIMONIALS[active].imageUrl} 
                        alt={TESTIMONIALS[active].author}
                        className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 hover:scale-110"
                      />
                   </div>

                   <div className="space-y-2">
                      <div className="flex items-center gap-3">
                         <CornerDownRight size={14} className="text-archive-clay" />
                         <h4 className="text-2xl font-serif font-black uppercase italic text-white tracking-tight">
                           {TESTIMONIALS[active].author}
                         </h4>
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black tracking-[0.3em] uppercase text-archive-clay">
                            {TESTIMONIALS[active].role}
                         </span>
                         <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30">
                            {TESTIMONIALS[active].company}
                         </span>
                      </div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-end border-t border-white/10 pt-10 text-[8px] font-mono uppercase tracking-widest text-white/20">
             <div className="space-y-1">
                <span>Record_Origin</span>
                <div className="text-[10px] text-archive-clay font-black">NODE_PT_{active + 101}</div>
             </div>
             <div className="flex gap-4">
                <span>Modality: {TESTIMONIALS[active].type}</span>
                <span className="opacity-40">|</span>
                <span>SEC_ID: IX_S25_ALPHA</span>
             </div>
          </div>
        </div>

        {/* RIGHT PANEL: REGISTRY DIRECTORY (Light/Cream) - 50% */}
        <div className="w-full lg:w-1/2 bg-archive-cream text-archive-charcoal flex flex-col">
          {/* List Sub-Header */}
          <div className="p-8 border-b border-archive-charcoal flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-20">
            <div className="flex items-center gap-4">
               <div className="w-3 h-3 bg-archive-charcoal rotate-45"></div>
               <span className="text-[11px] font-black tracking-[0.6em] uppercase">DATA_PACKET_DIRECTORY</span>
            </div>
            <div className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-archive-charcoal text-white">
               PACKET 0{currentPage + 1} // 0{pages.length}
            </div>
          </div>

          {/* Directory List Area - Strictly 10 items */}
          <div className="flex-1 relative overflow-hidden bg-[#FBFBFB]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col"
              >
                {pages[currentPage].map((t) => {
                  const globalIndex = TESTIMONIALS.findIndex(item => item.id === t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(globalIndex)}
                      className={`w-full text-left p-6 border-b border-archive-charcoal/5 transition-all flex items-center justify-between group h-[10%] ${active === globalIndex ? 'bg-white' : 'hover:bg-archive-charcoal hover:text-white'}`}
                    >
                      <div className="flex items-center gap-8 overflow-hidden">
                         <span className={`text-[10px] font-mono font-black shrink-0 ${active === globalIndex ? 'text-archive-clay' : 'opacity-20'}`}>
                           {String(globalIndex + 1).padStart(3, '0')}
                         </span>
                         <div className="truncate">
                            <span className="text-[13px] font-black tracking-widest uppercase block truncate">{t.author}</span>
                            <span className={`text-[8px] font-bold uppercase tracking-widest truncate block ${active === globalIndex ? 'text-archive-clay' : 'opacity-40'}`}>
                               {t.company}
                            </span>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         {active === globalIndex && (
                           <motion.div layoutId="dir-active-rect" className="w-1.5 h-1.5 bg-archive-clay rotate-45" />
                         )}
                         <span className={`text-[8px] font-mono uppercase opacity-0 group-hover:opacity-100 transition-opacity ${active === globalIndex ? 'text-archive-clay' : ''}`}>
                            [ View_Record ]
                         </span>
                      </div>
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Horizontal Slider Controls for the Directory (Packet Navigation) */}
          <div className="p-8 border-t border-archive-charcoal bg-white flex justify-between items-center">
             <div className="flex items-center gap-8">
                <div className="flex border border-archive-charcoal">
                   <button 
                    onClick={handlePrevPage}
                    className="p-5 hover:bg-archive-charcoal hover:text-white transition-all border-r border-archive-charcoal"
                   >
                      <ChevronLeft size={18} />
                   </button>
                   <button 
                    onClick={handleNextPage}
                    className="p-5 hover:bg-archive-charcoal hover:text-white transition-all"
                   >
                      <ChevronRight size={18} />
                   </button>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-black tracking-[0.4em] uppercase text-archive-charcoal/40">
                    Navigate Archive Packets
                  </span>
                  <div className="flex gap-2">
                     {pages.map((_, i) => (
                       <div 
                         key={i} 
                         className={`w-4 h-1 transition-all duration-500 ${currentPage === i ? 'bg-archive-clay' : 'bg-archive-charcoal/10'}`} 
                       />
                     ))}
                  </div>
                </div>
             </div>

             <div className="hidden md:flex flex-col items-end text-[8px] font-mono text-archive-charcoal/30">
                <span>BUFFER_STATUS: NOMINAL</span>
                <span>PACKET_REF: {pages[currentPage][0].id.substring(0,6).toUpperCase()}</span>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #2F2C2C; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #D99578; }
      `}</style>
    </section>
  );
};

export default Testimonials;
