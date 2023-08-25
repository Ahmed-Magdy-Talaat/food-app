import React from "react";
import { Customer } from "../pages/Customer";
import "../css/customerstyles.css";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClass = i <= rating ? "star-icon star-icon-filled" : "star-icon";
      stars.push(
        <span key={i} className={starClass}>
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
