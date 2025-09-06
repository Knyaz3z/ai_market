import type { FC } from 'react';
import './Contacts.scss';

export type ContactItem = {
    id: number;
    title: string;
    inner: string;
    icon?: string;
};

export type ContactsProps = {
    contacts: ContactItem[];
    title?: string;
    subtitle?: string;
};

export const Contacts: FC<ContactsProps> = ({
                                                contacts,
                                                title = "Свяжитесь с нами",
                                                subtitle = "Мы всегда на связи в удобном для вас мессенджере"
                                            }) => {
    // Функция для определения типа контакта и соответствующего действия
    const handleContactClick = (contact: ContactItem) => {
        if (contact.title.toLowerCase().includes('телефон')) {
            window.location.href = `tel:${contact.inner}`;
        } else if (contact.title.toLowerCase().includes('email') || contact.title.toLowerCase().includes('почта')) {
            window.location.href = `mailto:${contact.inner}`;
        } else if (contact.title.toLowerCase().includes('whatsapp')) {
            window.open(`https://wa.me/${contact.inner.replace(/\D/g, '')}`, '_blank');
        } else if (contact.title.toLowerCase().includes('telegram')) {
            window.open(`https://t.me/${contact.inner.replace('@', '')}`, '_blank');
        }
    };

    // Функция для получения иконки по умолчанию в зависимости от типа контакта
    const getDefaultIcon = (title: string): string => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('телефон')) return '📞';
        if (lowerTitle.includes('email') || lowerTitle.includes('почта')) return '✉️';
        if (lowerTitle.includes('whatsapp')) return '💬';
        if (lowerTitle.includes('telegram')) return '📱';
        return '📌';
    };

    return (
        <section className="contacts-block">
            <div className="contacts-container">
                <header className={'contacts__header header'}>
                    <h2 className="contacts-title title">{title}</h2>
                    <p className="contacts-subtitle subtitle">{subtitle}</p>
                </header>

                <div className="contacts-grid">
                    {contacts.map(contact => {
                        const isClickable = contact.title.toLowerCase().includes('телефон') ||
                            contact.title.toLowerCase().includes('email') ||
                            contact.title.toLowerCase().includes('почта') ||
                            contact.title.toLowerCase().includes('whatsapp') ||
                            contact.title.toLowerCase().includes('telegram');

                        return (
                            <div
                                key={contact.id}
                                className={`contact-card ${isClickable ? 'clickable' : ''}`}
                                onClick={() => isClickable && handleContactClick(contact)}
                            >
                                <div className="contact-icon">
                                    {contact.icon || getDefaultIcon(contact.title)}
                                </div>
                                <h3 className="contact-title">{contact.title}</h3>
                                <p className="contact-info">{contact.inner}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};