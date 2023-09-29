import React, { FC, useEffect } from 'react'

import styles from './styles.module.scss'

import cn from 'classnames'

import { ButtonProps } from '@/shared/interfaces'

const Button: FC<ButtonProps> = ({ children, className, view = 'default', onClick, ...props }) => {
    return (
        <button
            className={cn(
                className,
                styles.button,
                { [styles.accent]: view === 'accent' },
                { [styles.default]: view === 'default' },
                { [styles.unselected]: view === 'unselected' },
                { [styles.selected]: view === 'selected' }
            )}
            onClick={onClick}
            {...props}>
            {children}
        </button>
    )
}

export default Button
