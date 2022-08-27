import { RefObject, useEffect } from 'react'

export const useHandleClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  // Call the callback function when clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    // NOTE: casting due to: https://stackoverflow.com/questions/61164018/typescript-ev-target-and-node-contains-eventtarget-is-not-assignable-to-node
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
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
