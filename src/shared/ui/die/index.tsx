import React, { FC, ReactNode } from 'react'

import styles from './styles.module.scss'

interface DieProps {
    children: ReactNode
}

const Die: FC<DieProps> = ({ children }) => {
    return <div className={styles.die}>{children}</div>
}

export default Die
