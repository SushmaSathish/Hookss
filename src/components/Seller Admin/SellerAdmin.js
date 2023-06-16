import React, { useState } from 'react'
import classes from'./SellerAdmin.module.css'
const SellerAdmin=(props)=>{
    const [idi,setid]=useState('')
    const [productPrice,setamount]=useState('')
    const [productName,setproduct]=useState('')
    


    const idhandler=(event)=>{
        setid(event.target.value)
    }
    const pricehandler=(event)=>{
        setamount(event.target.value)
    }
    const productNamehandler=(event)=>{
        setproduct(event.target.value)
    }
  
    const submithandler=(event)=>{
        event.preventDefault()
        let ordered={
            idi:idi,
            productPrice:productPrice,
            productName:productName
        }
        props.onorder(ordered)
    }

  return (
    <div className={classes.login}>
        <form onSubmit={submithandler}>
        <label htmlFor='unique'>Unique order no</label>
        <input id='unique' type='number' onChange={idhandler} value={idi}/>
        <label htmlFor='productPrice'>Enter amount</label>
        <input id='productPrice' type='number' onChange={pricehandler} value={productPrice}/>
        <label htmlFor='productName'>Product Name</label>
        <input id='productName' type='text' onChange={productNamehandler} value={productName}/>
       
            <div className={classes.actions}>
            <button>Add product</button>
            </div>
            </form>
        </div>

  )
}
export default SellerAdmin;