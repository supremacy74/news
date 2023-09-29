import React, { FC } from 'react'

import cn from 'classnames'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ButtonProps } from '@/shared/interfaces'

import CircleButton from '@/shared/ui/buttons/circle'

interface SearchButtonProps extends ButtonProps {}

const SearchButton: FC<SearchButtonProps> = ({ className, onClick, ...props }) => {
    return (
        <CircleButton className={cn(className, styles.button)} onClick={onClick} {...props}>
            <Image src='images/vector/search.svg' alt='Search' width={10} height={10} />
        </CircleButton>
    )
}

export default SearchButton
