import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { awsServices, certifications } from '../data/certifications';
import { stagger } from '../hooks/useScrollReveal';
import './Certifications.css';

export default function Certifications(): JSX.Element {
    return (
        <section id="certifications" className="section certs">
            <div className="section-head reveal">
                <span className="eyebrow">certifications</span>
                <h2 className="section-title">
                    Certified on <span className="accent">AWS Cloud</span>
                </h2>
                <p className="section-sub">
                    AWS isn't a line on a list for me — it's the platform I ship on every day at Dondé.
                    The certification formalises it; the production systems back it up.
                </p>
            </div>

            {certifications.map((cert, i) => (
                <article
                    key={cert.name}
                    className="glass certs__card reveal"
                    style={{ transitionDelay: `${stagger(i)}ms` }}
                >
                    <div className="certs__badge" aria-hidden="true">
                        <span className="certs__badge-ring" />
                        <CloudQueueIcon sx={{ fontSize: 30 }} />
                        <span className="certs__badge-star">AWS</span>
                    </div>

                    <div className="certs__body">
                        <div className="certs__meta">
                            <span className="certs__level">{cert.level}</span>
                            <span className="certs__issuer">{cert.issuer}</span>
                        </div>

                        <h3 className="certs__name">{cert.name}</h3>
                        <p className="certs__desc">{cert.description}</p>

                        <div className="certs__skills">
                            {cert.skills.map((skill) => (
                                <span className="chip" key={skill}>{skill}</span>
                            ))}
                        </div>

                        <div className="certs__footer">
                            <div className="certs__dates">
                                <span className="certs__verified">
                                    <VerifiedIcon sx={{ fontSize: 15 }} />
                                    Verified
                                </span>
                                <span className="certs__date">Issued {cert.issued}</span>
                                <span className="certs__date-sep">·</span>
                                <span className="certs__date">Expires {cert.expires}</span>
                            </div>
                            <a
                                className="btn btn--ghost btn--sm"
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Verify on Credly
                                <ArrowOutwardIcon sx={{ fontSize: 14 }} />
                            </a>
                        </div>
                    </div>
                </article>
            ))}

            <div className="certs__handson reveal">
                <h3 className="certs__handson-title">What I actually run on AWS</h3>
                <ul className="certs__services">
                    {awsServices.map((svc) => (
                        <li key={svc.name}>
                            <span className="certs__svc-name">{svc.name}</span>
                            <span className="certs__svc-what">{svc.what}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
