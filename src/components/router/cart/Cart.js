import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addCart, delCart } from "../../context/action/index"
import Empty from '../../empty/Empty'



function Cart() {
    const product = useSelector((product) => product.handleCart)
    // console.log(product);
    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }
    const delProduct = (product) => {
        dispatch(delCart(product))
    }



    return (
        <div>
           {
            product.length === 0 ? <Empty/> :  
                product.map((v) => {
                    return (
                        <div key={v.id} className="row">
                            <div className="col-md-4">
                                <img src={v.image} alt={v.title} height="200px" width={180} />
                            </div>
                            <div className="col-md-4">
                                <h3>{v.title}</h3>
                                <p className="lead fw-bold">
                                    {v.qty} X ${v.price}=${v.qty * v.price}
                                </p>
                                <button onClick={() => delProduct(v)} className='btn btn-outline-dark me-4'>
                                    <i className='fa fa-minus'></i>
                                </button>
                                <button onClick={() => addProduct(v)} className='btn btn-outline-dark me-4'>
                                    <i className='fa fa-plus'></i>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default Cart