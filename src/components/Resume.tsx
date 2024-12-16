import { Box } from '@mui/material';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

interface ResumeProps {
    isDesktop: boolean;
    isTablet: boolean;
}

export default function Resume({ isDesktop, isTablet }: ResumeProps): JSX.Element {
    // planned to implement using this object arrays

    const experiences = [
        { role: "Full Stack MERN Developer", title: "NodeNetwork (Open Source Social Platform)", date: "June 2021 - At present", description: "I developed a full-featured social network using the MERN stack, showcasing advanced user management and security measures. The platform includes a dynamic permission system with conditional deletion, ensuring permissions cannot be removed while still assigned to users. A comprehensive profile editor allows users to update personal information and profile pictures seamlessly. Security is a core focus, with bcrypt used for password encryption and JWT for session management. Tokens are securely stored in cookies without exposing sensitive data, and password verification is handled through bcrypt.compare. Real-time interactions are powered by Socket.io, enabling instant notifications for actions such as new followers, likes, dislikes, and comments. Link to the project: https://github.com/joshmorenx/nodeNetwork" },
        { role: ".NET Developer & Data Analyst", title: "Decorama", date: "September 2021 - At present", description: "In my role, I work primarily with VB.NET, focusing on writing and debugging code for Excel document processing. I am trained in the Model-View-Controller (MVC) architecture and proficient in MS SQL, including T-SQL and PL/SQL, for querying and managing application data. My SQL expertise covers Stored Procedures, Transactions, Joins, and complex queries. Additionally, I successfully migrated a WordPress site between hosting providers using only Regular Expressions and SQL queries via PhpMyAdmin, demonstrating problem-solving and technical adaptability without third-party tools." },
        { role: "Full Stack Django Developer & Data Scientist", title: "CentroGeo", date: "August 2021 - June 2022", description: "I independently developed a 'multi-format geo-referenced data extraction platform' by leveraging open-source social network. I adapted the code to meet project requirements, using Python and the Django framework to create REST APIs. The platform featured geographic data handling using libraries such as Pandas, NumPy, Matplotlib, Shapely, and Geopandas. For the frontend, I implemented functionality with vanilla JavaScript and CSS, including a geolocation feature that captured and stored user coordinates upon posting, enabling geo-referenced content retrieval. My work showcased strong problem-solving skills and adaptability, as I self-taught Python and integrated diverse tools to deliver a functional solution. Link to the project: https://github.com/joshmorenx/CitySends" },
    ]

    // const programmingLangs: string[] = ["VB.NET", "TypeScript", "JavaScript", "Python"]
    // const frontend: string[] = ["React", "React Native", "TailwindCSS", "Context API", "Redux", "Redux Persist"]
    // const backend: string[] = ["Node.js", "Express.js", "Django", "RESTful APIs"]
    // const databases: string[] = ["MSSQL", "MongoDB"]
    // const dataScience: string[] = ["Pandas", "GeoPandas", "Matplotlib"]
    // const tools: string[] = ["Docker", "GitHub", "Ubuntu", "Vite", "Regex", "CI/CD Pipelines"]
    // const testing: string[] = ["Vitest", "Jest"]
    // const others: string[] = ["OOP", "JWT", "Socket.io", "Postman", "Mongoose(ODM)"]

    return (
        <Box id="resume" className='resume'>
            <Box sx={{
                color: 'white',
                fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw',
                width: '100%',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1>My Resume</h1>
            </Box>
            <Box className={'relative max-w-6xl mx-auto'} sx={{ display: 'block', width: '100%' }}>
                {experiences.map((elem, index) => {
                    return (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: '10vh' }}>
                            {(isDesktop || isTablet) && <Box className={'mr-4'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <FiberSmartRecordIcon />
                            </Box>}
                            <Box className={'p-4'} sx={{ boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.5)', border: '1px solid white', borderRadius: '5px' }}>
                                <h1 style={{ color: 'white', fontSize: isDesktop ? '2vw' : isTablet ? '3.5vw' : '4.5vw' }}>{elem.title}</h1>
                                <Box sx={{ display: 'flex', mb: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h2 style={{ color: 'white', fontSize: isDesktop ? '1.5vw' : isTablet ? '2.5vw' : '3.5vw' }}>{elem.role}</h2>
                                    <h2 style={{ color: 'white', fontSize: isDesktop ? '1vw' : isTablet ? '2vw' : '3vw', background: 'linear-gradient(to bottom, #2b1f3c, #1c2d45);', paddingLeft: '1vw', paddingRight: '1vw' }}>{elem.date}</h2>
                                </Box>
                                <p style={{ textAlign: 'justify', fontSize: isDesktop ? '' : isTablet ? '' : '3vw' }}>
                                    {elem.description}
                                </p>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}