import React, { FC, useState } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

import { ButtonProps } from '@/shared/interfaces'

import Button from '@/shared/ui/button'

interface BookmarkButtonProps extends ButtonProps {
    isSelected?: boolean
}

const BookmarkButton: FC<BookmarkButtonProps> = ({ isSelected, onClick }) => {
    const [current, setCurrent] = useState(isSelected ? 'selected-bookmark' : 'default-bookmark')

    return (
        <button
            className={styles.button}
            onMouseOut={() => current === 'neutral-bookmark' && setCurrent('default-bookmark')}
            onMouseOver={() => current === 'default-bookmark' && setCurrent('neutral-bookmark')}
            onClick={() => setCurrent('selected-bookmark')}>
            <Image src={`images/vector/${current}.svg`} alt='Bookmark' width={20} height={20} />
        </button>
    )
}

export default BookmarkButton
