import React from 'react'
import UpdateProduct from '../../UpdateProduct'
import { useParams } from 'react-router-dom'
const UpdatePage = ({albums, onUpdate}) => {
    const {id} = useParams();
    const album = albums.find(item=>item.id === id);
    return (
        <div>
            <UpdateProduct data={album} onUpdate={onUpdate}/>
        </div>
    )
}

export default UpdatePage
