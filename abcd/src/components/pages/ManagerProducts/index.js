import React from 'react'
import { Link } from 'react-router-dom'
const ManagerProducts = ({albums, onDelete}) => {
    console.log(albums)
    return (
        <div>
            <h2>Quản lý sản phẩm</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {albums.map((album, index)=>{
                        return <tr key={index}>
                    
                    <td scope="row">{index+1}</td>
                    <td>{album.name}</td>
                    <td><button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>{onDelete(album.id)}}>Delete</button></td>
                    <Link to={`manager/edit/${album.id}`}>Update</Link>
                    </tr>
                    })}
                    
                    
                </tbody>
                </table>
        </div>
    )
}

export default ManagerProducts
