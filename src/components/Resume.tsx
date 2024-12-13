import { Box } from '@mui/material';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';

interface ResumeProps {
    isDesktop: boolean;
    isTablet: boolean;
}

export default function Resume({ isDesktop, isTablet }: ResumeProps): JSX.Element {
    // planned to implement using this object arrays

    // const experiences = [
    //     { title: "title 1", description: "description 1", date: "date 1" },
    //     { title: "title 2", description: "description 2", date: "date 2" },
    //     { title: "title 3", description: "description 3", date: "date 3" },
    //     { title: "title 4", description: "description 4", date: "date 4" },
    // ]

    // const skills = [
    //     { programmingLangs: ["VB.NET", "TypeScript", "JavaScript", "Python"] },
    //     { frontend: ["React", "React Native", "TailwindCSS", "Context API", "Redux", "Redux Persist"] },
    //     { backend: ["Node.js", "Express.js", "Django", "RESTful APIs"] },
    //     { databases: ["MSSQL", "MongoDB"] },
    //     { dataScience: ["Pandas", "GeoPandas", "Matplotlib"] },
    //     { tools: ["Docker", "GitHub", "Ubuntu", "Vite", "Regex", "CI/CD Pipelines"] },
    //     { testing: ["Vitest", "Jest"] },
    //     { others: ["OOP", "JWT", "Socket.io", "Postman", "Mongoose(ODM)"] }
    // ]

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
            <Box className={'relative max-w-6xl mx-auto'} sx={{ display: 'flex', width: '100%' }}>
                <Box className={'mr-4'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FiberSmartRecordIcon />
                </Box>
                <Box className={'p-4'} sx={{ boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.5)', border: '1px solid white' }}>
                    <h1 style={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '3.5vw' : '4.5vw' }}>Full Stack MERN Developer</h1>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
                        <h2 style={{ color: 'white', fontSize: isDesktop ? '1.5vw' : isTablet ? '2.5vw' : '3.5vw' }}>NodeNetwork(Open Source Social Media Platform)</h2>
                        <h2 style={{ color: 'white', fontSize: isDesktop ? '1.5vw' : isTablet ? '2.5vw' : '3.5vw' }}>(2021 - Present)</h2>
                    </Box>
                    <p style={{ textAlign: 'justify' }}>
                        I developed a full-featured social network using the MERN stack, showcasing advanced user management and security measures. The platform includes a dynamic permission system with conditional deletion, ensuring permissions cannot be removed while still assigned to users. A comprehensive profile editor allows users to update personal information and profile pictures seamlessly.

                        Security is a core focus, with bcrypt used for password encryption and JWT for session management. Tokens are securely stored in cookies without exposing sensitive data, and password verification is handled through bcrypt.compare. Real-time interactions are powered by Socket.io, enabling instant notifications for actions such as new followers, likes, dislikes, and comments.
                        Link to the project: <a href="https://github.com/joshmorenx/nodeNetwork" target="_blank" rel="noopener noreferrer">https://github.com/joshmorenx/nodeNetwork</a>
                    </p>
                </Box>
            </Box>
        </Box>
    )
}