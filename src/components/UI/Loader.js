
import  ReactDOM  from 'react-dom';

export const BackdropOverlay=props=>{
    const HandleClick=()=>{
        if(props.onClose()){
            props.onClose();
        }
    }
    return(<div onClick={HandleClick} className="loader-overlay"></div>
    )
}

const Loader= ()=>{
    return (
        ReactDOM.createPortal(<>
            <BackdropOverlay/>
            <div className="loading-dots">
                <div><h2>Welcome to SHOP STATION</h2></div>
                <br></br>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
            </div>
    
            </>,
            document.getElementById("loader-root")
            )

    )
}

export default Loader;