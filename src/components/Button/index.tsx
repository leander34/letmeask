import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
}

export function Button({ isOutlined = false, ...props}: ButtonProps) {
    return (
        <ButtonContainer isOutlined={isOutlined} {...props}/>
    )
}