import React, { useState } from 'react'

const AddProduct = ({onAdd}) => {
    const [fields, setFields] = useState({
        productName: '',
        productPrice: '',
        productCategory: ''
    });
    const onHandleChange = (e) =>{
        
        const{name,value} = e.target;
        setFields({
            ...fields,
            [name] : value
        })
    }
    const onHandleSubmit = (e)=>{
        e.preventDefault();
        onAdd(fields)
    }
    return (
        <div>
            

      <form onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input  onChange={onHandleChange} name="productName" type="text" className="form-control" id="productName" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input  onChange={onHandleChange} name="productPrice" type="number" className="form-control" id="productPrice" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <select name="productCategory" onChange={onHandleChange} id="">
              <option value="" selected hidden></option>
              <option value="adidas">Adidas</option>
              <option value="nike">Nike</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        
        </div>
    )
}

export default AddProduct





















