import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ScreenSizeProps } from '../interfaces/index';

export default function Contact({ isDesktop, isTablet }: ScreenSizeProps): JSX.Element {
    return (
        <Box id={"contact"} className={"contact"}>
            <Box sx={{
                color: 'white',
                fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw',
                width: '100%',
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                <h1>Connect with me</h1>
            </Box>
            <Box className={"contact-icons centered"} sx={{ width: '100%', textAlign: 'center' }}>
                <Box sx={{ display: isDesktop || isTablet ? 'inline-flex' : '', gap: '2rem' }}>
                    <Box className={"each-contact animation"}>
                        <Typography sx={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw' }}>
                            GitHub
                        </Typography>
                        <a href="https://github.com/joshmorenx" target="_blank" rel="noopener noreferrer"><GithubIcon sx={{ color: 'white', fontSize: isDesktop ? '3.5vw' : isTablet ? '4.5vw' : '5.5vw' }} /></a>
                    </Box>
                    <Box className={"each-contact animation"}>
                        <Typography sx={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw' }}>
                            LinkedIn
                        </Typography>
                        <a href="https://www.linkedin.com/in/joshua-emmanuel-aranda-moreno/" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ color: '#0A66C2', fontSize: isDesktop ? '3.5vw' : isTablet ? '4.5vw' : '5.5vw' }} /></a>
                    </Box>
                    <Box className={"each-contact animation"}>
                        <Typography sx={{ color: 'white', fontSize: isDesktop ? '2.5vw' : isTablet ? '4.5vw' : '5.5vw' }}>
                            WhatsApp
                        </Typography>
                        <a href="https://wa.me/529993853588" target="_blank" rel="noopener noreferrer"><WhatsAppIcon sx={{ color: 'green', fontSize: isDesktop ? '3.5vw' : isTablet ? '4.5vw' : '5.5vw' }} /></a>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}