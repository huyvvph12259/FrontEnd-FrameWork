import React from 'react'
import { Link } from 'react-router-dom'

import NavAdmin from '../../NavAdmin'
const ManagerCate = ({ cates, onDeleteC }) => {
    console.log(cates)
    return (

        <div>
            <div id="layoutSidenav">

                <NavAdmin />

                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Manager Page</h1>
                            <div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1" />DataTable Cate</div>

                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Add <Link to={`category/add`}><i className="fa fa-plus" style={{ fontSize: '25px', color: 'orange' }} /> </Link> </th>

                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cates.map((cate, index) => {
                                                    return <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{cate.name}</td>
                                                        <div style={{ display: 'inherit' }}>
                                                            <i className="fa fa-trash" style={{ fontSize: '20px', color: 'red' }} onClick={() => { onDeleteC(cate.id) }} />
                                                            <Link to={`category/edit/${cate.id}`}>Edit<i className="far fa-edit" style={{ fontSize: '20px', color: 'green' }} /></Link>
                                                        </div>
                                                    </tr>
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>


    )
}

export default ManagerCate
