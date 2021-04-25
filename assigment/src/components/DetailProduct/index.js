import React from 'react'
import { useParams } from 'react-router-dom'
const DetailProduct = ({ albums, addCartPr }) => {
  const { id } = useParams();
  const album = albums.find(pr => pr.id === id)
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
          {/* <img src={album.image} alt="#" className="img-fluid" width="80%" height="700px"/> */}

            <div className="col-lg-12">
              {/* <div className=" owl-carousel"> */}
                {/* <div className="single_product_img"> */}
                  <img src={album.image} alt="#" className="img-fluid" />
                {/* </div> */}

              {/* </div> */}
            </div>
            <div className="col-lg-8">
              <div className="single_product_text text-center">
                <h3>Tên: {album.name}</h3>
                <p>Thông tin: {album.desc}</p>
                <div className="card_area">
                  <div className="product_count_area">

                    <p>Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(album.price)}</p>
                  </div>
                  <div className="add_to_cart">
                    <span href="#" className="btn_3" onClick={() => addCartPr(album)}>add to cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================End Single Product Area =================*/}
      {/* subscribe part here */}

    </div>

  )
}

export default DetailProduct
