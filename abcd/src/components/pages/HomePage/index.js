import React from 'react'
import Banner from '../../Banner';
import Albums from '../../Albums';
const HomePage = ({albums}) => {
    return (
        <div>
            home page
            <div className="row">
            {/* <AddProduct onAdd={handleAdd}/> */}
          <Banner />
          {/* <DetailAlbum data = {albumItem}/> */}
          <Albums data = {albums} 
        //   onDelete={onHandleRemove} 
        //   onDetail={onHandleDetail}
          />
            </div>
        </div>
    )
}

export default HomePage
