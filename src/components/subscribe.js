import * as React from "react";
import { useEffect, useState } from "react";

const PopupSubscribeForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = () => {
    // Handle the subscribe functionality here
    // e.g., make an API call to submit the user's email

    // After subscribing, you can close the popup
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Subscribe to our newsletter</h2>
            <p>Enter your email to receive updates and news.</p>
            <input type="email" placeholder="Your email address" />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupSubscribeForm;
