import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateC from '../../UpdateC';
const UpdateCate = ({ cates, onUpdateC }) => {
    const { id } = useParams();

    const cate = cates.find(pr => pr.id === id)
    return (
        <div>
            <UpdateC dataC={cate} onUpdateC={onUpdateC} />
        </div>
    )
}
export default UpdateCate
