import React from 'react'
import Product from './Product';
import "./Product.css"

const Firstcomponent = () => {
  let a = "130";
  let b = "70";
  let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
  return (
    <>
      <h1 className='Product'>Welcome</h1>
      <h2>the Total of {a} and {b} is {130 + 70}</h2>
      <ul>{
        arr.map((i) => {
          return (
            <li>{i}</li>
          )
        })
      }</ul>
      <Product />
      <Product />
      <Product />
    </>
  )
}

export default Firstcomponent