import type {FC} from 'react'
import './NotFound.scss'

export type NotFoundProps = {}

export const NotFound: FC<NotFoundProps> = ({}) => {
    return (
        <>
            404 Page not found
        </>
    )
}