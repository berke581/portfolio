import { useMediaQuery } from 'react-responsive'

export enum DeviceType {
  MOBILE,
  TABLET,
  PC,
}

export const useDeviceType = () => {
  // const isMobile = useMediaQuery({
  //   minWidth: 320,
  // })
  const isTablet = useMediaQuery({
    minWidth: 481,
  })
  const isPC = useMediaQuery({
    minWidth: 769,
  })

  return isPC ? DeviceType.PC : isTablet ? DeviceType.TABLET : DeviceType.MOBILE
}
