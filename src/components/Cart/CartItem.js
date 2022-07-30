const CartItem = ({ data }) => {
    return (
        <div className="checkout-modal_list-item">
            <div className="checkoutimg-wrap">
                <img src={'/assets/'+data.thumbnail} className="checkoutimg" alt={data.title}></img>
            </div>
            <div className="information">
                <div>
                    <h4>{data.title}</h4>
                    <div id="checkoutprice" className="pricing">
                        <span><strong>{data.discountedPrice}</strong> &nbsp;</span>
                        <small><strike>{data.price}</strike></small>
                    </div>
                </div>
                <div className="cart-addon cartaddonmodal" id="cartaddbutton">
                    <button className="button-cart" ><span>-</span></button>
                    <span className="counter">{data.quantity}</span>
                    <button className="button-cart" ><span>+</span></button>
                </div>
            </div>
            <br></br>
        </div>
    )
}
export default CartItem;