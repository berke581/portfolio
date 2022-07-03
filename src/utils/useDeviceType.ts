import { useMediaQuery } from 'react-responsive'

export enum DeviceType {
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
}

export const useDeviceType = () => {
  // const isMobile = useMediaQuery({
  //   minWidth: 320,
  // })
  const isTablet = useMediaQuery({
    minWidth: 640,
  })
  const isLaptop = useMediaQuery({
    minWidth: 1024,
  })
  const isDesktop = useMediaQuery({
    minWidth: 1280,
  })

  return isDesktop
    ? DeviceType.DESKTOP
    : isLaptop
    ? DeviceType.LAPTOP
    : isTablet
    ? DeviceType.TABLET
    : DeviceType.MOBILE
}
