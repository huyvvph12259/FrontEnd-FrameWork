import React from 'react'
import Update from '../../Update'
import { useParams } from 'react-router-dom'
const UpdateProduct = ({ albums, onUpdate, cates }) => {
    const { id } = useParams();
    
    const album = albums.find(pr => pr.id === id)
    return (
        <div>
            <Update data={album} cates={cates} onUpdate={onUpdate} />
        </div>
    )
}

export default UpdateProduct
