import { createPortal } from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types';   
import './index.css'
const rootModal = document.querySelector('#root-modal');

const Modal = ({children , onClose}) => {

    useEffect(() => {

        const onCloseEsc = e => {
            if (e.code === 'Escape') {
                onClose();
            };
        };
        window.addEventListener('keydown', onCloseEsc)
        
        return () => {
            window.removeEventListener('keydown', onCloseEsc)
        };
    });

    const onCloseClick = e => {
        if (e.currentTarget === e.target) {
        onClose();
        };
    }


    return createPortal(
        <div className='overlay' onClick={onCloseClick}>
            <div className='modal'>{children}</div>
        </div>, rootModal
    )
};

Modal.prototype = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
