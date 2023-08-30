import classes from './ScrollPromotion.module.css'
import { BsChevronDown } from 'react-icons/bs'

export const ScrollPromotion = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.scroll}>SCROLL</p>
      <div className={classes.icon_wrap}>
        <BsChevronDown size={50} />
      </div>
    </div>
  )
}
