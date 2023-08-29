import React from 'react'

const SingleProduct = ({title,description,price,rating,brand,category,images}) => {
  return (
    <>
        <div className="col-md-3 mb-3">
            <div className="card p-4 border-0 shadow">
                <img style={{width:'100%',height:'200px',objectFit:'contain'}} src={images[0]} alt='' />
                <h5>{title}</h5>
                <h5>{description}</h5>
                <h5>{price}</h5>
                <button className='btn btn-success'>
                    Add to Cart
                </button>
            </div>
        </div>
    </>
  )
}

export default SingleProduct
