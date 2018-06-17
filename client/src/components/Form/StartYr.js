import React from "react";

export const StartYr = props => (
  <div className="form-group">
    <label htmlFor="startYear">Start Year (optional)</label>
    <input type="text" className="form-control" id="startYear" {...props} />
  </div>
);
