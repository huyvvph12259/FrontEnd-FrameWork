import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import NavAdmin from '../../NavAdmin';
const AddCates = ({ onAddC }) => {
    let history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        // console.log(data)
        onAddC(data);
        history.push("/manager/category");

    };
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
                                        <label htmlFor="productName" className="form-label">Cate Name</label>
                                        <input type="text" placeholder="Tên danh mục" className="form-control"  {...register("name", { required: true })} />
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

export default AddCates

