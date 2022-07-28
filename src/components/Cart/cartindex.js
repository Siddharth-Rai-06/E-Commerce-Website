import Modal from "../UI/Modal";
import { Fragment, useState } from "react";

const Cart = ({ count }) => {

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(prevValue => !prevValue)
    }

    return (
        <Fragment>
            <div onClick={handleModal}>
                <li><a ><img src={"assets/shopping-cart.png"} alt="text"></img>
                    <span className='badge badge-warning' id='lblCartCount'> {count} </span>
                </a></li>
            </div>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>checkout Modal</h2>
                        <div className="checkout-modal_list">
                        {
                            count>0 ? 
                            <div className="checkout-modal_list-item">
                            <div className="checkoutimg-wrap">
                                <img src={"/assets/placeholder.png"}  className="checkoutimg" alt="placeholder"></img>
                            </div>
                            <div className="information">
                                <div>
                                    <h4>Title Of Products</h4>
                                    <div id="checkoutprice" className="pricing">
                                        <span><strong>2000</strong> &nbsp;</span>
                                        <small><strike>2500</strike></small>
                                    </div>
                                </div>
                                <div className="cart-addon cartaddonmodal">
                            <button className="button-cart" ><span>-</span></button>
                            <span className="counter">{0}</span>
                            <button className="button-cart" ><span>+</span></button>
                        </div>
                            </div>
                        </div>
                        :
                        <div className="empty-cart">Please Add Something To Your Cart</div>
                        }
                        
                            
                        </div>
                        {
                            count>0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount:</h4>
                                    <h4>2000 INR</h4>
                                    <div className="cartmodalbutton">
                                        <button >Order Now</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </Modal>
            }
        </Fragment>
    )
}
export default Cart;