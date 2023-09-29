// Интерфейсы моделей

import React, { ButtonHTMLAttributes, ImgHTMLAttributes } from 'react'

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string
}

// Интерфейсы компонентов

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    view?: string
    palette?: string
    className?: string
    children?: React.ReactNode
}
