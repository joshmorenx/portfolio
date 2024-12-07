import { Stack, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

interface TabletNavbarProps {
    navbarStyleTablet: React.CSSProperties;
}

export default function TabletNavbar({ navbarStyleTablet }: TabletNavbarProps): JSX.Element {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [classAttribute, setClassAttribute] = useState('idle');

    const hiddenLeftDrawerStyle: React.CSSProperties = {
        position: 'fixed',
        top: '0',
        left: '-100%',
        width: '95%',
        height: '100%',
        zIndex: '1',
        backgroundColor: '#333333',
        alignContent: 'center',
        textAlign: 'center',
        transition: 'left 1s ease-in-out',
    }

    function closeOpenDrawer(option: string): void {
        switch (option) {
            case 'openDrawer':
                setClassAttribute('fadeInLeft');
                break;
            case 'closeDrawer':
                setClassAttribute('fadeOutLeft');
                break;  
        }
        setIsDrawerOpen(!isDrawerOpen);
    }

    useEffect(() => {
        setClassAttribute('idle');
    }, []);

    return (
        <>
        <Button sx={{ color: 'white', position: 'fixed', top: '0', left: '0', zIndex: '1'}} onClick={()=>closeOpenDrawer('openDrawer')}><MenuIcon /></Button>
            <Stack className={classAttribute} direction="column" sx={!isDrawerOpen ? hiddenLeftDrawerStyle : navbarStyleTablet}>
                <Button sx={{ color: 'white', width: '10%' }} onClick={()=>closeOpenDrawer('closeDrawer')}><CloseIcon /></Button>
                <Button sx={{ color: 'white' }}>Home</Button>
                <Button sx={{ color: 'white' }}>Projects</Button>
                <Button sx={{ color: 'white' }}>Resume</Button>
                <Button sx={{ color: 'white' }}>Contact</Button>
            </Stack>
        </>
    )
}