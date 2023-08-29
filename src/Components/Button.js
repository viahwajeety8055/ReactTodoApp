import React from 'react'
import './Button.css'

export default function Button(props) {
    const { title,clicked } = props;
  return (
    <div className='button' onClick={clicked}>{title}</div>
  )
}