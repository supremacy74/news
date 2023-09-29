import React, { FC } from 'react'

import styles from './styles.module.scss'

import { LayoutProps } from '@/widgets/layout/model'

import Header from '@/shared/ui/header'
import Footer from '@/shared/ui/footer'

import Navbar from '@/widgets/navbar/ui'

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <div className='container'>
                    <div className={styles.content}>
                        <Navbar />
                        <div>{children}</div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
