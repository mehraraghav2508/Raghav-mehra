import { education } from '../data';

export default function Education() {
  return (
    <section className="py-24 bg-zinc-50 text-zinc-950">
      <div className="max-w-screen-2xl mx-auto px-6">
        <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-16">EDUCATION</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {education.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 border-t border-zinc-200 pt-6 group hover:border-blue-600 transition-colors">
              <span className="text-xs font-mono text-zinc-500">{item.date}</span>
              <h3 className="text-xl font-medium tracking-tight group-hover:text-blue-600 transition-colors">{item.degree}</h3>
              <div className="text-zinc-600 leading-relaxed">{item.school}</div>
              <div className="text-sm font-mono text-zinc-500 mt-auto">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
