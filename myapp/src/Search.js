import React, { useState} from "react";
import "./Weather.css";


export default function Search(props) {
  const [City, setCity] = useState("");
  //HANDING SUBMIT
  function handleSubmit(event) {
    event.preventDefault();
    //alert(City);
    props.onSubmit(City);
  }

  function updateInput(event) {
    setCity(event.target.value);
  }


  return (
    <div className="Search">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="  ... City Name ..."
              className="form-control"
              onChange={updateInput}
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
