import { type FC, useState } from 'react';
import './Services.scss';
import { Button } from "../../Button/Button.tsx";
import Modal from "../../Modal/Modal.tsx";

export type ServicesProps = {
    className?: string;
};

export type ServiceCardType = {
    title: string;
    imgLink: string;
    text: string;
};

const servicesData: ServiceCardType[] = [
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
];

type ServiceCardProps = ServiceCardType & {
    onOpenModal: () => void;
};

const ServiceCard: FC<ServiceCardProps> = ({ title, imgLink, text, onOpenModal }) => {
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
                <Button onClick={onOpenModal} label="Хочу подробности" isLink={false}/>
            </div>
        </article>
    );
};

export const Services: FC<ServicesProps> = ({ className = '' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="services" className={`services ${className}`}>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="services__container container">
                <header className="services__header">
                    <h2 className="services__title">Наши услуги</h2>
                </header>

                <div className="services__grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            onOpenModal={() => setIsModalOpen(true)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
