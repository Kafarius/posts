import '../css/Modal.css'
import {Fragment, useState} from "react";

const Modal = (props) => {
    const [modalState, setModalState] = useState({visible: props.visible, type: props.type});


    return (

         <Fragment>
             { props.visible && <div onClick={props.onConfirm} className='backdrop'></div> }
             { props.visible && <div className='modal'>
                    <header>
                        <h2>Add {props.type}</h2>
                    </header>
                    <section>
                        <form>
                            {props.type==='post' && <input placeholder='Title'/>}
                            {props.type==='comment' && <input placeholder='Name'/>}
                            {props.type==='comment' && <input placeholder='Email'/>}
                            <textarea placeholder='Text...'></textarea>
                            <div className='actions'>
                                <button  onClick={props.onConfirm}>Cancel</button>
                                <button>Save</button>
                            </div>
                        </form>
                    </section>
                </div>
             }
        </Fragment>
    )
}
export default Modal;