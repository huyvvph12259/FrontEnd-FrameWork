import React, { useState } from 'react';
import{useForm} from "react-hook-form"

const AddProduct = ({onAdd}) => {
    const {register, handleSubmit, errors} = useForm();

    // register thiết lập điều kiện
    const onSubmit = data => onAdd(data);
    return (
        <div>
            

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Thêm sản phẩm</div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input  type="text" name="name" placeholder="Tên sản phẩm" className="form-control" ref={register({required : true})} />
          {errors.name && <span>This field is required </span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input  type="number" name="price" placeholder="Giá" className="form-control" ref={register({required : true})} />
          {errors.price && <span>This field is required </span>}
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <select name="productCategory"  ref={register({required : true})} id="">
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





















