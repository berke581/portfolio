import React from 'react'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { Button, Divider, Icon } from 'components'
import * as styles from './styles'

export const Header: React.FC = () => {
  return (
    <header className={styles.headerFlex}>
      <div className={styles.headerInnerFlex}>
        Berke YONCACI
        <Divider direction="row" />
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
      <div>
        <Button to="/">Home</Button>
        {/* <Button to="/about">About</Button> */}
        {/* last slash is important for active page styling for button */}
        <Button to="/projects/">Projects</Button>
      </div>
    </header>
  )
}

export default Header
