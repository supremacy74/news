import React from 'react'

import cn from 'classnames'

import styles from './styles.module.scss'

import Logo from '@/shared/ui/logo'
import CombinationButton from '@/shared/ui/buttons/combination'
import AdditionalButton from '@/shared/ui/buttons/additional'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={cn('container', styles.content)}>
                <div className={styles.copyright}>
                    <Logo />
                    <p>
                        © НАЗВАНИЕ 2023. <br /> Все права защищены
                    </p>
                </div>
                <nav className={styles.navbar}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a className={styles.link} href='#'>
                                Контакты
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href='#'>
                                Редакция
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a className={styles.link} href='#'>
                                Политика конфиденциальности
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href='#'>
                                Условия использования
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a className={styles.link} href='#'>
                                Реклама
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.meta}>
                    <p className={styles.contacts}>
                        По любым вопросам <br /> пишите на <a href='#'>privet@yandex.com</a>
                    </p>
                    <AdditionalButton className={styles.subscribe} view='accent' onClick={() => {}}>
                        Предложить новость
                    </AdditionalButton>
                    <CombinationButton
                        className={styles.telegram}
                        src='telegram'
                        alt=''
                        onClick={() => {}}>
                        Подписаться
                    </CombinationButton>
                </div>
            </div>
        </footer>
    )
}

export default Footer
