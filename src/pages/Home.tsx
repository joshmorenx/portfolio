import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

export default function Home(): JSX.Element {
    const [progress, setProgress] = useState(0);
    useScrollReveal();

    useEffect(() => {
        const onScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div className="page">
            <div className="page__progress" style={{ width: `${progress}%` }} />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Certifications />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}
