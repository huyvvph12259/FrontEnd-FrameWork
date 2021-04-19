import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import NavAdmin from '../NavAdmin';
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";
const Update = ({ data, onUpdate, cates }) => {




    let history = useHistory(); // khởi tạo gán vào biến
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (album) => {
        // console.log(album)
        let file = album.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL().then((url) => {
                // console.log(url)

                const updatedAlbum = {
                    id: uuidv4(),
                    ...data, ...album,
                    image: url
                };
                onUpdate(updatedAlbum);
                history.push("/manager");
            });
        });
    }
    // const onSubmit = (album) => {
    //     const updatedAlbum = {
    //         ...data, ...album
    //     };
    //     onUpdate(updatedAlbum)
    //     history.push("/manager");  // dùng push đẩy
    // }
    return (
        <div>
            <div id="layoutSidenav">
                <NavAdmin />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Manager Page</h1>
                            <div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1" />Edit Product</div>
                                <form action="" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Product Name</label>
                                        <input type="text" className="form-control"
                                            defaultValue={data.name}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span>Input something here</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productPrice" className="form-label">Price</label>
                                        <input type="number" className="form-control"
                                            defaultValue={data.price}
                                            {...register("price", { required: true })}
                                        />
                                        {errors.price && <span>Input something here</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productDesc" className="form-label">Description</label>
                                        <input type="text" className="form-control"
                                            defaultValue={data.desc}
                                            {...register("desc", { required: true })}
                                        />
                                        {errors.desc && <span>Input something here</span>}
                                    </div>
                                    <label htmlFor="">Danh mục</label>
                                    <select defaultValue={"DEFAULT"} className="form-select"
                                        {...register("categoryId", { required: true })}>
                                        <option value="DEFAULT" disabled>Chọn loại</option>
                                        {cates.map((cate, index) => (
                                            <option value={cate.id} key={index} selected={cate.id == data.categoryId}>{cate.name}</option>
                                        ))}
                                    </select>
                                    <label htmlFor="">Ảnh: </label>
                                    <input type="file" {...register("image", { required: true })} />
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

export default Update






