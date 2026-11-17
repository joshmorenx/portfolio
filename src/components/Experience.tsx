import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { experiences } from '../data/portfolio';
import { stagger } from '../hooks/useScrollReveal';
import './Experience.css';

export default function Experience(): JSX.Element {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section id="experience" className="section experience">
            <div className="section-head reveal">
                <span className="eyebrow">Career</span>
                <h2 className="section-title">
                    Where I've <span className="accent">built things</span>
                </h2>
                <p className="section-sub">
                    Five years across consulting, product engineering and open source — from VB.NET desktop
                    tooling to serverless banking infrastructure on AWS.
                </p>
            </div>

            <div className="experience__timeline">
                {experiences.map((exp, i) => {
                    const isOpen = expanded === i;
                    return (
                        <article
                            key={exp.company + exp.role}
                            className={`experience__item reveal ${isOpen ? 'is-open' : ''}`}
                            style={{ transitionDelay: `${stagger(i)}ms` }}
                        >
                            <div className="experience__rail">
                                <span className={`experience__node ${exp.current ? 'is-current' : ''}`}>
                                    <WorkOutlineIcon sx={{ fontSize: 14 }} />
                                </span>
                                <span className="experience__line" />
                            </div>

                            <div className="glass glass--hover experience__card">
                                <button
                                    className="experience__toggle"
                                    onClick={() => setExpanded(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                >
                                    <div className="experience__top">
                                        <div>
                                            <div className="experience__meta">
                                                <span className="experience__company">{exp.company}</span>
                                                {exp.current && <span className="experience__now">Now</span>}
                                                <span className="experience__period">{exp.period}</span>
                                            </div>
                                            <h3 className="experience__role">{exp.role}</h3>
                                            <p className="experience__place">{exp.place}</p>
                                        </div>
                                        <div className="experience__side">
                                            <span className="experience__date">{exp.date}</span>
                                            <span className={`experience__chevron ${isOpen ? 'is-open' : ''}`}>
                                                <ExpandMoreIcon sx={{ fontSize: 20 }} />
                                            </span>
                                        </div>
                                    </div>
                                </button>

                                <p className="experience__summary">{exp.summary}</p>

                                <div className="experience__details">
                                    <div className="experience__inner">
                                        <ul className="experience__highlights">
                                            {exp.highlights.map((point) => (
                                                <li key={point.title}>
                                                    <span className="experience__hi-title">{point.title}</span>
                                                    <span className="experience__hi-body">{point.body}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="experience__stack">
                                            {exp.stack.map((tech) => (
                                                <span className="chip" key={tech}>{tech}</span>
                                            ))}
                                        </div>

                                        {exp.links && (
                                            <div className="experience__links">
                                                {exp.links.map((link) => (
                                                    <a
                                                        key={link.href}
                                                        className="btn btn--ghost btn--sm"
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.label}
                                                        <ArrowOutwardIcon sx={{ fontSize: 14 }} />
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
