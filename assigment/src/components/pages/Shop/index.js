import {useState} from 'react'
import Albums from '../../Albums'
import Cates from '../../Cates'
import ShopBanner from '../../ShopBanner'

const Shop = ({ albums, cates }) => {
    const [cateProduct , setCateProduct] = useState(albums)
    const handleCate = (id) => {
        const filterDetail = albums.filter((it) => it.categoryId == id);
        // console.log("cate------",filterDetail)
        setCateProduct(filterDetail);
    }
    // console.log(albums)
    return (
        <div>
            <ShopBanner />
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-9 order-2">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div className="float-md-left mb-4">
                                    <h2 className="text-black h5">Tất cả sản phẩm</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <Albums data={cateProduct} />
                        </div>
                    </div>
                    <div className="col-md-3 order-1 mb-5 mb-md-0">
                        <div className="border p-4 rounded mb-4">
                            <h3 className="mb-3 h6 text-uppercase text-black d-block">Danh mục</h3>
                            
                            <Cates data={cates} dataX={albums} handleCate={handleCate} />
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
