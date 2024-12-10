import { Box/*, Button*/ } from "@mui/material"
import devImg from '../assets/profile_image.png'
import Typewriter from 'typewriter-effect';

interface DevInfoProps {
    isDesktop: boolean;
    isTablet: boolean;
}

export default function DevInfo({ isDesktop, isTablet }: DevInfoProps): JSX.Element {
    return (
        <Box id="dev-info" className={isDesktop ? "dev-info" : isTablet ? "dev-info-tablet" : "dev-info-mobile"}>
            <Box className={(isDesktop ? "sliced txtjustify" : isTablet ? "sliced-tablet" : "sliced-mobile")}>
                <h1 className={"fadeInLeft " + (isDesktop ? "cocoon" : "")} style={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw' }}><span>Hi, I'm Joshua Aranda</span></h1>
                <h6 className={"fadeInLeft " + (isDesktop ? "start-style cocoon" : isTablet ? " start-style-tablet" : " start-style-mobile")}>I'm a
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
                </h6>
            </Box>
            <Box className={isDesktop ? "sliced" : isTablet ? "sliced-tablet" : "sliced-mobile"}>
                <Box>
                    <img className={(isDesktop ? "dev-profile" : isTablet ? "dev-profile-tablet" : "dev-profile-mobile") + " fadeInRight"} src={devImg} alt="" />
                </Box>
            </Box>
        </Box>
    )
}