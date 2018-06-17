import React from "react";

export const Records = props => (
  <div className="form-group">
      <label htmlFor="nbrRecords">Number of Records to Retrieve</label>
      <select id="nbrRecords" className="form-control" {...props}>
        <option>1</option>
        <option>5</option>
        <option>10</option>
      </select>
    </div>
);