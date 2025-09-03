import type { FC } from 'react'
import './Prices.scss'
import {Button} from "../../Button/Button.tsx";


export type PriceCard = {
    id: number
    title: string
    price: string
    list: string[]
    desc: string
    popular?: boolean
}

const pricesData: PriceCard[] = [
    {
        id: 1,
        title: 'Разработка автоматизации',
        price: 'от 50 000 руб.',
        list: [
            'Анализ компании',
            'Разработка алгоритмов',
            'Интеграция с системами',
            'Тестирование и отладка',
            'Техническое сопровождение',
            'Обучение сотрудников'
        ],
        desc: 'Разработка и внедрение ИИ-автоматизации в ваш бизнес',
        popular: true
    },
    {
        id: 2,
        title: 'Настройка рекламы',
        price: 'от 20 000 руб.',
        list: [
            'Анализ целевой аудитории',
            'Создание рекламных материалов',
            'Настройка рекламных кампаний',
            'Запуск и мониторинг',
            'Анализ эффективности'
        ],
        desc: 'Разработка и запуск рекламной кампании в Яндекс.Директ'
    },
    {
        id: 3,
        title: 'Создание лендинга',
        price: 'от 30 000 руб.',
        list: [
            'Дизайн и прототипирование',
            'Адаптивная вёрстка',
            'SEO-оптимизация',
            'Наполнение контентом',
            'Запуск и аналитика'
        ],
        desc: 'Разработка и запуск лендинга для вашего бизнеса'
    }
]

export type PricesProps = {
    className?: string
}

const PriceCard: FC<PriceCard> = ({ title, price, list, desc, popular }) => {
    return (
        <article className={`prices__card ${popular ? 'prices__card--popular' : ''}`}>
            {popular && (
                <div className="prices__badge">Популярный</div>
            )}

            <div className="prices__card-header">
                <h3 className="prices__card-title">{title}</h3>
                <p className="prices__card-desc">{desc}</p>
            </div>

            <div className="prices__card-price">
                <span className="prices__card-amount">{price}</span>
            </div>

            <ul className="prices__card-list">
                {list.map((item, index) => (
                    <li key={index} className="prices__card-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="prices__card-icon">
                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                    </li>
                ))}
            </ul>

            <div className="prices__card-footer">
                <Button
                    label={popular ? "Заказать" : "Подробнее"}
                    isLink={false}
                    variant={"primary"}
                />
            </div>
        </article>
    )
}

export const Prices: FC<PricesProps> = ({ className = '' }) => {
    return (
        <section className={`prices ${className}`}>
            <div className="prices__container container">
                <header className="prices__header">
                    <h2 className="prices__title">Наши тарифы</h2>
                    <p className="prices__subtitle">Выберите подходящее решение для вашего бизнеса</p>
                </header>

                <div className="prices__grid">
                    {pricesData.map((price) => (
                        <PriceCard key={price.id} {...price} />
                    ))}
                </div>
            </div>
        </section>
    )
}