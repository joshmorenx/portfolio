import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import VerifiedIcon from '@mui/icons-material/Verified';
import profileImg from '../assets/profile_image.png';
import { marqueeSkills, profile, stats } from '../data/portfolio';
import { certifications } from '../data/certifications';
import { scrollTo } from '../utils/scrollTo';
import './Hero.css';

export default function Hero(): JSX.Element {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    // Typewriter for the rotating role titles
    useEffect(() => {
        const full = profile.roles[roleIndex];
        const speed = deleting ? 28 : 58;

        const timeout = window.setTimeout(() => {
            if (!deleting) {
                if (text.length < full.length) {
                    setText(full.slice(0, text.length + 1));
                } else {
                    window.setTimeout(() => setDeleting(true), 1500);
                }
            } else if (text.length > 0) {
                setText(full.slice(0, text.length - 1));
            } else {
                setDeleting(false);
                setRoleIndex((prev) => (prev + 1) % profile.roles.length);
            }
        }, speed);

        return () => window.clearTimeout(timeout);
    }, [text, deleting, roleIndex]);

    return (
        <section id="home" className="hero">
            <div className="hero__glow hero__glow--one" />
            <div className="hero__glow hero__glow--two" />

            <div className="hero__inner">
                <div className="hero__copy">
                    <span className="eyebrow">open to work · Mérida, MX</span>

                    <h1 className="hero__title">
                        <span className="hero__greeting">Hi, I'm {profile.firstName}</span>
                        <span className="hero__name">
                            Aranda <span className="hero__name-accent">Moreno</span>
                        </span>
                    </h1>

                    <div className="hero__role">
                        <span className="hero__role-prefix">&gt;</span>
                        <span className="hero__role-text">{text}</span>
                        <span className="hero__caret" aria-hidden="true" />
                    </div>

                    <p className="hero__tagline">
                        I build <span className="marked">serverless banking systems</span>, real-time
                        platforms and data-driven tools.
                    </p>

                    <a
                        className="hero__cert"
                        href={certifications[0].verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                        <span>
                            <strong>{certifications[0].name}</strong>
                            <span className="hero__cert-src">verified on Credly</span>
                        </span>
                    </a>

                    <div className="hero__meta">
                        <span><PlaceIcon sx={{ fontSize: 17 }} />{profile.location}</span>
                        <a href={`mailto:${profile.email}`}><EmailIcon sx={{ fontSize: 17 }} />{profile.email}</a>
                    </div>

                    <div className="hero__actions">
                        <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
                            View my work
                            <ArrowDownwardIcon sx={{ fontSize: 17 }} />
                        </button>
                        <a className="btn btn--ghost" href={profile.resumeUrl} download>
                            <DownloadIcon sx={{ fontSize: 17 }} />
                            Download resume
                        </a>
                        <div className="hero__socials">
                            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <GitHubIcon sx={{ fontSize: 21 }} />
                            </a>
                            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedInIcon sx={{ fontSize: 21 }} />
                            </a>
                        </div>
                    </div>

                    <dl className="hero__stats">
                        {stats.map((stat) => (
                            <div className="hero__stat" key={stat.label}>
                                <dt className="hero__stat-value">{stat.value}</dt>
                                <dd className="hero__stat-label">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="hero__visual">
                    <div className="hero__ring hero__ring--outer" />
                    <div className="hero__ring hero__ring--mid" />
                    <div className="hero__portrait-wrap">
                        <img className="hero__portrait" src={profileImg} alt={`Portrait of ${profile.name}`} />
                    </div>

                    <span className="hero__orbit hero__orbit--a" />
                    <span className="hero__orbit hero__orbit--b" />
                    <span className="hero__orbit hero__orbit--c" />
                </div>
            </div>

            <div className="hero__marquee" aria-hidden="true">
                <div className="hero__marquee-track">
                    {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                        <span className="hero__marquee-item" key={`${skill}-${i}`}>
                            {skill}
                            <span className="hero__marquee-dot" />
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
