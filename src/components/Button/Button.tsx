import type { FC, MouseEventHandler } from 'react';
import './Button.scss';

type ButtonProps = {
    label: string;
    variant?: string;
    isLink: boolean;
    href?: string;
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button: FC<ButtonProps> = ({
                                            label,
                                            variant = 'primary',
                                            isLink,
                                            href,
                                            onClick
                                        }) => {

    if (isLink) {
        return (
            <a onClick={onClick} href={href} className={`button ${variant}`}>
                {label}
            </a>
        )
    }

    return <button onClick={onClick} className={`button ${variant}`}>{label}</button>
}
