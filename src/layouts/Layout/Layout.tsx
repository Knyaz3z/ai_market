import type {FC} from 'react'
import './Layout.scss'
import {Outlet} from "react-router";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";

export type LayoutProps = {}

export const Layout: FC<LayoutProps> = ({}) => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer
                companyName="AIMARKET"
                contactEmail="test@yandex.ru"
                contactPhone="+7 (917) 303-85-85"
            />
        </>
    )
}