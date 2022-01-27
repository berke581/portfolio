import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import * as styles from './styles'

export const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.contentArea}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
