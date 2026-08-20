import { tools } from '../data';

export default function Tools() {
  return (
    <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1">
            <h2 className="text-sm font-mono tracking-widest text-zinc-500 mb-8">TOOLS</h2>
          </div>
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 border border-zinc-800 rounded-sm text-sm font-mono tracking-wide text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
