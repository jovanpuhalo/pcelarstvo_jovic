import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../../sass/components/_ui.scss";

export const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return <div className={`modal ${props.class}`}>{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay class={props.class}> {props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
