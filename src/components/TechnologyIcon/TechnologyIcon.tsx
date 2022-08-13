import React from 'react'
import { Icon, Tooltip } from 'components'
import { TechnologyData, TechnologiesType } from './icons'

export type TechnologyIconProps = {
  name: TechnologiesType
  tooltipOnHover?: boolean
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ name, tooltipOnHover = false }) => {
  const iconData = TechnologyData[name].icon
  const iconLabel = TechnologyData[name].label

  return tooltipOnHover ? (
    <Tooltip
      text={iconLabel}
      element={<Icon iconComponent={iconData.iconComponent} color={iconData.color} size={23} />}
    />
  ) : (
    <Icon iconComponent={iconData.iconComponent} color={iconData.color} size={23} />
  )
}

export default TechnologyIcon
