import React from "react";

export const EndYr = props => (
  <div className="form-group">
    <label htmlFor="endYear">End Year (optional)</label>
    <input type="text" className="form-control" id="endYear" {...props} />
  </div>
);
