import React from 'react'
import Product from './Product'
export default function PLIST(props) {
  
  return (
        props.mlist.map((product,i)=>{
           return< Product product = {product} key={i}/>
        })

    )
}
