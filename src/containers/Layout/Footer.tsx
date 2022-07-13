import React from 'react'
import { MdAlternateEmail } from 'react-icons/md'
import tailwindColors from 'tailwindcss/colors'
import { Icon } from 'components'
import * as styles from './styles'

// TODO: maybe create HyperLink component
export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerFlex}>
      <div className={styles.footerInnerFlex}>
        {/* // TODO: fix no wrapping issue here
        // https://stackoverflow.com/questions/62016840/wrapping-text-in-flex-item-occupies-more-width-than-it-should?noredirect=1&lq=1 */}
        <span className="whitespace-nowrap">Berke YONCACI</span>
        <span className="text-white">&bull;</span>
        <span>2022</span>
      </div>
      <div>
        <Icon
          label={{ text: 'Contact', placement: 'left' }}
          href="mailto:berkeyoncaci@gmail.com"
          element={MdAlternateEmail}
          size={20}
          color={tailwindColors.teal['400']}
        />
      </div>
    </footer>
  )
}

export default Footer
