import { projects } from '../data';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="work" className="py-32 bg-zinc-950 text-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-24">SELECTED WORK</h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col group"
            >
              {/* Info Area */}
              <div className="flex flex-col gap-8 max-w-4xl">
                <div className="flex flex-col gap-2 border-l border-zinc-800 pl-6 group-hover:border-blue-500 transition-colors">
                  <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-zinc-400">
                    <span>{project.category}</span>
                    <span className="w-1 h-1 bg-zinc-600" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mt-4">{project.title}</h3>
                </div>
                
                <p className="text-lg text-zinc-400 leading-relaxed pl-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pl-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono border border-zinc-800 px-3 py-1 text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pl-6 mt-8">
                  <a href={project.link || "#"} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono tracking-widest text-white hover:text-blue-400 transition-colors group/link pb-1 border-b border-white/30 hover:border-blue-400">
                    VIEW PROJECT
                    <ArrowUpRight size={16} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
