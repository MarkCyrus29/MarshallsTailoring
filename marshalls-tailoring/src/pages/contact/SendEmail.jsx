import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Alert } from "./Alert";
import "./alert.css";

function SendEmail() {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1bp6qs",
        "template_6xfqh8p",
        form.current,
        "371mgpqs0Yv_i3aP7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          {
            showAlert && (
              <Alert
                message="Sorry, we encountered an error while sending your message."
                onClose={closeAlert}
              />
            );
          }
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="form-heading xs:text-lg md:text-4xl">
              Contact our Team
            </p>
            <p className="form-desc xs:text-xs md:text-xl">
              Got any questions about our products? We're here to help answer
              those questions. Chat with us using the form below or the given
              contact information!
            </p>

            <div className="form-field">
              <input
                placeholder="Full name"
                className="input-field xs:text-xs sm:text-sm md:text-base"
                type="text"
                name="user_name"
                required
              />
            </div>

            <div className="form-field">
              <input
                placeholder="Email / Phone Number"
                className="input-field xs:text-xs sm:text-sm md:text-base"
                type="text"
                name="user_email"
                required
              />
            </div>

            <div className="form-field">
              <textarea
                placeholder="Message"
                cols="30"
                rows="5"
                className="input-field xs:text-xs sm:text-sm md:text-base"
                name="message"
                required
              ></textarea>
            </div>

            <input className="sendMessage-btn button" value="Send Message" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SendEmail;
