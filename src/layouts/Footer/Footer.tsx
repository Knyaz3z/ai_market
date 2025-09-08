import type { FC } from 'react';
import './Footer.scss';

export type FooterLink = {
    id: number;
    title: string;
    url: string;
    external?: boolean;
};

export type SocialLink = {
    id: number;
    name: string;
    url: string;
    icon: string;
};

export type FooterProps = {
    companyName?: string;
    year?: number;
    links?: FooterLink[];
    socialLinks?: SocialLink[];
    contactEmail?: string;
    contactPhone?: string;
};

export const Footer: FC<FooterProps> = ({
                                            companyName = "Ваша компания",
                                            year = new Date().getFullYear(),
                                            links = defaultLinks,
                                            socialLinks = defaultSocialLinks,
                                            contactEmail = "test@yandex.ru",
                                            contactPhone = "+7 (917) 303-85-85"
                                        }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Верхняя часть футера */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="footer-company-name">{companyName}</h3>
                        <p className="footer-tagline">Инновационные решения для вашего бизнеса</p>
                    </div>

                    <div className="footer-links-section">
                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Компания</h4>
                            <ul className="footer-links">
                                {links.filter(link => link.id <= 3).map(link => (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            className="footer-link"
                                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Ресурсы</h4>
                            <ul className="footer-links">
                                {links.filter(link => link.id > 3).map(link => (
                                    <li key={link.id}>
                                        <a
                                            href={link.url}
                                            className="footer-link"
                                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-links-group">
                            <h4 className="footer-links-title">Контакты</h4>
                            <div className="footer-contacts">
                                <a href={`mailto:${contactEmail}`} className="footer-contact-link">
                                    ✉️ {contactEmail}
                                </a>
                                <a href={`tel:${contactPhone.replace(/\D/g, '')}`} className="footer-contact-link">
                                    📞 {contactPhone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Разделительная линия */}
                <div className="footer-divider"></div>

                {/* Нижняя часть футера */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© {year} {companyName}. Все права защищены.</p>
                    </div>

                    <div className="footer-social">
                        {socialLinks.map(social => (
                            <a
                                key={social.id}
                                href={social.url}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img alt='social' src={social.icon} className="social-icon"/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Данные по умолчанию
const defaultLinks: FooterLink[] = [
    { id: 1, title: "О нас", url: "#about" },
    { id: 2, title: "Услуги", url: "#services" },
    { id: 3, title: "Кейсы", url: "#cases" },
    { id: 4, title: "Блог", url: "#blog" },
    { id: 5, title: "FAQ", url: "#faq" },
    { id: 6, title: "Документы", url: "#docs" }
];

const defaultSocialLinks: SocialLink[] = [
    { id: 1, name: "Telegram", url: "https://t.me/testBot22", icon: "📱" },
    { id: 2, name: "WhatsApp", url: "https://wa.me/79173038585", icon: "💬" },
    { id: 3, name: "Email", url: "mailto:test@yandex.ru", icon: "✉️" },
    { id: 4, name: "VK", url: "#", icon: "🔷" }
];