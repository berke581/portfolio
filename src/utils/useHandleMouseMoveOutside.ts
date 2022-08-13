import { useEffect } from 'react'

export const useHandleMouseMoveOutside = (element: HTMLElement | null, callback: () => void) => {
  // Call the callback function when mouse moves outside element
  const handleMouseMoveOutside = (event: MouseEvent) => {
    // TODO: handle any
    if (element && !element.contains(event.target as any)) {
      callback()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mouseover', handleMouseMoveOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseover', handleMouseMoveOutside)
    }
  })
}
