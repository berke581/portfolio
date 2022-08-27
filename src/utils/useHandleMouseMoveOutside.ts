import { useEffect } from 'react'

export const useHandleMouseMoveOutside = (element: HTMLElement | null, callback: () => void) => {
  // Call the callback function when mouse moves outside element
  const handleMouseMoveOutside = (event: MouseEvent) => {
    // NOTE: casting due to: https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node
    if (element && !element.contains(event.target as HTMLElement)) {
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
