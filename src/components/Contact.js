import React, { useState } from "react";
import "../CSS/contact.css";

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
    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>

      <div className="contact-left">
        <div className="profile-picture">
          <img alt="gireesh reddy" src="../assets/Gireesh.jpeg" />
        </div>
        <div className="social-media-links">
          {/* Add your social media icons and links here */}
        </div>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
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
  );
};

export default ContactUs;
