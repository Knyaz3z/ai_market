import { type FC, useEffect, useState } from 'react'
import './Header.scss'
import { useIsMobile } from "../../hooks/useIsMobile.tsx"
import { useScrollToSection } from "../../hooks/useScrollToSection"
import { Link } from "react-router"

export type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useIsMobile()
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
    const scrollTo = useScrollToSection()
    const breakpoint = 200
    const [isSmall, setIsSmall] = useState<boolean>(false)

    useEffect(() => {
        // Инициализация состояния при монтировании
        setIsSmall(window.scrollY >= breakpoint)

        const handleScroll = () => {
            setIsSmall(window.scrollY > breakpoint)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [breakpoint])

    const handleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

    const handleMobileLinkClick = () => {
        setIsBurgerOpen(false)
    }

    const handleScrollClick = (sectionId: string) => {
        scrollTo(sectionId)
        setIsBurgerOpen(false)
    }

    const navItems = [
        { id: "services", label: "Услуги" },
        { id: "contacts", label: "Контакты" },
    ]

    if (isMobile) {
        return (
            <header>
                <nav className={`nav-mobile ${isSmall ? 'small' : ''}`}>
                    <Link to="/" onClick={handleMobileLinkClick}>
                        <img src="/AIMARKET_LOGO.svg" alt="logo" />
                    </Link>
                    <svg
                        className={`nav-burger ${isBurgerOpen ? 'open' : ''}`}
                        onClick={handleBurger}
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div
                        className={`nav-menu-overlay ${isBurgerOpen ? 'open' : ''}`}
                        onClick={handleBurger}
                    />
                    <ul className={`nav-links ${isBurgerOpen ? 'open' : ''}`}>
                        <li><Link to="/" className="nav-items" onClick={handleMobileLinkClick}>Главная</Link></li>
                        <li><Link to="/about" className="nav-items" onClick={handleMobileLinkClick}>О нас</Link></li>
                        <li><a className="nav-items" onClick={() => handleScrollClick('services')}>Услуги</a></li>
                        <li><Link to="/news" className="nav-items" onClick={handleMobileLinkClick}>Статьи</Link></li>
                        <li><a className="nav-items" onClick={() => handleScrollClick('contacts')}>Контакты</a></li>
                    </ul>
                </nav>
            </header>
        )
    }

    return (
        <header>
            <nav className={`nav ${isSmall ? 'small' : ''}`}>
                <Link to="/"><img src="/AIMARKET_LOGO.svg" alt="logo"/></Link>
                <div className='nav-links'>
                    <Link to="/" className="nav-items">Главная</Link>
                    <Link to="/about" className="nav-items">О нас</Link>
                    <Link to="/cases" className="nav-items">Кейсы</Link>
                    <a onClick={() => scrollTo('services')} className="nav-items">{navItems[0].label}</a>
                    <a onClick={() => scrollTo('contacts')} className="nav-items">{navItems[1].label}</a>
                </div>
            </nav>
        </header>
    )
}