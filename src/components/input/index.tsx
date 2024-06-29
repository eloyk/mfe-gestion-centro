import React from 'react'
import Interface from './interface'

export const Input = ({placeholder, className, value, type, onChange, size='md', disabled}: Interface) => {
  const style = 'rounded-md border border-input bg-secondary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
  const styleBySize = {
    md: 'px-3 py-2 h-10',
    sm: 'text-sm py-1 px-3'
  }
  return <>
    <input
      type={type}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      disabled={disabled}
      className={`${style} ${styleBySize[size]} ${className}`} />
  </>
}
