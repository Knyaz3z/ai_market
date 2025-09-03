import type { FC } from 'react'
import { useState} from 'react'
import './Faq.scss'

export type faqType = {
    id: number
    title: string
    desc: string
}

const faqArr: faqType[] = [
    {
        id: 1,
        title: 'Сколько стоят ваши услуги?',
        desc: 'Стоимость зависит от сложности проекта и объема работ. Мы предлагаем индивидуальный расчет после анализа ваших потребностей. Базовые решения начинаются от 15 000 рублей, комплексная автоматизация - от 50 000 рублей.',
    },
    {
        id: 2,
        title: 'Какие сроки выполнения работ?',
        desc: 'Сроки варьируются от 3 до 14 рабочих дней в зависимости от сложности проекта. Простые интеграции занимают 3-5 дней, комплексные решения - 7-14 дней. Точные сроки определяем после технического аудита.',
    },
    {
        id: 3,
        title: 'Какие у вас гарантии?',
        desc: 'Предоставляем 30-дневную гарантию на все работы. В течение этого периода бесплатно исправляем любые недочеты и обеспечиваем техническую поддержку. Также помогаем с обучением вашей команды.',
    },
    {
        id: 4,
        title: 'Что вы можете сделать для продвижения?',
        desc: 'Мы создаем ИИ-контент для автоматического постинга, настраиваем чат-ботов для привлечения клиентов, внедряем голосовых ассистентов для обработки звонков и разрабатываем персонализированные маркетинговые стратегии на основе анализа данных.',
    },
    {
        id: 5,
        title: 'Нужно ли мне техническое образование для работы с вашими решениями?',
        desc: 'Нет, все наши решения разработаны с учетом простоты использования. Мы предоставляем подробные инструкции и проводим обучение ваших сотрудников. Техническая поддержка доступна 24/7.',
    },
    {
        id: 6,
        title: 'Как происходит процесс внедрения?',
        desc: 'Процесс включает: 1) Консультацию и анализ потребностей, 2) Разработку прототипа, 3) Внедрение и тестирование, 4) Обучение сотрудников, 5) Техническую поддержку. Все этапы согласовываются с вами.',
    }
]

export type FaqProps = {
    className?: string
}

export const Faq: FC<FaqProps> = ({ className = '' }) => {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (id: number) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    return (
        <section className={`faq ${className}`}>
            <div className="faq__container container">
                <header className="faq__header">
                    <h2 className="faq__title">Часто задаваемые вопросы</h2>
                    <p className="faq__subtitle">Все что вы хотели знать о наших услугах</p>
                </header>

                <div className="faq__content">
                    {faqArr.map((item) => (
                        <div
                            key={item.id}
                            className={`faq__item ${openItems.includes(item.id) ? 'faq__item--active' : ''}`}
                        >
                            <button
                                className="faq__question"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={openItems.includes(item.id)}
                            >
                                <span className="faq__question-text">{item.title}</span>
                                <span className="faq__icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                            </button>

                            <div className="faq__answer">
                                <div className="faq__answer-content">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}