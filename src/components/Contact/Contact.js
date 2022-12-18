import React, { useRef } from "react";
import "../../sass/components/_contact.scss";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Modal from "../UI/Modal";
import Footer from "../Footer/Footer";
import Location from "./Location";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const messageRef = useRef();

  const nameChangeHndler = (e) => {
    setName(e.target.value);
  };
  const surnameChangeHandler = (e) => {
    setSurname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setEmail("");
      setName("");
      setSurname("");
      messageRef.current.value = "";
      setShowModal(true);

      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }, 1000);
    emailjs.sendForm("service_ljud1p2", "template_j27pmin", e.target, "qDRfk219mxVwFB66i");
  };

  const formIsValid = name.trim() !== "" && surname.trim() !== "" && email.trim() !== "";

  return (
    <div className="contact">
      <div className="contact__contact--form">
        <div className="contact__contact--form__address">
          <span className="contact__contact--form__address__title"> KONTAKTIRAJTE NAS</span>
          <span>
            Hase bb, <br /> 76300 Bijeljina, BiH.
            <br />
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <br /> Tel: +387 65 123 456,
            <br />
            E-mail: jovic@gmail.com
            <br />
            <br /> Radno vrijeme: 08-18h
          </span>
        </div>

        <form className="contact__contact--form__form" onSubmit={formSubmissionHandler}>
          <input type="text" name="name" placeholder="Ime" value={name} onChange={nameChangeHndler} />
          <input type="text" name="surname" placeholder="Prezime" value={surname} onChange={surnameChangeHandler} />
          <input type="text" name="email_from" placeholder="Email" value={email} onChange={emailChangeHandler} />
          <textarea rows="10" name="message" placeholder="Poruka" ref={messageRef} />
          <button disabled={!formIsValid}>{`${sending ? "Slanje..." : "Pošalji"}`}</button>
        </form>
      </div>
      <Location />

      <Footer secondStyle />
      {showModal && <Modal onClose={closeModalHandler}> Poruka je uspješno poslata.</Modal>}
    </div>
  );
};

export default Contact;
