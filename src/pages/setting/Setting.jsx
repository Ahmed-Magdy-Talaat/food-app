import React from "react";
import "./settings.css";

const Setting = () => {
  return (
    <div className="setting-container">
      <div className="settings-sidebar">
        <h3>Settings</h3>
        <div className="settings-items">
          <ul>
            <li>Personal Information</li>
            <li>Menu Management</li>
            <li>Order Management</li>
            <li>Security&Privacy</li>
            <li>Payment &Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Setting;
