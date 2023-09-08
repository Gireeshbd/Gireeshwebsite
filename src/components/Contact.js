import * as React from "react";
import { useState } from "react";
import "../CSS/contact.css";
import Gireesh from "../assets/gireesh.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to submit the form data to a backend server here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    event.preventDefault();

    const myForm = event.target;
    console.log(myForm);
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <div className="contact-us-container">
        <div className="contact-left">
          <img className="profile-picture" alt="Gireesh Reddy" src={Gireesh} />

          <div className="social-media-links">
            {/* Add your social media icons and links here */}
            <span className="linkedIn">
              <faLinkedin />
            </span>
          </div>
        </div>
        <div className="contact-right">
          <form
            data-netlify="true"
            name="name"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
