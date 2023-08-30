import { useRef, useEffect } from 'react'
import classes from './CustomCursor.module.css'

export const CustomCursor = () => {
  const cursorRef:any = useRef(null)
  useEffect(() => {
    if (cursorRef.current == null)
      return
    document.addEventListener('mousemove', e => {
      if (cursorRef.current == null)
        return
      cursorRef.current.setAttribute('style', 'top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;')
    })
    document.addEventListener('click', () => {
      if (cursorRef.current == null)
        return
      cursorRef.current.classList.add('expand')
      setTimeout(() => {
        if (cursorRef.current == null)
          return
        cursorRef.current.classList.remove('expand')
      }, 500)
    })
  }, [])
  return (
    <div className={classes.cursor} ref={cursorRef} />
  )
}
