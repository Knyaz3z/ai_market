import type {FC} from 'react'
import './Layout.scss'
import {Outlet} from "react-router";
import {Header} from "../Header/Header.tsx";
import {Footer} from "../Footer/Footer.tsx";

export type LayoutProps = {}

const yourContacts = [
    {
        id: 1,
        name: "Телефон",
        url: "tel:+79173038585",   // 👈 сюда форматированный URL
        icon: "contacts_phone.svg"
    },
    {
        id: 2,
        name: "Email",
        url: "mailto:test@yandex.ru",
        icon: "contacts_mail.svg"
    },
    {
        id: 3,
        name: "Telegram",
        url: "https://t.me/demetr_matvey",
        icon: "social_tg.svg"
    }
];


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
                socialLinks={yourContacts}
            />
        </>
    )
}