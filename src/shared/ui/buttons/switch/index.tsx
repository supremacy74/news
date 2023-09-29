import React, { FC } from 'react'

import styles from './styles.module.scss'

import Button from '@/shared/ui/button'

import { ButtonProps } from '@/shared/interfaces'

interface SwitchButtonProps extends ButtonProps {}

const SwitchButton: FC<SwitchButtonProps> = ({ children, view, onClick, ...props }) => {
    return (
        <Button className={styles.button} view={view} onClick={onClick} {...props}>
            {children}
        </Button>
    )
}

export default SwitchButton
