import React, { useMemo } from 'react'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { Icon } from 'components'
import { Menu } from 'containers'
import { useDeviceType, DeviceType } from 'utils/useDeviceType'
import ClientOnly from 'utils/ClientOnly'
import * as styles from './styles'

export const Header: React.FC = () => {
  const deviceType = useDeviceType()

  const isHamburger = useMemo(() => deviceType === DeviceType.MOBILE, [deviceType])

  return (
    <header className={styles.headerFlex}>
      <div className={styles.headerInnerFlex}>
        Berke YONCACI
        <div className={styles.iconFlex}>
          <Icon
            href="https://www.linkedin.com/in/berkeyoncaci"
            icon={faLinkedin}
            size="lg"
            color={styles.colors.linkedIn}
          />
          <Icon
            href="https://github.com/berke581"
            icon={faGithub}
            size="lg"
            color={styles.colors.gitHub}
          />
          <Icon
            href="https://medium.com/@berkeyoncaci"
            icon={faMedium}
            size="lg"
            color={styles.colors.medium}
          />
        </div>
      </div>

      <ClientOnly>
        <div>
          <Menu isHamburger={isHamburger} />
        </div>
      </ClientOnly>
    </header>
  )
}

export default Header
