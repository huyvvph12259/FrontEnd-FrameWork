import React from 'react'
const CateItem = ({item,handleCate, itemX}) => {

   console.log("aaaaa",itemX);
    return (
        <div>
            <ul className="list-unstyled mb-0" >
                <li className="mb-1"><a  className="d-flex" onClick={()=> handleCate(item.id)}><span style={{color: 'black'}}>{item.name}</span> </a></li>
            
            </ul>
        </div>
    )
}

export default CateItem
