import {type FC, useEffect, useState} from 'react'
import './Header.scss'
import {useIsMobile} from "../../hooks/useIsMobile.tsx";

export type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
    const isMobile = useIsMobile()
    const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false)


    const breakpoint = 200
    const [isSmall, setIsSmall] = useState<boolean>(window.scrollY >= breakpoint)
    useEffect(()=>{
        const handleScroll = () =>{
            setIsSmall(window.scrollY > breakpoint)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

    }, [breakpoint])

    const handleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen)
    }

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
                <img src="/AIMARKET_LOGO.svg" alt="logo"/>
                <ul className='nav-links'>
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