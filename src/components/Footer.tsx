import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-zinc-950 text-zinc-500 text-xs font-mono tracking-widest border-t border-zinc-900">
      <div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          © {currentYear} {personalInfo.name.toUpperCase()}
        </div>
        <div>
          {personalInfo.shortRole}
        </div>
        <div>
          ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
