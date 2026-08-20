import { aboutCopy, personalInfo } from '../data';
import { motion } from 'motion/react';
import { profileImageBase64 } from '../profileImage';

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-50 text-zinc-950">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Column */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-8">WHO I AM</h2>
            <div className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              {personalInfo.name}
            </div>
            <div className="text-sm font-mono tracking-widest text-blue-600">
              {personalInfo.role.toUpperCase()}
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <p className="text-2xl md:text-3xl leading-[1.4] font-medium text-zinc-800 max-w-3xl">
              {aboutCopy}
            </p>

            {/* Portrait Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[2/1] bg-zinc-200 overflow-hidden"
            >
              <img 
                src={profileImageBase64}
                alt="Raghav Mehra" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
