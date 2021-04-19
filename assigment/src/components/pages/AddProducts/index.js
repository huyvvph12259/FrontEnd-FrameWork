import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import firebase from "../../../firebase";
import { v4 as uuidv4 } from "uuid";
import NavAdmin from '../../NavAdmin';
const AddProducts = ({ onAdd, cates }) => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data)
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then((url) => {
                
                
                const newImg = {
                    id: uuidv4(),
                    ...data,
                    image: url
                };
                onAdd(newImg);
                history.push("/manager");
            }
            );

        });
    }
    // const onSubmit = (data) => {
    //     // console.log(data)
    //     onAdd(data);
    //     history.push("/manager");

    // };
    return (
        <div>
            <div id="layoutSidenav">
                <NavAdmin />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Manager Page</h1><div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1" />Add Product</div>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Product Name</label>
                                        <input type="text" placeholder="Tên sản phẩm" className="form-control"  {...register("name", { required: true })} />
                                        {errors.name && <span>Input something here</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productPrice" className="form-label">Price</label>
                                        <input type="number"
                                            {...register("price", { required: true })}
                                            placeholder="Giá" className="form-control" />
                                        {errors.price && <span>Input something here</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productDesc" className="form-label">Description</label>
                                        <input type="text"
                                            {...register("desc", { required: true })}
                                            placeholder="Mô tả" className="form-control" />
                                        {errors.desc && <span>Input something here</span>}
                                        <input type="file"
                                            {...register("image", { required: true })}
                                        />
                                    </div>
                                    <select className="form-select" {...register("categoryId", { required: true })}>
                                        <option value="DEFAULT" disabled>Chọn loại</option>
                                        {cates.map((cate, index) => (

                                            <option key={index} value={cate.id} >{cate.name}</option>
                                        ))}

                                    </select>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>



                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default AddProducts

