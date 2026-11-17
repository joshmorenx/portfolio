import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { navItems, profile } from '../data/portfolio';
import { scrollTo } from '../utils/scrollTo';
import './Navbar.css';

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (!sections.length || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const go = (id: string) => {
        setOpen(false);
        scrollTo(id);
    };

    const initials = 'JA';

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">
                <button className="navbar__brand" onClick={() => go('home')} aria-label="Back to top">
                    <span className="navbar__logo">{initials}</span>
                    <span className="navbar__brand-text">
                        <span className="navbar__name">{profile.firstName} Aranda</span>
                        <span className="navbar__role">{profile.headline}</span>
                    </span>
                </button>

                <nav className="navbar__links" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`navbar__link ${active === item.id ? 'is-active' : ''}`}
                            onClick={() => go(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="navbar__actions">
                    <a className="btn btn--primary btn--sm navbar__cta" href={profile.resumeUrl} download>
                        <DownloadIcon sx={{ fontSize: 16 }} />
                        Resume
                    </a>
                    <button
                        className="navbar__toggle"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            <div className={`navbar__drawer ${open ? 'is-open' : ''}`}>
                {navItems.map((item, i) => (
                    <button
                        key={item.id}
                        className={`navbar__drawer-link ${active === item.id ? 'is-active' : ''}`}
                        style={{ transitionDelay: open ? `${i * 55}ms` : '0ms' }}
                        onClick={() => go(item.id)}
                    >
                        <span className="navbar__drawer-index">0{i + 1}</span>
                        {item.label}
                    </button>
                ))}
                <a className="btn btn--primary navbar__drawer-cta" href={profile.resumeUrl} download onClick={() => setOpen(false)}>
                    <DownloadIcon sx={{ fontSize: 18 }} />
                    Download Resume
                </a>
            </div>
        </header>
    );
}
