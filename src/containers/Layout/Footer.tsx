import React from 'react'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Divider, Icon } from 'components'
import { DeviceType, useDeviceType } from 'utils/useDeviceType'
import * as styles from './styles'

// TODO: maybe create HyperLink component
export const Footer: React.FC = () => {
  const deviceType = useDeviceType()

  return (
    <footer className={styles.footerFlex}>
      {deviceType !== DeviceType.MOBILE && (
        <div>
          Created by Berke using&nbsp;
          <a href="https://www.gatsbyjs.com/" className={styles.link}>
            Gatsby
          </a>
          &nbsp;and&nbsp;
          <a href="https://tailwindcss.com/" className={styles.link}>
            Tailwind CSS
          </a>
          .
        </div>
      )}
      <div className={styles.footerInnerFlex}>
        <a href="mailto:berkeyoncaci@gmail.com" className={styles.link}>
          Contact
        </a>
        <Divider direction="vertical" />
        <div className={styles.footerLocationFlex}>
          <Icon
            className={styles.mapMarker}
            icon={faMapMarkerAlt}
            size="lg"
            color={styles.colors.mapMarker}
          />
          <div>Ankara, Turkey</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
