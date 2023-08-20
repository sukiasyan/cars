import { MouseEventHandler } from 'react'

export interface CustomButtonStyles {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}
