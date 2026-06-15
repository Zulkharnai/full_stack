import React from "react";
import NotFoundImg from "../../assets/image 2.svg";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img src={NotFoundImg} alt="not found" width={300} />
    </div>
  );
}

export default NotFound;
