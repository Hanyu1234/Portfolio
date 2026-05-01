import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const lang = 'en' as const;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
