import React, { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { addItemHandler , removeItemHandler} from "../../../actions";

import Modal from "../../UI/Modal";
function ListItems({ data}) {
    // const [pointer, setPointer] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const item=useSelector(state => state.items.find(item => item.id === data.id ))
    const dispatch= useDispatch();

    const increasePointer = event => {
        // event.stopPropogation()
        dispatch(addItemHandler(data))
    }    

    const decreasePointer = event => {
        // event.stopPropogation()
        dispatch(removeItemHandler(data.id))

    }

    const HandleModal = () => {
        setShowModal(prevValue => !prevValue)
    }


    return (
        <>
            <div onClick={HandleModal} className="item-card">
                <img className="image-fluid" src={"assets/" + data.thumbnail} alt="Title"></img>
                <div className="item-card_info">
                    <div className="title">
                        <h3>{data.title}</h3>
                    </div>
                    <div className="prices">
                        <span className="pricing">₹{data.discountedPrice}&nbsp;</span>
                        <small className="pricing-small">
                            <strike>₹{data.price}</strike>
                        </small>

                    </div>

                </div>
                {
                    !item || item?.quantity< 1 ?
                        <button className="buttonTag" variant="contained" onClick={increasePointer}>
                            <span className="add-item">Add to cart&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span >🛒</span>
                            </span>
                        </button>
                        :
                        <div className="cart-addon">
                            <button className="button-cart" onClick={decreasePointer}><span>-</span></button>
                            <span className="counter">{item.quantity}</span>
                            <button className="button-cart" onClick={increasePointer}><span>+</span></button>
                        </div>

                }




            </div>
            {showModal && <Modal onClose={HandleModal} >
                <div className="item-card__modal">
                    <div className="item-card__img-wrap">
                        <img className="image-fluid" src={"assets/" + data.thumbnail} alt="Title"></img>
                    </div>
                    <div className="item-card__meta">
                        <h3>{data.title}</h3>
                        <div className="item-card__prices">
                        <span className="pricing">₹{data.discountedPrice}&nbsp;</span>
                        <small className="pricing-small">
                            <strike>₹{data.price}</strike>
                        </small>

                    </div>
                    <p>{data.description}</p>
                    {
                        !item || item?.quantity < 1 ?
                        <button className="buttonTag cartaddmodal" variant="contained" onClick={increasePointer}>
                            <span className="add-item">Add to cart&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span >🛒</span>
                            </span>
                        </button>
                        :
                        <div className="cart-addon cartaddonmodal">
                            <button className="button-cart" onClick={decreasePointer}><span>-</span></button>
                            <span className="counter">{item.quantity}</span>
                            <button className="button-cart" onClick={increasePointer}><span>+</span></button>
                        </div>

                }
                    </div>
                    
                </div>
            </Modal>}
        </>
    );
}
export default ListItems;