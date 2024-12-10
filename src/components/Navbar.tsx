import { useMediaQuery } from "@mui/material"
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar(): JSX.Element {
    const isDesktop = useMediaQuery('(min-width: 900px)');
    const isTablet = useMediaQuery('(min-width: 426px) and (max-width: 899px)');
    const isMobile = useMediaQuery('(max-width: 425px)');

    const navbarStyleDesktop: React.CSSProperties = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '60px',
        zIndex: '1',
        backgroundColor: '#333333',
        alignContent: 'center',
        textAlign: 'center'
    }

    const navbarStyleTablet: React.CSSProperties = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '95%',
        height: '100%',
        zIndex: '1',
        backgroundColor: '#333333',
        alignContent: 'center',
        textAlign: 'center'
    }

    return (
        <>
            {isDesktop && <DesktopNavbar navbarStyleDesktop={navbarStyleDesktop} />}
            {(isTablet || isMobile) && <MobileNavbar navbarStyleTablet={navbarStyleTablet} />}
        </>
    )
}