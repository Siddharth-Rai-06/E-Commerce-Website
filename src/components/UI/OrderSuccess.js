import Modal from "./Modal";
import OrderSuccessImage from "../../svgs/icons8-shipped.gif"

const OrderSuccessModal = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className="order-container">
                <div className="order-container--success">
                     <img src={OrderSuccessImage} alt="orderSuccesful" className="img-fluid " id="orderimg"></img>
                     <div className="message">
                        <h1>Order Successfully placed</h1>
                        <span>Order ID #{Math.random().toString(32).slice(2)}</span>
                     </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccessModal;
