import React from 'react'
import * as styles from './styles'

// TODO: maybe create HyperLink component
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerFlex}>
      Berke YONCACI <span className="text-white">&bull;</span> 2022
    </footer>
  )
}

export default Footer
