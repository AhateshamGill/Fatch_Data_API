import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Main = () => {
  const url = 'https://dummyjson.com/products';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async() => {
    setIsLoading(true);
    const data = await fetch(url);
    const response = await data.json();
    console.log(response.products);
    setProducts(response.products);
    setIsLoading(false);
  }
  useEffect(() =>{
    getData();
  },[])
  if(isLoading){
    return <h1 className='text-center'>Loading .........</h1>
  }

  return (
   <>
    {products?.map((prod) =>{
      return <SingleProduct key={prod.id} {...prod}/>
    })}
   </>
  )
}

export default Main
