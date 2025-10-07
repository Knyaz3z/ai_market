import React, { useState } from 'react';
import './CaseDetails.scss';
import { useParams } from 'react-router-dom'; // исправил на react-router-dom
import { Button } from "../../components/Button/Button.tsx";
import Modal from "../../components/Modal/Modal.tsx";


interface CaseDetailsProps {
    // можно добавить пропсы при необходимости
}

const casesData = [
    {
        id: "case1",
        title: "Сайт для банного комплекса",
        description:
            "Разработали современный сайт с удобной админкой и онлайн-бронированием. Улучшили UX, увеличили конверсию в бронирования на 35%.",
        image: "/images/case-bathhouse.jpg",
    },
    {
        id: "case2",
        title: "Telegram-бот для продаж",
        description:
            "Автоматизировали обработку заявок и сделали интеграцию с CRM. Бот отвечает 24/7, увеличив скорость обработки запросов в 3 раза.",
        image: "/images/image.png",
    },
    {
        id: "case3",
        title: "ИИ для клиентского сервиса",
        description:
            "Создали ассистента, который отвечает на вопросы клиентов и собирает данные. Это сократило нагрузку на менеджеров на 60%.",
        image: "/images/case-ai.jpg",
    },
];

const CaseDetails: React.FC<CaseDetailsProps> = () => {
    const { caseId } = useParams<{ caseId: string }>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const currentCase = casesData.find((c) => c.id === caseId);

    if (!currentCase) {
        return <div className={'case-detail container'}><h1>Кейс не найден</h1></div>;
    }

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className={'case-detail container'}>


                <h1>{currentCase.title}</h1>
                <img src={currentCase.image} alt={currentCase.title} />
                <div>
                    <p>{currentCase.description}</p>
                    <Button
                        label={'Хочу также!'}
                        isLink={false}
                        onClick={() => setIsModalOpen(true)}
                    />
                </div>
            </div>
        </>

    );
};

export default CaseDetails;
