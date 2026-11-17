import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { profile } from '../data/portfolio';
import { stagger } from '../hooks/useScrollReveal';
import './Contact.css';

const channels = [
    {
        label: 'Email',
        value: profile.email,
        href: `mailto:${profile.email}`,
        icon: <EmailIcon sx={{ fontSize: 22 }} />,
        accent: '#a855f7',
        copyable: true
    },
    {
        label: 'GitHub',
        value: 'github.com/joshmorenx',
        href: profile.github,
        icon: <GitHubIcon sx={{ fontSize: 22 }} />,
        accent: '#e2e8f0',
        external: true
    },
    {
        label: 'LinkedIn',
        value: 'joshua-emmanuel-aranda-moreno',
        href: profile.linkedin,
        icon: <LinkedInIcon sx={{ fontSize: 22 }} />,
        accent: '#0a66c2',
        external: true
    },
    {
        label: 'WhatsApp',
        value: profile.phone,
        href: profile.whatsapp,
        icon: <WhatsAppIcon sx={{ fontSize: 22 }} />,
        accent: '#22c55e',
        external: true
    }
];

export default function Contact(): JSX.Element {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="contact__panel glass glass--top reveal">
                <div className="contact__glow" />
                <span className="eyebrow">Get in touch</span>
                <h2 className="contact__title">
                    Let's build something <span className="accent">worth shipping</span>
                </h2>
                <p className="contact__sub">
                    I'm open to full stack, backend and cloud engineering roles — and always happy to talk
                    architecture, serverless or side projects. The fastest way to reach me is email.
                </p>

                <div className="contact__actions">
                    <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                        <EmailIcon sx={{ fontSize: 18 }} />
                        Send an email
                    </a>
                    <button className="btn btn--ghost" onClick={copyEmail}>
                        {copied ? <CheckIcon sx={{ fontSize: 18 }} /> : <ContentCopyIcon sx={{ fontSize: 18 }} />}
                        {copied ? 'Copied!' : 'Copy email'}
                    </button>
                    <a className="btn btn--ghost" href={profile.resumeUrl} download>
                        <DownloadIcon sx={{ fontSize: 18 }} />
                        Resume
                    </a>
                </div>

                <div className="contact__channels">
                    {channels.map((channel, i) => {
                        const inner = (
                            <>
                                <span className="contact__channel-icon" style={{ color: channel.accent }}>
                                    {channel.icon}
                                </span>
                                <span className="contact__channel-text">
                                    <span className="contact__channel-label">{channel.label}</span>
                                    <span className="contact__channel-value">{channel.value}</span>
                                </span>
                                {channel.external && (
                                    <ArrowOutwardIcon className="contact__channel-arrow" sx={{ fontSize: 16 }} />
                                )}
                            </>
                        );

                        return (
                            <a
                                key={channel.label}
                                className="contact__channel glass glass--hover reveal"
                                style={{ transitionDelay: `${stagger(i, 70)}ms` }}
                                href={channel.href}
                                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                {inner}
                            </a>
                        );
                    })}
                </div>
            </div>

            <footer className="contact__footer">
                <span>© {new Date().getFullYear()} {profile.name}</span>
                <span className="contact__footer-dot" />
                <span>{profile.location}</span>
                <span className="contact__footer-dot" />
                <span>Built with React, TypeScript &amp; Vite</span>
            </footer>
        </section>
    );
}
