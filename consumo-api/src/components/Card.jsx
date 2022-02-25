import React from 'react'

const Card = (props) => {
  return (
    <div className='Card'>
        <picture className='Character-image'><img src={props.image} alt={props.name} /></picture>
        <h3 className='Name'>{props.name}</h3>
        <span className='House'>{props.house}</span>
        <span>{props.colorPelo}</span>
    </div>
  )
}

export default Card