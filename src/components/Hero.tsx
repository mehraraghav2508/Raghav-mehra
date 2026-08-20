import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { MousePointer2, Move, Frame, Type } from 'lucide-react';

export default function Hero() {
  const [firstName, lastName] = personalInfo.name.split(' ');

  return (
    <section className="relative min-h-screen bg-[#0A19D9] flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Interface Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] hidden md:flex items-center gap-2 bg-white text-black px-2 py-1 text-[10px] font-mono font-bold tracking-wider"
        >
          <MousePointer2 size={12} /> SELECT
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] right-[15%] hidden md:flex items-center gap-2 bg-black/20 text-white backdrop-blur-sm border border-white/30 px-2 py-1 text-[10px] font-mono tracking-wider"
        >
          <Frame size={12} /> W: 1440 H: 900
        </motion.div>
        <motion.div 
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] left-[20%] hidden md:flex items-center gap-2 bg-white text-black px-2 py-1 text-[10px] font-mono font-bold tracking-wider"
        >
          <Type size={12} /> TYPE
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6">
        <div className="relative inline-block">
          
          {/* Main Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.85] font-semibold text-white tracking-tighter mix-blend-difference"
          >
            <h1>{firstName.toUpperCase()}</h1>
            <h1 className="ml-[10vw]">{lastName.toUpperCase()}</h1>
          </motion.div>

          {/* Figma-style Selection Box around the name */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute inset-0 border border-[#00FF00]/50 pointer-events-none hidden md:block -m-4"
          >
            {/* Corner Handles */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[#00FF00]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[#00FF00]" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[#00FF00]" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[#00FF00]" />
            {/* Component Label */}
            <div className="absolute -top-5 left-0 bg-[#00FF00] text-black text-[10px] font-mono px-1 py-0.5 font-bold">
              ❖ HERO_TEXT
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 md:mt-24 max-w-xl"
        >
          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">
            DESIGNER
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-white/80 font-mono text-xs md:text-sm tracking-widest">
            <span>UI/UX</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>BRAND</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>GRAPHIC</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Toolbar Bottom */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-zinc-900 text-white px-4 py-2 rounded-full border border-zinc-700/50 shadow-2xl backdrop-blur-md"
      >
        <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors group relative">
          <MousePointer2 size={16} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Select</span>
        </button>
        <div className="w-px h-4 bg-zinc-700" />
        <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors group relative">
          <Move size={16} />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Pan</span>
        </button>
        <div className="w-px h-4 bg-zinc-700" />
        <div className="px-2 text-[10px] font-mono text-zinc-400">100%</div>
      </motion.div>

    </section>
  );
}
