import React from 'react'

import Image from 'next/image'

import { useStore } from 'effector-react'

import styles from './styles.module.scss'

import { formatDateToCustomString } from '@/shared/helpers'

import AccountButton from '@/shared/ui/buttons/account'

import Logo from '@/shared/ui/logo'
import Die from '@/shared/ui/die'

import Authorize from '@/features/authorize/ui'

import HamburgerButton from '@/shared/ui/buttons/hamburger'
import SearchButton from '@/shared/ui/buttons/search'

import { $isHidden, setIsHidden } from '@/widgets/navbar/model'

const Header = () => {
    const isHidden = useStore($isHidden)

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <Logo />
                    <div className={styles.part}>
                        <Die>
                            <div className={styles.row}>
                                <Image
                                    className={styles.icon}
                                    src='images/vector/calendar.svg'
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                <span>{formatDateToCustomString(Date.now())}</span>
                            </div>
                        </Die>
                        <Die>Партнер</Die>
                        <Die>Партнер</Die>
                        <Die>
                            <div className={styles.row}>
                                <Image
                                    className={styles.icon}
                                    src='images/vector/calendar.svg'
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                <span>96.34</span>
                            </div>
                        </Die>
                        <Die>
                            <div className={styles.row}>
                                <Image
                                    className={styles.icon}
                                    src='images/vector/calendar.svg'
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                <span>104.61</span>
                            </div>
                        </Die>
                        <Die>
                            <div className={styles.row}>
                                <Image
                                    className={styles.icon}
                                    src='images/vector/calendar.svg'
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                                <span>25.725</span>
                            </div>
                        </Die>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <SearchButton onClick={() => {}} />
                    <AccountButton onClick={() => {}} />
                    <Authorize />
                    <HamburgerButton onClick={() => setIsHidden(!isHidden)} />
                </div>
            </div>
        </header>
    )
}

export default Header
