import type { FC } from 'react'
import './Services.scss'
import { Button } from "../../Button/Button.tsx"

export type ServicesProps = {
    className?: string
}

export type ServiceCard = {
    title: string
    imgLink: string
    text: string
}

const servicesData: ServiceCard[] = [
    {
        title: 'ИИ бизнес-ассистент в Telegram',
        imgLink: '/services_1.webp',
        text: 'Внедряем искусственный интеллект в ваши Telegram-боты для повышения эффективности бизнеса. Ваш личный маркетолог, юрист или психолог всегда под рукой.',
    },
    {
        title: 'Настройка автопостинга в Telegram',
        imgLink: '/services_2.webp',
        text: 'Автоматическое ведение каналов. ИИ анализирует новости, создает уникальный контент и публикует его автоматически.',
    },
    {
        title: 'ИИ консультант по телефону',
        imgLink: '/services_3.webp',
        text: 'Проконсультирует клиента онлайн, соберет информацию и перенесет в вашу CRM-систему. Активные продажи 24/7.',
    }
]

const ServiceCard: FC<ServiceCard> = ({ title, imgLink, text }) => {
    return (
        <article className="services__card">
            <img
                src={imgLink}
                alt={title}
                loading="lazy"
                width={400}
                height={300}
            />
            <div className="services__card-content">
                <h3 className="services__card-title">{title}</h3>
                <p className="services__card-text">{text}</p>
            </div>
            <div className="services__card-button">
                <Button label="Хочу подробности" isLink={false} />
            </div>
        </article>
    )
}

export const Services: FC<ServicesProps> = ({ className = '' }) => {
    return (
        <section id={'services'} className={`services ${className}`}>
            <div className="services__container container">
                <header className="services__header">
                    <h2 className="services__title">Наши услуги</h2>
                </header>

                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}