import marshalls_tailoring from "../assets/marshalls_tailoring.png";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "./contact/Alert";
import "./contact/alert.css";

function Footer() {
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
    <div className="text-marshalls-white h-auto bg-marshalls-black flex md:flex-row md:justify-between items-start py-10 xs:flex-col xs:items-center">
      <div className="md:pl-5 md:w-1/4 xs:w-5/6 xs:px-0 xs:pb-5">
        <h1>
          <strong>Send us a Message!</strong>
        </h1>
        <form
          className="flex flex-col items-startl "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col ">
            <label className="pb-1 pt-1">Full name:</label>
            <input
              placeholder="Type here..."
              className="bg-marshalls-black outline-dotted outline-1 outline-marshalls-blue"
              type="text"
              name="user_name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="pb-1 pt-1">Email Address: </label>
            <input
              placeholder="Type here..."
              className="bg-marshalls-black outline-dotted outline-1 outline-marshalls-blue"
              type="text"
              name="user_email"
              required
            />
          </div>

          <div className="flex flex-col ">
            <label className="pb-1 pt-1">Your message: </label>
            <textarea
              placeholder="Type here..."
              cols="21"
              rows="2"
              className="bg-marshalls-black outline-dotted outline-1 outline-marshalls-blue resize-none overflow-auto"
              name="message"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className="cursor-pointer mt-2 p-2
            border border-marshalls-blue"
            value="Send Message"
          />
        </form>
      </div>
      <div className=" lg:w-1/6 xs:w-5/6 xs:px-0 xs:pb-5 r">
        <ul className="md:text-right xs:text-center md:px-2">
          <li>
            <strong>Quick Links</strong>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/suits">Suits</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className=" lg:w-1/6 xs:w-5/6 xs:px-0 xs:pb-5">
        <ul className="md:text-right xs:text-center md:px-2">
          <li>
            <strong>Services</strong>
          </li>
          <li>Suits</li>
          <li>Suits for Wedding</li>
          <li>Corporate Uniform</li>
          <li>School Uniform</li>
          <li className="pt-5 ">
            <strong>Customer Care</strong>
          </li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Terms of Service</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className=" md:text-right lg:w-2/6 xs:w-5/6 xs:px-0 xs:pb-5">
        <div className="socmed ">
          <img />
        </div>
        <div className=" xs:p-0 md:pr-5">
          <Link to="/">
            <img
              className="h-20 md:justify-self-end xs:justify-self-center 
            border-b-2  border-b-marshalls-white "
              src={marshalls_tailoring}
            />
          </Link>
          <ul className="xs:text-center md:text-right">
            <li className="p-1">0945 273 1101</li>
            <li className="p-1">0939 740 1011</li>
            <li>
              <a
                className="cursor-pointer"
                href="mailto:marshalls.tailoring@gmail.com"
              >
                marshalls.tailoring@gmail.com
              </a>
            </li>
            <li className="p-1 md:justify-self-end xs:justify-self-center  w-3/4 border-b">
              <a
                className="cursor-pointer"
                target="_blank"
                href="https://www.google.com/maps/place/32+Malabanan+St,+Lipa,+4217+Batangas/@13.9427959,121.1613138,101m/data=!3m1!1e3!4m6!3m5!1s0x33bd6ca2e6ba4347:0x849c98e70a13e6a3!8m2!3d13.9428812!4d121.1613151!16s%2Fg%2F11nnkn42xs?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
              >
                2nd Floor Bldg. 1, Lipa City Public Market, Lipa City,
                Philippines
              </a>
            </li>
            <li className="p-1">
              &copy; 2024 All Rights Reserved. Marshalls Tailoring
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
