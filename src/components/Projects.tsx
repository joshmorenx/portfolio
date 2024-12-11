import { Box } from "@mui/material";
import { Carousel } from "flowbite-react";

export default function Project() {
    return (
        <Box className={"projects"} id="projects">
            <h1>Projects</h1>
            <Box sx={{ display: 'block', alignItems: 'center', width: '50%', height: '50%' }}>
                <Carousel>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                </Carousel>
            </Box>
        </Box>
    )
}