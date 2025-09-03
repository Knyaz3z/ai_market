import type {FC} from 'react'
import './Hero.scss'
import {Button} from "../../Button/Button.tsx";

export type HeroProps = {}

export const Hero: FC<HeroProps> = ({}) => {
    return (
        <section className="hero">
            {/* Фон вынесен в основной контейнер hero */}
            <div className="hero__content container">
                <div className="hero__text">
                    <h1 className="hero__title">Автоматизация бизнес-процессов при помощи ИИ</h1>
                    <p className="hero__subtitle">Отдайте рутинные задачи искусственному интеллекту</p>
                    <Button label="Проконсультируйтесь с ИИ" isLink={false} />
                </div>

                <div className="hero__features">
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Иконка" width={40} height={40} />
                        <h4>Экономия времени</h4>
                        <p>Освободите себе и своим сотрудникам до 8 часов. ИИ работает в разы быстрее людей и может решать самые сложные задачи</p>
                    </div>
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Иконка" width={40} height={40} />
                        <h4>Повышение эффективности</h4>
                        <p>Автоматизация процессов позволяет сосредоточиться на стратегических задачах</p>
                    </div>
                    <div className="hero__feature">
                        <img src="/check-circle.svg" alt="Иконка" width={40} height={40} />
                        <h4>Снижение ошибок</h4>
                        <p>ИИ минимизирует человеческий фактор в рутинных операциях</p>
                    </div>
                </div>
            </div>
        </section>
    )
}