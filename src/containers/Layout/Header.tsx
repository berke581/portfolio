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
            iconComponent={SiLinkedin}
            size={20}
            color={styles.colors.linkedIn}
          />
          <Divider direction="vertical" />
          <Icon
            href="https://github.com/berke581"
            iconComponent={SiGithub}
            size={20}
            color={styles.colors.gitHub}
          />
          <Divider direction="vertical" />
          <Icon
            href="https://medium.com/@berkeyoncaci"
            iconComponent={SiMedium}
            size={20}
            color={styles.colors.medium}
          />
        </div>
      </div>

      {/* TODO: skeleton here */}
      <ClientOnly>
        <div>
          <Menu
            options={[
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Projects',
                to: '/projects/',
              },
              {
                label: 'Contact',
                to: '/contact/',
              },
            ]}
            isHamburger={isHamburger}
          />
        </div>
      </ClientOnly>
    </header>
  )
}

export default Header
