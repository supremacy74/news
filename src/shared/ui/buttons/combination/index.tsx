import React, { FC } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import styles from './styles.module.scss'

import Button from '@/shared/ui/button'

import { ButtonProps } from '@/shared/interfaces'

interface CombinationButtonProps extends ButtonProps {
    src: string
    alt: string
}

const CombinationButton: FC<CombinationButtonProps> = ({
    src,
    alt,
    className,
    children,
    onClick,
    ...props
}) => {
    return (
        <Button className={cn(className, styles.button)} onClick={() => {}}>
            <Image src={`images/vector/${src}.svg`} alt={alt} width={20} height={20} />
            <span className={styles.text}>{children}</span>
        </Button>
    )
}

export default CombinationButton
