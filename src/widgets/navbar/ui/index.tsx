import React, { FC, useState } from 'react'

import Image from 'next/image'

import cn from 'classnames'

import { useStore } from 'effector-react'

import styles from './styles.module.scss'

import { $body, $isHidden, IBody, setIsHidden } from '@/widgets/navbar/model'

import CrossButton from '@/shared/ui/buttons/cross'
import { useRouter } from 'next/router'

const Navbar = () => {
    const body = useStore($body)

    const isHidden = useStore($isHidden)

    const router = useRouter()

    return (
        <nav className={cn(styles.navbar, { [styles.hidden]: isHidden })}>
            <CrossButton
                className={styles.button}
                view='big'
                onClick={() => setIsHidden(!isHidden)}
            />
            <ul className={styles.list}>
                {body.items.map((item) => {
                    const [isSelected, setIsSelected] = useState<boolean>(
                        router.pathname === item.href
                    )

                    console.log(router.pathname === item.href)

                    const [src, setSrc] = useState(item.icons[isSelected ? 1 : 0].src)
                    const [alt, setAlt] = useState(item.icons[isSelected ? 1 : 0].alt)

                    return (
                        <li key={item.id} className={styles.item}>
                            <a
                                className={cn(
                                    styles.link,
                                    { [styles.selected]: isSelected },
                                    { [styles.unselected]: !isSelected }
                                )}
                                href={item.href}>
                                <Image
                                    className={styles.icon}
                                    src={`images/vector/${src}.svg`}
                                    alt={alt}
                                    width={30}
                                    height={30}
                                />
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar
