import React, { FC } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import styles from './styles.module.scss'

import { ButtonProps } from '@/shared/interfaces'

import CircleButton from '@/shared/ui/buttons/circle'

interface ArrowButtonProps extends ButtonProps {}

const ArrowButton: FC<ArrowButtonProps> = ({ palette, onClick, ...props }) => {
    return (
        <CircleButton
            className={cn(styles.button, { [styles.second]: palette === 'second' })}
            onClick={onClick}
            {...props}>
            <Image src='images/vector/arrow.svg' alt='Arrow' width={10} height={10} />
        </CircleButton>
    )
}

export default ArrowButton
