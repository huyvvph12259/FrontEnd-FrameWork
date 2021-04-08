import React from 'react'
import AddProduct from '../../AddProduct'

const AddProducts = ({onAdd}) => {
    return (
        <div>
            <AddProduct onAdd={onAdd}/>
            
        </div>
    )
}

export default AddProducts
