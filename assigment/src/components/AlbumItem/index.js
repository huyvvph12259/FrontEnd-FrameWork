import React from 'react'
import { Link } from 'react-router-dom';

const AlbumItem = ({item}) => {
    console.log(item);
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="single-popular-items mb-50 text-center">
              <div className="popular-img">
              <Link href="" to={`shop/details/${item.id}`}><img src={item.image} alt="" /></Link>
                <div className="img-cap">
                  <span><Link href="" to={`shop/details/${item.id}`}>Add to cart</Link></span>
                </div>
              </div>
              <div className="popular-caption">
                <h3><Link href="" to={`shop/details/${item.id}`}>{item.name}</Link></h3>
                <span>{item.price} VNĐ</span>
              </div>
            </div>
            
          </div>
    )
}

export default AlbumItem
