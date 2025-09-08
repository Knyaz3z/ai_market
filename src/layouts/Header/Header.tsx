import {type FC, useEffect, useState} from 'react'
import './Header.scss'
import {useIsMobile} from "../../hooks/useIsMobile.tsx";
import {useScrollToSection} from "../../hooks/useScrollToSection";
import {Link} from "react-router";

export type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useIsMobile()
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)
    const scrollTo = useScrollToSection()
    const breakpoint = 200
    const [isSmall, setIsSmall] = useState<boolean>(window.scrollY >= breakpoint)
    useEffect(() => {
        const handleScroll = () => {
            setIsSmall(window.scrollY > breakpoint)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [breakpoint])

    const handleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

    const navItems = [
        {id: "services", label: "Услуги"},
        {id: "contacts", label: "Контакты"},
    ]

    if (isMobile) {
        return (
            <header>
                <nav className={`nav-mobile ${isSmall ? 'small' : ''}`}>
                    <img src="/AIMARKET_LOGO.svg" alt="logo"/>
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
                        className={`nav-menu-overlay  ${isBurgerOpen ? 'open' : ''}`}
                        onClick={handleBurger}
                    />
                    <ul className={`nav-links ${isBurgerOpen ? 'open' : ''}`}>
                        <Link to={'about'}>О нас</Link>
                        <li className="nav-items">Главная</li>
                        <li className="nav-items">Услуги</li>
                        <li className="nav-items">Условия</li>
                        <li className="nav-items">Статьи</li>
                        <li className="nav-items">Контакты</li>
                    </ul>
                </nav>
            </header>
        )
    }

    return (
        <header>
            <nav className={`nav ${isSmall ? 'small' : ''}`}>
                <Link to={'/'}><img src="/AIMARKET_LOGO.svg" alt="logo"/></Link>
                <ul className='nav-links'>
                    <Link to={'/'} className="nav-items">Главная</Link>
                    <Link to={'about'} className="nav-items">О нас</Link>
                    <Link to={'articles'} className="nav-items">Статьи</Link>
                    <Link onClick={() => scrollTo('services')} className="nav-items">{navItems[0].label}</Link>
                    <Link onClick={() => scrollTo('contacts')} className="nav-items">{navItems[1].label}</Link>
                </ul>
            </nav>
        </header>
    )
}