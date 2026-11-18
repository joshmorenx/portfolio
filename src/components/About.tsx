import { stagger } from '../hooks/useScrollReveal';
import { education, languages, profile } from '../data/portfolio';
import './About.css';

const facts = [
    { label: 'Location', value: profile.location },
    { label: 'Phone', value: profile.phone },
    { label: 'Email', value: profile.email },
    { label: 'Status', value: 'Currently at IT Talent' }
];

const focusAreas = [
    {
        title: 'Serverless banking',
        body: 'Most of my day is AWS — Lambda, Step Functions, API Gateway and SQS on the Serverless Framework, inside a bank where a typo in a transfer flow is a very big deal.'
    },
    {
        title: 'Full stack delivery',
        body: "I'm comfortable on both sides: React and TypeScript on the front, Node.js, Express and Django behind it. I'd rather own a feature end to end than hand it off halfway."
    },
    {
        title: 'Data & geospatial',
        body: 'Python with Pandas, GeoPandas and Shapely. That started at CentroGeo and stuck — I like problems where the answer is hiding in the coordinates.'
    }
];

export default function About(): JSX.Element {
    return (
        <section id="about" className="section about">
            <div className="about__intro">
                <div className="section-head reveal">
                    <span className="eyebrow">about</span>
                    <h2 className="section-title">
                        Engineering <span className="accent">production systems</span>, end to end
                    </h2>
                </div>
                <p className="about__lede reveal">{profile.summary}</p>
            </div>

            <div className="about__grid">
                <div className="about__focus">
                    {focusAreas.map((area, i) => (
                        <article
                            className="glass glass--hover glass--top about__card reveal"
                            key={area.title}
                            style={{ transitionDelay: `${stagger(i)}ms` }}
                        >
                            <span className="about__card-index">0{i + 1}</span>
                            <h3>{area.title}</h3>
                            <p>{area.body}</p>
                        </article>
                    ))}
                </div>

                <div className="about__side">
                    <article
                        className="glass glass--top about__panel reveal"
                        style={{ transitionDelay: `${stagger(1)}ms` }}
                    >
                        <h3 className="about__panel-title">Quick facts</h3>
                        <ul className="about__facts">
                            {facts.map((fact) => (
                                <li key={fact.label}>
                                    <span className="about__fact-label">{fact.label}</span>
                                    <span className="about__fact-value">{fact.value}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article
                        className="glass glass--top about__panel reveal"
                        style={{ transitionDelay: `${stagger(2)}ms` }}
                    >
                        <h3 className="about__panel-title">Education</h3>
                        <p className="about__degree">{education.degree}</p>
                        <p className="about__school">{education.school}</p>
                        <div className="about__edu-meta">
                            <span>{education.place}</span>
                            <span className="chip">{education.date}</span>
                        </div>
                    </article>

                    <article
                        className="glass glass--top about__panel reveal"
                        style={{ transitionDelay: `${stagger(3)}ms` }}
                    >
                        <h3 className="about__panel-title">Languages</h3>
                        <ul className="about__languages">
                            {languages.map((lang) => (
                                <li key={lang.name}>
                                    <div className="about__lang-head">
                                        <span>{lang.name}</span>
                                        <span className="about__lang-level">{lang.level}</span>
                                    </div>
                                    <div className="about__lang-track">
                                        <span style={{ width: `${lang.proficiency}%` }} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}
