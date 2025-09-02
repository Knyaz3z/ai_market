import {type FC, useState} from 'react'
import './Header.module.scss'

export type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {

    const [isMobileOpen, setIsMobileOpen] = useState(false)


    if (isMobileOpen) {
        return (
            <>
                <nav>

                </nav>
            </>
        )
    }

    return (
        <>
            <nav className='nav'>
                <img src="/AIMARKET_LOGO.svg" alt="logo"/>
                <ul className={'nav__links'}>
                    <li className="nav__items">Главная</li>
                    <li className="nav__items">Услуги</li>
                    <li className="nav__items">Условия</li>
                    <li className="nav__items">Статьи</li>
                    <li className="nav__items">Контакты</li>
                </ul>
            </nav>
        </>
    )
}