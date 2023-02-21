import React from "react";
import Filters from "./Filters";
import airplaneUrl from "./assets/images/airplane.png";
import countryUrl from "./assets/images/country.png";

import "bootstrap/dist/css/bootstrap.min.css";

function AirlineView(props) {
  return (
    <div>
      <div class="container">
        <div class="totalContainer">
          <div class="leftBackgroundBorder"></div>
          <div class="rightBackgroundBorder"></div>

          <div class="headerBackgroundGray">
            <div class="row">
              <div class="col-xs-8 col-lg-8 alignLeft headerPadding">
                <span class="amadeusSubtitleFont">Airlines View</span>
              </div>
              <div class="col-xs-4 col-lg-4 alignRight headerPadding hideOverflow">
                <div class="tabs">
                  <div
                    class="tabActive handCursor"
                    onClick={console.log("changeLocation('airlines')")}
                  >
                    <img
                      alt="Airlines"
                      class="handCursor"
                      height="25"
                      src={airplaneUrl}
                      title="Airlines"
                      width="25"
                    />
                    <span>Airlines View</span>
                  </div>
                  <div
                    class="tabUnactive handCursor"
                    onClick={() => console.log("changeLocation('onds')")}
                  >
                    <img
                      alt="O&amp;D"
                      class="handCursor"
                      height="25"
                      src={countryUrl}
                      title="Origins and Destinations"
                      width="25"
                    />
                    <span>O&amp;D View</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mainBackground">
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirlineView;
