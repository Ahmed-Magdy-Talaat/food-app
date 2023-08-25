import React from "react";
import "../../css/Analytics.css";
function Statistics() {
  return (
    <div class="stat-contain">
      <div className="title">
        <div>Statistics</div>
        <div className="dropDown">
          <label for="statistics"></label>
          <select name="stat-period" id="stat-period">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className="stat-details">
        <div className="card">
          <div className="profit">$143,624</div>
          <div className="detailed">Total order Recieved</div>
          <div className="text-muted">$173,452</div>
        </div>
        <div className="card">
          <div className="profit">$143,624</div>
          <div className="detailed">Total order Recieved</div>
          <div className="text-muted">$173,452</div>
        </div>
        <div className="card">
          <div className="profit">$143,624</div>
          <div className="detailed">Total order Recieved</div>
          <div className="text-muted">$173,452</div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
