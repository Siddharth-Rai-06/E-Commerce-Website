import React, { useState } from "react";

import Modal from "../../UI/Modal";
function ListItems({ data, onAdd, onRemove}) {
    const [pointer, setPointer] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const increasePointer = event => {
        // event.stopPropogation()
        onAdd(data.id)
        setPointer(pointer + 1);
    }
    const decreasePointer = event => {
        // event.stopPropogation()
        if (pointer === 0) {
            return;
        }
        if(pointer===1){
            onRemove(data.id)
        }
        setPointer(pointer - 1);
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
                        <span className="pricing">₹{data.price}&nbsp;</span>
                        <small className="pricing-small">
                            <strike>₹{data.discountedPrice}</strike>
                        </small>

                    </div>

                </div>
                {
                    pointer < 1 ?
                        <button className="buttonTag" variant="contained" onClick={increasePointer}>
                            <span className="add-item">Add to cart&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span >🛒</span>
                            </span>
                        </button>
                        :
                        <div className="cart-addon">
                            <button className="button-cart" onClick={decreasePointer}><span>-</span></button>
                            <span className="counter">{pointer}</span>
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
                        <span className="pricing">₹{data.price}&nbsp;</span>
                        <small className="pricing-small">
                            <strike>₹{data.discountedPrice}</strike>
                        </small>

                    </div>
                    <p>{data.description}</p>
                    {
                    pointer < 1 ?
                        <button className="buttonTag cartaddmodal" variant="contained" onClick={increasePointer}>
                            <span className="add-item">Add to cart&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span >🛒</span>
                            </span>
                        </button>
                        :
                        <div className="cart-addon cartaddonmodal">
                            <button className="button-cart" onClick={decreasePointer}><span>-</span></button>
                            <span className="counter">{pointer}</span>
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