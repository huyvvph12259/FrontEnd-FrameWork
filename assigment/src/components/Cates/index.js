import React from 'react'
import CateItem from '../CateItem'

const Cates = ({ data, dataX, handleCate }) => {
    return (
        <div>
            {data.map((cate, index) => {
                return <CateItem key={index} handleCate={handleCate} item={cate}  itemX={dataX}/>

            })}
            
        </div >
    )
}

export default Cates
