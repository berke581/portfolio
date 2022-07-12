import React, { useMemo } from 'react'
import { SiGithub, SiLinkedin, SiMedium } from 'react-icons/si'
import { Divider, Icon } from 'components'
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
            element={SiLinkedin}
            size={20}
            color={styles.colors.linkedIn}
          />
          <Divider direction="vertical" />
          <Icon
            href="https://github.com/berke581"
            element={SiGithub}
            size={20}
            color={styles.colors.gitHub}
          />
          <Divider direction="vertical" />
          <Icon
            href="https://medium.com/@berkeyoncaci"
            element={SiMedium}
            size={20}
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
