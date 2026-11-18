import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import ScienceIcon from '@mui/icons-material/Science';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { skillGroups, type SkillGroup } from '../data/portfolio';
import { stagger } from '../hooks/useScrollReveal';
import './Skills.css';

const iconMap: Record<SkillGroup['icon'], JSX.Element> = {
    cloud: <CloudQueueIcon sx={{ fontSize: 19 }} />,
    code: <CodeIcon sx={{ fontSize: 19 }} />,
    layout: <WebIcon sx={{ fontSize: 19 }} />,
    server: <DnsIcon sx={{ fontSize: 19 }} />,
    database: <StorageIcon sx={{ fontSize: 19 }} />,
    chart: <InsightsIcon sx={{ fontSize: 19 }} />,
    wrench: <BuildIcon sx={{ fontSize: 19 }} />,
    flask: <ScienceIcon sx={{ fontSize: 19 }} />,
    boxes: <WidgetsIcon sx={{ fontSize: 19 }} />
};

export default function Skills(): JSX.Element {
    return (
        <section id="skills" className="section section--wide skills">
            <div className="section-head reveal">
                <span className="eyebrow">skills</span>
                <h2 className="section-title">
                    My <span className="accent">technical skills</span>
                </h2>
                <p className="section-sub">
                    The tools I actually reach for — grouped roughly the way I think about a stack.
                </p>
            </div>

            <div className="skills__grid">
                {skillGroups.map((group, i) => (
                    <article
                        className="glass glass--hover skills__card reveal"
                        key={group.title}
                        style={{ transitionDelay: `${stagger(i, 70)}ms` }}
                    >
                        <div className="skills__head">
                            <span className="skills__icon">{iconMap[group.icon]}</span>
                            <h3 className="skills__title">{group.title}</h3>
                        </div>
                        <div className="skills__tags">
                            {group.skills.map((skill) => (
                                <span className="chip" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
