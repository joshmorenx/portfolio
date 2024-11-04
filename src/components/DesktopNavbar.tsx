import { Box, Button } from "@mui/material"
import { useState, useEffect } from 'react';

interface DesktopNavbarProps {
    navbarStyleDesktop: React.CSSProperties
}

export default function DesktopNavbar({ navbarStyleDesktop }: DesktopNavbarProps): JSX.Element {
    const [fstFlip, setFstFlip] = useState(false);
    const [secFlip, setSecFlip] = useState(false);
    const [thrdFlip, setThrdFlip] = useState(false);
    const [fourthFlip, setFourthFlip] = useState(false);

    useEffect(() => {   
        setTimeout(() => setFstFlip(true), 500);
    }, [])

    useEffect(() => {
        if (fstFlip) {
            setTimeout(() => setSecFlip(true), 250);
        }
        if (secFlip) {
            setTimeout(() => setThrdFlip(true), 250);
        } 
        if (thrdFlip) {
            setTimeout(() => setFourthFlip(true), 250);
        }
    }, [fstFlip, secFlip, thrdFlip, fourthFlip])

    return (
        <>
            {
                <Box sx={navbarStyleDesktop}>
                    <Button className={fstFlip ? 'flipInX' : ''} sx={{ height: '100%', color: 'white', visibility: fstFlip ? 'visible' : 'hidden' }}>Home</Button>
                    <Button className={secFlip ? 'flipInX' : '' } sx={{ height: '100%', color: 'white', visibility: secFlip ? 'visible' : 'hidden' }}>Projects</Button>
                    <Button className={thrdFlip ? 'flipInX' : ''} sx={{ height: '100%', color: 'white', visibility: thrdFlip ? 'visible' : 'hidden' }}>Resume</Button>
                    <Button className={fourthFlip ? 'flipInX' : ''} sx={{ height: '100%', color: 'white', visibility: fourthFlip ? 'visible' : 'hidden' }}>Contact</Button>
                </Box>
            }
        </>
    )
}