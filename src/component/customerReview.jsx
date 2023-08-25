import React from "react";
import StarRating from "../component/starRating";
import "../css/customerstyles.css";
export const CustomerReview = ({
  img,
  name,
  date,
  review,
  productRating,
  orderImg,
}) => {
  return (
    <div style={{ margin: "10px" }}>
      <div className="review-body">
        <div className="review-li">
          <div className="customer-data-name-review">
            <img src={img} alt="user-img" />
            <div className="customer-name-review">
              <h6>{name}</h6>
              <p>{date} days ago</p>
            </div>
          </div>
          <div className="customer-review-text">
            <div className="review-rate">
              <p>{review}</p>
              <div className="rating">
                <StarRating rating={productRating} />
              </div>
            </div>
            <div className="order-img">
              <img src={orderImg} alt="orderimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
