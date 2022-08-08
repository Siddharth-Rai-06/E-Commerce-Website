import Modal from "../UI/Modal";
import { Fragment, useDebugValue, useState } from "react";
import CartItem from "./CartItem";
import OrderSuccessModal from "../UI/OrderSuccess";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addItemHandler, clearCartHandler, removeItemHandler } from "../../actions";

const Cart = () => {

    const [showModal, setShowModal] = useState(false);
    const [orderModal, setOrderModal]=useState(false);
    const items=  useSelector(state => state.items)
    const totalAmount=useSelector(state => state.totalAmount)
    const dispatch=useDispatch();

    const handleModal = () => {
        setShowModal(prevValue => !prevValue)
    }
    const handleOrderModal=()=>{
        setShowModal(false);
        dispatch(clearCartHandler())
        setOrderModal(prevValue => !prevValue )
    }

    const dispatchEvents=(type, item)=>{
        if(type === 1){
            dispatch(addItemHandler(item))

        }
        else if(type === -1){
            dispatch(removeItemHandler(item.id))
        }
    }

    return (
        <Fragment>
            <div onClick={handleModal}>
                <li><a ><img src={"assets/shopping-cart.png"} alt="text"></img>
                    <span className='badge badge-warning' id='lblCartCount'> {items.length} </span>
                </a></li>
            </div>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className="checkout-modal">
                        <h2>checkout Modal</h2>
                        <div className="checkout-modal_list">
                        {
                            items.length>0 ? 
                            items.map(item =>{
                                return(
                                    <CartItem data={item}
                                    key={item.id}
                                    onEmitIncreaseItem={ item => dispatchEvents(1, item)}
                                    onEmitDecreaseItem={item=> dispatchEvents(-1, item)}    
                                    />
                                )
                            })
                        :
                        <div className="empty-cart">Please Add Something To Your Cart</div>
                        }
                        
                            
                        </div>
                        {
                            items.length>0 &&
                            <div className="checkout-modal_footer">
                                <div className="totalAmount">
                                    <h4>Total Amount:</h4>
                                    <h4>
                                    {totalAmount}
                                    &nbsp;INR</h4>
                                    <div className="cartmodalbutton">
                                        <button onClick={handleOrderModal}>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </Modal>
            }
            {
                orderModal && 
                <OrderSuccessModal onClose={handleOrderModal}></OrderSuccessModal>
            }
        </Fragment>
    )
}
export default Cart;