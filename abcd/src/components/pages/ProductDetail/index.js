import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
const ProductDetail = () => {
    useEffect(()=>{
        let {id} = useParams
    })
    return (
        <div>
            
        </div>
    )
}

export default ProductDetail
