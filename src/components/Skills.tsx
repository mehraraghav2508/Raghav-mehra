import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-16">SKILLS</h2>
        
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative px-6 py-4 border border-zinc-800 hover:border-blue-500 hover:bg-blue-600/10 transition-colors duration-300 cursor-default"
            >
              <span className="text-lg md:text-xl font-medium tracking-tight group-hover:text-blue-400 transition-colors">
                {skill}
              </span>
              <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
