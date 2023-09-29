import React, { FC } from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import Button from '@/shared/ui/button'

import { ButtonProps } from '@/shared/interfaces'

interface AdditionalButtonProps extends ButtonProps {}

const AdditionalButton: FC<AdditionalButtonProps> = ({
    className,
    children,
    view,
    onClick,
    ...props
}) => {
    return (
        <Button className={cn(className, styles.button)} view={view} onClick={onClick} {...props}>
            {children}
        </Button>
    )
}

export default AdditionalButton
