import type { FC } from 'react'
import './Home.scss'
import {Hero} from "../../components/home/Hero/Hero.tsx";
import {Services} from "../../components/home/Services/Services.tsx";
import {Faq} from "../../components/home/Faq/Faq.tsx";
import {Prices} from "../../components/home/Prices/Prices.tsx";
import {Contacts} from "../../components/home/Contacts/Contacts.tsx";

export type HomeProps = {}

const yourContacts = [
    {
        id: 1,
        title: "Телефон",
        inner: "+7 (917) 303-85-85",
        icon: "📞"
    },
    {
        id: 2,
        title: "Email",
        inner: "test@yandex.ru",
        icon: "✉️"
    },
    {
        id: 3,
        title: "Telegram",
        inner: "@testBot22",
        icon: "📱"
    },
    {
        id: 4,
        title: "WhatsApp",
        inner: "+7 (917) 303-85-85",
        icon: "💬"
    }
];

export const Home: FC<HomeProps> = ({}) => {
    return (
        <>
            <Hero/>
            <Services/>
            <Faq/>
            <Prices/>
            <Contacts contacts={yourContacts}/>
        </>
    )
}