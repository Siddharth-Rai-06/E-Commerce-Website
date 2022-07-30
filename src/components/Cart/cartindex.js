import Modal from "../UI/Modal";
import { Fragment, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ count , items }) => {

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
                            items.map(item =>{
                                return(
                                    <CartItem data={item} key={item.id}/>
                                )
                            })
                        :
                        <div className="empty-cart">Please Add Something To Your Cart</div>
                        }
                        
                            
                        </div>
                        {
                            count>0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount:</h4>
                                    <h4>
                                    {
                                        items.reduce((prevValue,currentValue)=>{
                                            return prevValue+(currentValue.discountedPrice*currentValue.quantity)
                                            },0)
                                    }
                                    &nbsp;INR</h4>
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