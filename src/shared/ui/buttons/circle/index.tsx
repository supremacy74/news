import React, { FC } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import Image from 'next/image'

import Button from '@/shared/ui/button'

import { ButtonProps } from '@/shared/interfaces'

interface CircleButtonProps extends ButtonProps {}

const CircleButton: FC<CircleButtonProps> = ({
    className,
    children,
    palette,
    view,
    onClick,
    ...props
}) => {
    return (
        <Button
            className={cn(
                className,
                styles.button,
                { [styles.big]: view === 'big' },
                { [styles.small]: view === 'small' },
                { [styles.second]: palette === 'second' }
            )}
            onClick={onClick}
            {...props}>
            {children}
        </Button>
    )
}

export default CircleButton
