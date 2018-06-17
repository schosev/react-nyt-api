import React from "react";

// export const Input = props => (
//   <div className="form-group">
//     <input className="form-control" {...props} />
//   </div>
// );

export const Search = props => (
  <div className="form-group">
    <label htmlFor="inputSearch">Search Term</label>
    <input type="text" className="form-control" id="inputSearch" {...props} />
  </div>
);
