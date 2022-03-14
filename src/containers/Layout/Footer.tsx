import React from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Divider, Icon } from 'components'
import * as styles from './styles'

// TODO: maybe create HyperLink component
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerFlex}>
      <div>
        Created by Berke using{' '}
        <a href="https://www.gatsbyjs.com/" className={styles.link}>
          Gatsby
        </a>{' '}
        and{' '}
        <a href="https://tailwindcss.com/" className={styles.link}>
          Tailwind CSS
        </a>
        .
      </div>
      <div className={styles.footerInnerFlex}>
        <a href="mailto:berkeyoncaci@gmail.com" className={styles.link}>
          Contact
        </a>
        <Divider direction="row" />
        <span>
          <Icon
            className={styles.mapMarker}
            icon={faMapMarkerAlt}
            size="lg"
            color={styles.colors.mapMarker}
          />
          Ankara, Turkey
        </span>
      </div>
    </footer>
  )
}

export default Footer
