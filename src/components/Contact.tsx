import { personalInfo } from '../data';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0A19D9] text-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          
          <div className="flex-1 max-w-3xl">
            <h2 className="text-sm font-mono tracking-widest text-white/60 mb-8 border-b border-white/20 pb-4 inline-block">CONTACT</h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10vw] md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] mix-blend-plus-lighter"
            >
              LET'S MAKE<br/>
              SOMETHING.
            </motion.h3>
          </div>

          <div className="flex flex-col gap-12 pt-8 md:pt-32">
            <div>
              <p className="text-sm font-mono tracking-widest text-white/60 mb-4">CONNECT</p>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${personalInfo.email}`} className="text-xl font-medium hover:text-white/80 transition-colors flex items-center gap-2 group">
                  {personalInfo.email}
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-xl font-medium hover:text-white/80 transition-colors flex items-center gap-2 group">
                  {personalInfo.phone}
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-mono tracking-widest text-white/60 mb-4">NETWORK</p>
              <div className="flex flex-col gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-white/80 transition-colors flex items-center gap-2 group">
                  LinkedIn
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={personalInfo.behance} target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-white/80 transition-colors flex items-center gap-2 group">
                  Behance
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
