import React from 'react'
import { Link } from 'react-router-dom'
import NavAdmin from '../../NavAdmin'
const ManagerProduct = ({ albums, onDelete }) => {
    // console.log(albums)
    return (
        <div>
            <div id="layoutSidenav">
                <NavAdmin />
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <h1 className="mt-4">Manager Page</h1>
                            <div className="card mb-4">
                                <div className="card-header"><i className="fas fa-table mr-1" />DataTable Product</div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" width="100%" cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">STT</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Descripion</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Action</th>
                                                    <th scope="col">Add <Link to={`manager/add`}><i className="fa fa-plus" style={{ fontSize: '25px', color: 'orange' }} /> </Link> </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {albums.map((album, index) => {
                                                    return <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{album.name}</td>
                                                        <td><img src={album.image} alt="" width="361px" height="360px" /></td>
                                                        <td>{album.desc}</td>
                                                        <td>{album.categoryId}</td>
                                                        <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(album.price)}</td>
                                                        <div style={{ display: 'inherit' }}>
                                                            <i className="fa fa-trash" style={{ fontSize: '20px', color: 'red' }} onClick={() => { onDelete(album.id) }} />
                                                            <Link to={`manager/edit/${album.id}`}>Edit<i className="far fa-edit" style={{ fontSize: '20px', color: 'green' }} /></Link>
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
export default ManagerProduct
