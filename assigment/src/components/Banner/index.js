import React from 'react'
import{
  BrowserRouter,
  Link
} from 'react-router-dom'
const Banner = () => {
    return (
        <div>
            <div className="slider-area ">
      <div className="slider-active">
        {/* Single Slider */}
        <div className="single-slider slider-height d-flex align-items-center slide-bg">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                <div className="hero__caption">
                  <h1 data-animation="fadeInLeft" data-delay=".4s" data-duration="2000ms">Cá tính, thời thượng</h1>
                  <p data-animation="fadeInLeft" data-delay=".7s" data-duration="2000ms">Để nói về ý nghĩa và cách chọn đồng hồ thì không phải chàng trai nào cũng biết. Nếu như nữ giới có được đặc quyền sở hữu nhiều món phụ kiện và thay đổi liên tục như túi xách, giày dép, trang sức,... thì đàn ông “may mắn” chỉ có một lựa chọn - Đó là chiếc đồng hồ đeo tay.</p>
                  {/* Hero-btn */}
                  <div className="hero__btn" data-animation="fadeInLeft" data-delay=".8s" data-duration="2000ms">
                    <Link href="" className="btn hero-btn" to="/shop">Mua ngay</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                <div className="hero__img" data-animation="bounceIn" data-delay=".4s">
                  <img src="assets/img/hero/watch.png" alt="" className=" heartbeat" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Slider */}
        
      </div>
    </div>
        </div>
    )
}

export default Banner
