import { Fragment } from "react";
import ReactDOM  from "react-dom";
import { BackdropOverlay } from "./Loader";



const Modal= ({onClose, children})=>{
return(
    <Fragment>
    {ReactDOM.createPortal(
        <>
            <BackdropOverlay onClose={onClose}/>
            <div className="modal">
             <button type="close" onClick={onClose}>X</button>
             <div className="content">{children}</div>
            </div>
        </>
        ,
        document.getElementById("modal-root")
    )}
    </Fragment>
)
}

export default Modal;