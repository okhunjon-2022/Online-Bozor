import React from 'react'
import bg from "../../../assets/bg.jpg"
import Products from '../../router/products/Products'


function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src={bg} className="card-img" alt="Store" height={600} />
                <div className="card-img-overlay ">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">YANGI MAVSUMGA YANGI DIZAYN</h5>
                        <p className="card-text lead fs-2">
                        
                        </p>
                    </div>

                </div>
            </div>
          <Products/>
        </div>
    )
}

export default Home