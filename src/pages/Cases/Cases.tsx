import React, { useState } from "react";
import "./Cases.scss";
import {Link} from "react-router";

interface Case {
    id: number;
    title: string;
    category: "website" | "bot" | "automation";
    description: string;
    image: string;
}

const casesData: Case[] = [
    {
        id: 1,
        title: "Сайт для банного комплекса",
        category: "website",
        description: "Разработали современный сайт с удобной админкой и онлайн-бронированием.",
        image: "/images/case-bathhouse.jpg",
    },
    {
        id: 2,
        title: "Telegram-бот для продаж",
        category: "bot",
        description: "Автоматизировали обработку заявок и сделали интеграцию с CRM.",
        image: "/images/image.png",
    },
    {
        id: 3,
        title: "ИИ для клиентского сервиса",
        category: "automation",
        description: "Создали ассистента, который отвечает на вопросы клиентов в режиме 24/7.",
        image: "/images/case-ai.jpg",
    },
];

const categories = [
    { key: "all", label: "Все" },
    { key: "website", label: "Сайты" },
    { key: "bot", label: "Боты" },
    { key: "automation", label: "Автоматизация" },
];



const Cases: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const filteredCases =
        activeCategory === "all"
            ? casesData
            : casesData.filter((c) => c.category === activeCategory);

    return (
        <div className="cases container">
            <header className="cases__header">
                <h1 className="cases__title">Наши кейсы</h1>
                <p className="cases__subtitle">
                    Реальные проекты, которые помогают бизнесу работать эффективнее
                </p>
            </header>

            <div className="cases__filters">
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        className={`cases__filter-btn ${
                            activeCategory === cat.key ? "active" : ""
                        }`}
                        onClick={() => setActiveCategory(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="cases__grid">
                {filteredCases.map((item) => (
                    <div key={item.id} className="cases__card">
                        <img src={item.image} alt={item.title} className="cases__image" />
                        <div className="cases__content">
                            <h3 className="cases__card-title">{item.title}</h3>
                            <p className="cases__desc">{item.description}</p>
                            <Link to={`/cases/case${item.id}`} className="button primary">Подробнее</Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cases__cta">
                <h2>Хотите такой же результат?</h2>
                <p>Мы создадим решение под ваши задачи и бюджет.</p>
                <button className="cases__cta-btn">Связаться с нами</button>
            </div>
        </div>
    );
};

export default Cases;
