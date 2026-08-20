import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-zinc-50 text-zinc-950 border-t border-zinc-200">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-24">EXPERIENCE</h2>

        <div className="flex flex-col gap-24">
          {experience.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 group">
              {/* Meta */}
              <div className="md:col-span-3 flex flex-col gap-1">
                <span className="text-sm font-mono text-zinc-500">{exp.date}</span>
                <h3 className="text-xl font-semibold tracking-tight mt-2">{exp.company}</h3>
              </div>
              
              {/* Content */}
              <div className="md:col-span-9 flex flex-col gap-6 relative">
                {/* Timeline Node */}
                <div className="hidden md:block absolute -left-12 top-2 w-3 h-3 border border-zinc-400 bg-zinc-50 group-hover:border-blue-600 group-hover:bg-blue-600 transition-colors" />
                
                <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-blue-600">{exp.role}</h4>
                <ul className="flex flex-col gap-4">
                  {exp.responsibilities.map((req, i) => (
                    <li key={i} className="text-lg text-zinc-700 leading-relaxed flex gap-4">
                      <span className="text-blue-500 mt-1">→</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
