import React from "react";
import "./Articles.scss";
import { Button } from "../../Button/Button.tsx";

interface Article {
    title: string;
    date: string;
    desc: string;
    imgLink: string;
}

const articles: Article[] = [
    {
        title: "ИИ в бизнесе: тренды 2025",
        date: "2025-09-02",
        desc: "Компании внедряют искусственный интеллект в бизнес-процессы, снижая затраты и повышая эффективность. Технологии автоматизируют аналитику, управление и коммуникации с клиентами.",
        imgLink: "/services_1.webp",
    },
    {
        title: "Нейросети в маркетинге",
        date: "2025-08-25",
        desc: "Генеративные модели помогают создавать уникальный контент, адаптировать рекламу под разные аудитории и ускорять тестирование гипотез. Это открывает новые возможности для бизнеса.",
        imgLink: "/services_2.webp",
    },
    {
        title: "Будущее голосовых ассистентов",
        date: "2025-08-10",
        desc: "ИИ-ассистенты становятся всё более человечными: они понимают речь, ведут диалог и помогают управлять повседневными задачами. Уже скоро они будут незаменимы в работе.",
        imgLink: "/services_3.webp",
    },
];

const Articles: React.FC = () => {
    return (
        <section className="articles">
            <header className="articles__header">
                <h2 className="articles__title">Полезные материалы</h2>
                <p className="articles__subtitle">
                    Читайте свежие статьи об искусственном интеллекте и его применении
                </p>
            </header>

            <div className="articles__grid">
                {articles.map((article, index) => (
                    <div className="articles__card" key={index}>
                        <img
                            src={article.imgLink}
                            alt={article.title}
                            className="articles__image"
                        />
                        <div className="articles__content">
                            <span className="articles__date">{article.date}</span>
                            <h3 className="articles__heading">{article.title}</h3>
                            <p className="articles__desc">{article.desc}</p>
                            <Button label="Читать далее" isLink={false} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;
