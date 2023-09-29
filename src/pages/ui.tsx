import React from 'react'

import styles from './styles/ui.module.scss'

import MainButton from '@/shared/ui/buttons/main'
import AdditionalButton from '@/shared/ui/buttons/additional'
import SwitchButton from '@/shared/ui/buttons/switch'
import CrossButton from '../shared/ui/buttons/cross'
import ArrowButton from '@/shared/ui/buttons/arrow'
import BookmarkButton from '@/shared/ui/buttons/bookmark'
import CombinationButton from '@/shared/ui/buttons/combination'

import Header from '@/shared/ui/header'

const Ui = () => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <h2 className={styles.heading}>Кнопки</h2>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <MainButton onClick={() => {}}>Текст</MainButton>
                        <MainButton view='accent' onClick={() => {}}>
                            Текст
                        </MainButton>
                        <MainButton disabled onClick={() => {}}>
                            Текст
                        </MainButton>
                        <MainButton view='accent' disabled onClick={() => {}}>
                            Текст
                        </MainButton>
                    </div>
                    <div className={styles.row}>
                        <AdditionalButton onClick={() => {}}>Отправить</AdditionalButton>
                        <AdditionalButton view='accent' onClick={() => {}}>
                            Отправить
                        </AdditionalButton>
                        <AdditionalButton disabled onClick={() => {}}>
                            Отправить
                        </AdditionalButton>
                        <AdditionalButton view='accent' disabled onClick={() => {}}>
                            Отправить
                        </AdditionalButton>
                    </div>
                    <div className={styles.row}>
                        <SwitchButton view='unselected' onClick={() => {}}>
                            Хоккей
                        </SwitchButton>
                        <SwitchButton view='selected' onClick={() => {}}>
                            Хоккей
                        </SwitchButton>
                    </div>
                    <div className={styles.row}>
                        <CrossButton view='big' onClick={() => {}} />
                        <CrossButton onClick={() => {}} />
                        <CrossButton palette='second' onClick={() => {}} />
                    </div>
                    <div className={styles.row}>
                        <ArrowButton onClick={() => {}} />
                        <ArrowButton palette='second' onClick={() => {}} />
                    </div>
                    <div className={styles.row}>
                        <BookmarkButton onClick={() => {}} />
                        <BookmarkButton onClick={() => {}} />
                    </div>
                    <div className={styles.row}>
                        <CombinationButton src='share' alt='Share' onClick={() => {}}>
                            Скопировать ссылку
                        </CombinationButton>
                        <CombinationButton
                            view='big'
                            src='telegram'
                            alt='Telegram'
                            onClick={() => {}}>
                            Telegram
                        </CombinationButton>
                    </div>
                    <div className={styles.row}>
                        <Header />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ui
