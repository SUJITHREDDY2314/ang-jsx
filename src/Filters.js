import React, { useState } from "react";
import loaderUrl from "./assets/images/loader.gif";
import filtersUrl from "./assets/images/filters.png";

import "bootstrap/dist/css/bootstrap.min.css";
import DateSelector from "./DateSelector";

function Filters(props) {
  console.log("hellos");
  const [radioselected, setRadio] = useState(false);
  const radioChange = () => {
    console.log("hello");
    setRadio((prev) => !prev);
  };

  const [bool, setBool] = useState(true);
  return (
    <div>
      <div className="row separacionSuperior">
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-8 alignLeft">
          <div className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
              <div className="blueFont OandD">O&amp;D</div>
            </div>
            <div className="col-xs-11 col-sm-7 col-md-7 col-lg-7 alignLeft rightPadding10px">
              <div className="input-group mb-3 input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  From:
                </span>
                <input
                  className="form-control"
                  placeholder="Country, city or airport"
                  type="text"
                />

                <span className="input-group-text">To:</span>
                <input
                  className="form-control"
                  placeholder="Country, city or airport"
                  type="text"
                  uib-typeahead="location as location.id + ' (' + location.name + ')' for location in retrieveLocations($viewValue) | limitTo:8"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 alignLeft leftPadding5px">
              <div className="input-group mb-3 input-group-prepend">
                <span className="input-group-text">Marketing Carrier:</span>
                <input
                  className="form-control"
                  placeholder="Airline name/code"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 alignRight">
          <button
            className="btn btn-default blueFont"
            id="moreFiltersButton"
            onClick={() => console.log("sujith Reddy")}
          >
            More Filters&nbsp;
            <img
              alt="Filters"
              height="24"
              src={filtersUrl}
              title="Show more filters"
              width="20"
            />
          </button>

          <div
            id="mostrarPopUp"
            // popup
          ></div>
        </div>
      </div>

      <div className="row separacionSuperior">
        {/* <div
          date-selector
          selected-date="provisionalCriteria.selectedDate"
          show-specific `-date="provisionalCriteria.dateType == 'departure'"
        ></div> */}
        <DateSelector selected={radioselected} />
      </div>

      <div className="row leftPadding5px">
        <div className="col-lg-5 col-md-5 col-sm-7 col-xs-8 bottomShadow">
          <div className="radio-filter-line">
            <label className="radio-inline">
              <input
                type="radio"
                value="booking"
                name="radio-btn-dep-date"
                onClick={() => radioChange}
                checked
              />
              <span className="blueFont">Booking Date</span>
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                value="departure"
                name="radio-btn-dep-date"
                onClick={() => radioChange}
              />
              <span className="blueFont">Departure Date</span>
            </label>
            <a
              className="resetFilterLink handCursor"
              onClick={() => console.log("sujith")}
            >
              Reset all filters
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-5 col-xs-4 leftPadding0">
          <div className="diagonalShadow"></div>
          <div className="paddingTopShadow">
            <div className="topShadow">
              <div className="resetFiltersDiv">
                Loading
                <img height="19" src={loaderUrl} width="220" />
              </div>
            </div>
          </div>
          <div className="updateButton" onClick={console.log("update clicked")}>
            Update
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
