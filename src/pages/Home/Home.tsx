import type {FC} from 'react'
import './Home.scss'
import {Hero} from "../../components/home/Hero/Hero.tsx";
import {Services} from "../../components/home/Services/Services.tsx";
import {Faq} from "../../components/home/Faq/Faq.tsx";
import {Prices} from "../../components/home/Prices/Prices.tsx";
import {Contacts} from "../../components/home/Contacts/Contacts.tsx";
import {DashBoard} from "../../components/home/DashBoard/DashBoard.tsx";
import Articles from "../../components/home/Articles/Articles.tsx";

export type HomeProps = {}

const yourContacts = [
    {
        id: 1,
        title: "Телефон",
        inner: "+7 (917) 303-85-85",
        icon: "contacts_phone.svg"
    },
    {
        id: 2,
        title: "Email",
        inner: "test@yandex.ru",
        icon: "contacts_mail.svg"
    },
    {
        id: 3,
        title: "Telegram",
        inner: "@demetr_matvey",
        icon: "social_tg.svg"
    }
];

export const Home: FC<HomeProps> = ({}) => {
    return (
        <>
            <Hero/>
            <Services/>
            <Faq/>
            <Prices/>
            <DashBoard/>
            <Articles/>
            <Contacts contacts={yourContacts}/>
        </>
    )
}