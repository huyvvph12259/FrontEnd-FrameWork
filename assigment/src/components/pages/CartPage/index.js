import React from 'react'

const CartP = ({ cartPr, addCartPr, removePr }) => {
    const itemsPrice = cartPr.reduce((a, c) => a + c.tr * c.price, 0);
    return (
        <div>
            <div className="slider-area ">
                <div className="single-slider slider-height2 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>Cart List</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*================Cart Area =================*/}
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <div>{cartPr.length === 0 && <div style={{color: "red", fontWeight: "Bold", fontSize: "50px"}}>Nothing in this cart</div>}</div>

                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartPr.map((item) => (
                                        <tr>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={item.image} alt="" />
                                                    </div>



                                                    <div className="media-body">
                                                        <p>{item.name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</h5>
                                            </td>
                                            <td>
                                                <div className="product_count">
                                                    <span className="input-number-decrement" onClick={() => removePr(item)}> <i className="ti-minus" /></span>
                                                    <input className="input-number" type="number" defaultValue={item.tr} />
                                                    <span className="input-number-increment" onClick={() => addCartPr(item)}> <i className="ti-plus" /></span>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{item.tr}*{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                                </h5>
                                            </td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td />
                                        <td />
                                        <td>
                                            <h5>T???ng</h5>
                                        </td>
                                        <td>
                                            {
                                                cartPr.length !==0 &&(
                                                    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemsPrice)
                                                )
                                            }
                                            {/* <h5>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(itemsPrice)}</h5> */}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
                                <a className="btn_1" href="#">Continue Shopping</a>
                                <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div></section>
        </div>

    )
}

export default CartP
