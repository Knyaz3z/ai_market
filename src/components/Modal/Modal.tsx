import React, { useState } from 'react';
import './Modal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !phone.trim()) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        console.log('Form submitted:', { name, phone });
        // Здесь можно отправлять данные на сервер
        onClose(); // закрываем модалку после отправки
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                <h2>Оставьте заявку</h2>
                <form onSubmit={handleSubmit} className="modal-form">
                    {error && <p className="modal-error">{error}</p>}
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
