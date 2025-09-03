import type {FC} from 'react'
import './Button.scss'

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



    if (isLink) {
        return (
            <a href={href} className={`button ${variant}`}>
                {label}
            </a>
        )
    }
    return <button className={`button ${variant}`}>{label}</button>
}