import { Box } from "@mui/material";
import { Carousel } from "flowbite-react";

interface ProjectProps {
    isDesktop: boolean;
    isTablet: boolean;
}
export default function Project({ isDesktop, isTablet }: ProjectProps): JSX.Element {
    return (
        <Box className={"projects"} id="projects">
            <Box sx={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw', width: '100%', textAlign: 'center' }}><h1>Projects</h1></Box>
            <Box className={"projects center-child"}>
                <Box className={"projects-view"}>
                    <Carousel slide={false}>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                    </Carousel>
                </Box>
            </Box>
        </Box>
    )
}