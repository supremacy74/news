import React, { FC } from 'react'

import styles from './styles.module.scss'

import Button from '@/shared/ui/button'

import { ButtonProps } from '@/shared/interfaces'

interface MainButtonProps extends ButtonProps {}

const MainButton: FC<MainButtonProps> = ({ children, view, onClick, ...props }) => {
    return (
        <Button className={styles.button} view={view} onClick={onClick} {...props}>
            {children}
        </Button>
    )
}

export default MainButton
