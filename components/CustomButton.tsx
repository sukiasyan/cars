'use client'

import Image from 'next/image'
import { CustomButtonStyles } from '@/types'

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType
}: CustomButtonStyles) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
