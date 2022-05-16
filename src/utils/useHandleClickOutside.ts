import { RefObject, useEffect } from 'react'

export const useHandleClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  // Call the callback function when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    // TODO: handle any
    if (ref.current && !ref.current.contains(event.target as any)) {
      callback()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside)
    }
  })
}
