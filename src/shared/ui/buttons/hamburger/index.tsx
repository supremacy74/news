import React, { FC, useState } from 'react'

import cn from 'classnames'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ButtonProps } from '@/shared/interfaces'

import CircleButton from '@/shared/ui/buttons/circle'

interface HamburgerButtonProps extends ButtonProps {}

const HamburgerButton: FC<HamburgerButtonProps> = ({ className, onClick, ...props }) => {
    return (
        <CircleButton className={cn(className, styles.button)} onClick={onClick} {...props}>
            <Image src='images/vector/hamburger.svg' alt='Hamburger' width={10} height={10} />
        </CircleButton>
    )
}

export default HamburgerButton
