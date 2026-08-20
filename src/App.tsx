/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 font-sans selection:bg-[#00FF00] selection:text-black overflow-x-hidden relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Experience />
        <Education />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
