import React from "react";

import "./Weather.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="  ... City Name ..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary " />
          </div>
        </div>
      </form>
    </div>
  );
}
