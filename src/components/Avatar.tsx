import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props } : AvatarProps) {
  const isHasBorder = hasBorder !== false;

  return(
    <img className={
      isHasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}