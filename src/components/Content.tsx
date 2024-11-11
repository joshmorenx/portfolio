import Typewriter from 'typewriter-effect';
// import { useMediaQuery } from "@mui/material"
import { Box/*, Button*/ } from "@mui/material"

export default function Content(): JSX.Element {
    // const isDesktop = useMediaQuery('(min-width: 900px)');
    // const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 899px)');
    // const isMobile = useMediaQuery('(max-width: 425px)');

    const startStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginTop: '0',
        marginBottom: '0',
        display: 'inline-flex',
        gap: '0.5rem'
    }

    return (
        <Box style={{ padding: '2rem' }} className="content">
            <h1 className="fadeInLeft">Hi, I'm <span>Joshua Aranda</span></h1>
            <p style={startStyle} className="fadeInLeft">I'm a
                <Typewriter
                    options={{
                        loop: true,
                        autoStart: true,
                        delay: 50,
                        deleteSpeed: 1
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .deleteAll()
                            .typeString("<span style='background-color: #00FF00; border-radius: 5px; padding: 5px; color: black;'>Full-Stack Developer</span>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<span style='background-color: #d17a00; border-radius: 5px; padding: 5px; color: black;'>Software Developer</span>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<span style='background-color: #2f45d4; border-radius: 5px; padding: 5px; color: black;'>UI/UX Designer</span>")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("<span style='background-color: #07f5a2; border-radius: 5px; padding: 5px; color: black;'>Computer Science Engineer</span>")
                            .pauseFor(1000)
                            .deleteAll()
                            .start()
                    }}
                />
            </p>
        </Box>
    );
}
