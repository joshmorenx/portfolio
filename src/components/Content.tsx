import { useMediaQuery } from "@mui/material"
import { Box/*, Button*/ } from "@mui/material"
import DevInfo from './DevInfo'
import Projects from './Projects'

export default function Content(): JSX.Element {
    const isDesktop = useMediaQuery('(min-width: 900px)');
    const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 899px)');

    return (
        <Box sx={{ display: 'block', alignItems: 'center' }}>
            <DevInfo isDesktop={isDesktop} isTablet={isTablet} />
            <Projects />
        </Box>
    );
}
