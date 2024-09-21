import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"

function SingleProductPage(){

    const {id}=useParams()
    const [product,setproduct]=useState([])
    const [loading,setloading]=useState(false)

  useEffect(()=>{
    setloading(true)
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
    .then((res)=>{
      setloading(false)
      console.log(res.data.data)
      setproduct(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

    return loading ? <Loader /> :(
        <div data-testid="products-container" >   
            <div>
                <h3 data-testid="product-brand">{product.brand}</h3>
            </div>
            <div >
            <img src={product.img} height={300} data-testid="product-image"/>
            </div>
            <div data-testid="product-category">{product.category}
            </div>
           
            <div data-testid="product-details">{product.details}
            </div>
            <div data-testid="product-price">{product.price}
            </div>

            </div>
    )
}
export default SingleProductPage