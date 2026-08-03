import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
import Teaching from '@/components/Teaching';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Nav />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Teaching />
      <Experience />
      <Contact />
    </main>
  );
}
