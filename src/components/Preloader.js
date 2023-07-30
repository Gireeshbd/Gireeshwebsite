import * as React from "react";
import { useState, useEffect } from "react";

import "../CSS/preloader.css";

const PreLoader = () => {
  // You can add any additional state or logic related to the pre-loader if needed
  // For this basic example, we're only using the loading state to show/hide the pre-loader.

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API call or resource loading)
    // Replace the following setTimeout with your actual loading logic
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulating a 3-second loading time
  }, []);

  return (
    <div className="pre-loader-container">
      {loading && (
        <div className="pre-loader">
          <div className="loader-circle"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PreLoader;
