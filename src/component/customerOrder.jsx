import React from "react";

export const CustomerOrder = ({ name, precentage, img, order }) => {
  return (
    <div className="customer-body">
      <div className="customer-data">
        <div className="customer-img">
          <img src={img} alt={name} />
        </div>
        <div className="customer-data-body">
          <div className="customer-name">
            <h6>{name}</h6>

            <div className="customer-order-name">
              <p>{order}</p>
              <p className="order-precentage-p">{precentage}%</p>
            </div>
            <div className="precentage-container">
              <div
                className="precentage-bar"
                style={{ width: `${precentage}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
