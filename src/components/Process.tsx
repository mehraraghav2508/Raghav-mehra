import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: '01', title: 'THINK', desc: 'Research & Strategy' },
    { num: '02', title: 'STRUCTURE', desc: 'Wireframes & Flows' },
    { num: '03', title: 'DESIGN', desc: 'Visual Identity & UI' },
    { num: '04', title: 'REFINE', desc: 'Prototyping & Polish' }
  ];

  return (
    <section className="py-32 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-16">HOW I DESIGN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute top-6 left-6 right-6 h-px bg-zinc-800" />

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-6 relative z-10"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-zinc-700 bg-zinc-950 text-sm font-mono text-zinc-400 relative z-20">
                {step.num}
              </div>
              <div className="pr-4">
                <h3 className="text-xl font-semibold tracking-tight text-white mb-2 flex items-center gap-3">
                  {step.title}
                  {i < steps.length - 1 && <ArrowRight size={16} className="md:hidden text-zinc-600" />}
                </h3>
                <p className="text-zinc-500 font-mono text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
