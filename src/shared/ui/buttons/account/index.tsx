import React, { FC } from 'react'

import cn from 'classnames'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ButtonProps } from '@/shared/interfaces'

import CircleButton from '@/shared/ui/buttons/circle'

interface AccountButtonProps extends ButtonProps {}

const AccountButton: FC<AccountButtonProps> = ({ className, onClick, ...props }) => {
    return (
        <CircleButton className={cn(className, styles.button)} onClick={onClick} {...props}>
            <Image src='images/vector/account.svg' alt='Account' width={10} height={10} />
        </CircleButton>
    )
}

export default AccountButton
