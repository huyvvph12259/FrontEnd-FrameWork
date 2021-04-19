import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import NavAdmin from '../NavAdmin';
const UpdateC = ({ dataC, onUpdateC }) => {




    let history = useHistory(); // khởi tạo gán vào biến
    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const onSubmit = (album) => {
        const updatedCate = {
            ...dataC, ...album
        };
        onUpdateC(updatedCate)
        history.push("/manager/category");  // dùng push đẩy
    }
    return (
        <div>
            <div id="layoutSidenav">
                <NavAdmin />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Manager Page</h1>
                            <div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1" />Edit Cate</div>
                                <form action="" onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Cate Name</label>
                                        <input type="text" className="form-control"
                                            defaultValue={dataC.name}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span>Input something here</span>}
                                    </div>
                                    
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

export default UpdateC






