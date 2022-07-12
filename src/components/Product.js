import React from 'react'

export default function Product(props) {
  return (
    <div className='row'>
      <h2>{props.product.name}</h2>
    </div>
  )
}
