import React, { useState, useEffect } from 'react'
import { useParams } from "react-router"
import {NavLink} from "react-router-dom"
import{useDispatch} from "react-redux"
import {addCart} from '../../context/action'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch =useDispatch()
    const addProduct=(product)=>{
        dispatch(addCart(product))
    }


    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            <div className="col-md-3">
                <Skeleton height={350} />
            </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width={400} />
                </div>
                <div className="col-md-6">
                    <h4 className='text-upperCase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>Rating {product.rating && product.rating.rate} <i className='fa fa-star'></i>  </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button onClick={()=>addProduct(product)} className='btn btn-outline-dark px-4 py-2'>Savatchaga Qo'shish</button>
                    <NavLink to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2'>Savatchaga O'tish</NavLink>
                </div>
            </>
        )
    }



    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product