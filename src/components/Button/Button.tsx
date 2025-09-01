import type {FC} from 'react'
import './Button.module.scss'

type Variant = 'primary' | 'secondary';

const variants: Record<Variant, string> = {
    primary: "btn-primary",
    secondary: "btn-secondary",
};

type ButtonProps = {
    label: string,
    variant?: Variant,
    isLink: boolean,
    href?: string,
}

export const Button: FC<ButtonProps> = ({
                                            label,
                                            variant = 'primary',
                                            isLink,
                                            href
                                        }) => {

    const className = variants[variant]

    if (isLink) {
        return (
            <a href={href} className={className}>
                {label}
            </a>
        )
    }
    return <button className={`${variant}`}>{label}</button>
}