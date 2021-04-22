import React from 'react'
import AlbumItem from '../AlbumItem'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
const Albums = ({ data, addCartPr }) => {
  return (

    <div className="popular-items ">
      <div className="container">
        {/* Section tittle */}
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            {/* <div className="section-tittle mb-70 text-center">
              <h2>Sản phẩm</h2>
              <p>Đồng hồ không chỉ có công dụng để xem giờ mà còn là món phụ kiện giúp người sở hữu nó thể hiện phong cách, cá tính riêng của mình. Chiếc đồng hồ càng đắt tiền mang thương hiệu nổi tiếng như Pulsar, Timex,  Michael Kors, Fossil, Bulova…thì càng thể hiện được đẳng cấp của người đeo.</p>
            </div> */}
          </div>
        </div>
        <div className="row">
          {
            data.map((album, index) => {
              return <AlbumItem key={index} item={album} addCartPr={addCartPr} />
            })
          }
        </div>
        {/* Button */}
        <div className="row justify-content-center">
          <div className="room-btn pt-70">
            <Link to="/shop" href="" className="btn view-btn1">View More Products</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Albums
