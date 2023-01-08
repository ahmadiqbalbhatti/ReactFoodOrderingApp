import classes from './Modal.module.css'
import {Fragment} from "react";

import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div onClick={props.onHideCart} className={classes.backdrop}/>
}

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
    <div className={classes.content}>
      {props.children}
    </div>
  </div>
}

const Modal = (props) => {
  const overLays = document.getElementById('overlays')
  return <Fragment>
    {ReactDOM.createPortal(<BackDrop onHideCart={props.onHideCart}/>, overLays)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overLays)}
  </Fragment>
};

export default Modal
