import { useState } from "react";

export default function Welcome() {
  const [status, setStatus] = useState(false);

  function toggleStatus() {
    setStatus((prevState) => !prevState);
  }

  return (
    <>
    <div className="line-gif"></div>
      <div className="welcome-container flex-left-align">
        
        <h1 className="welcome-title">Need a Website?</h1>
        <h3 className="welcome-text">
          Use our cost estimator tool to get an estimate for your project, or
          schedule a free consultation to work with one of our developers.
        </h3>
        <div className="flex-left-align button-box">
          <button>Estimate Cost</button>
          <button>Schedule a Consultation</button>
        </div>
      </div>
    </>
  );
}
