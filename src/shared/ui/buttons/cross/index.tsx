import React, { FC } from 'react'

import Image from 'next/image'

import { ButtonProps } from '@/shared/interfaces'

import CircleButton from '@/shared/ui/buttons/circle'

interface CrossButtonProps extends ButtonProps {}

const CrossButton: FC<CrossButtonProps> = ({ onClick, ...props }) => {
    return (
        <CircleButton onClick={onClick} {...props}>
            <Image src='images/vector/cross.svg' alt='Cross' width={10} height={10} />
        </CircleButton>
    )
}

export default CrossButton
