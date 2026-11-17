import { stagger } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolio';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './Projects.css';

export default function Projects(): JSX.Element {
    return (
        <section id="projects" className="section section--wide projects">
            <div className="section-head reveal">
                <span className="eyebrow">Selected work</span>
                <h2 className="section-title">
                    Projects I've <span className="accent">worked on</span>
                </h2>
                <p className="section-sub">
                    Production banking systems, an open-source social network and a geospatial data platform —
                    each one owned from the database query through to the shipped feature.
                </p>
            </div>

            <div className="projects__grid">
                {projects.map((project, i) => {
                    const Body = (
                        <>
                            <span
                                className="projects__glow"
                                style={{ background: `radial-gradient(circle, ${project.accent}55, transparent 70%)` }}
                            />
                            <div className="projects__head">
                                <span className="projects__badge" style={{ borderColor: `${project.accent}66`, color: project.accent }}>
                                    {project.badge}
                                </span>
                                <span className="projects__number">0{i + 1}</span>
                            </div>

                            <h3 className="projects__title">{project.title}</h3>
                            <p className="projects__subtitle" style={{ color: project.accent }}>{project.subtitle}</p>
                            <p className="projects__desc">{project.description}</p>

                            <ul className="projects__highlights">
                                {project.highlights.map((point) => (
                                    <li key={point}>
                                        <span className="projects__bullet" style={{ background: project.accent }} />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="projects__footer">
                                <div className="projects__stack">
                                    {project.stack.map((tech) => (
                                        <span className="chip" key={tech}>{tech}</span>
                                    ))}
                                </div>
                                {project.href && (
                                    <span className="projects__link">
                                        <GitHubIcon sx={{ fontSize: 16 }} />
                                        {project.linkLabel}
                                        <ArrowOutwardIcon sx={{ fontSize: 14 }} />
                                    </span>
                                )}
                            </div>
                        </>
                    );

                    const style = {
                        transitionDelay: `${stagger(i, 80)}ms`,
                        ['--accent' as string]: project.accent
                    } as React.CSSProperties;

                    return project.href ? (
                        <a
                            className="glass glass--hover projects__card reveal"
                            key={project.title}
                            style={style}
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Body}
                        </a>
                    ) : (
                        <article className="glass glass--hover projects__card reveal" key={project.title} style={style}>
                            {Body}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
