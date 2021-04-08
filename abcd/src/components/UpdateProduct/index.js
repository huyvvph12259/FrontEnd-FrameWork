import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const UpdateProduct = ({ data, onUpdate }) => {
  let history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (album) => {
    const updatedAlbum = {
      ...data, ...album
    };
    onUpdate(updatedAlbum)
    history.push("/manager");
  }
  return (
    <div>
      <h2>Cập nhật sản phẩm</h2>
      


        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input type="text" name="name" defaultValue={data.name} placeholder="Tên sản phẩm" className="form-control" ref={register} />
            {/* {errors.name && <span>This field is required </span>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Price</label>
            <input type="number" name="price" defaultValue={data.price} placeholder="Giá" className="form-control" ref={register} />
            {/* {errors.price && <span>This field is required </span>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">Category</label>
            <select name="productCategory"  ref={register} id="">
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

export default UpdateProduct
