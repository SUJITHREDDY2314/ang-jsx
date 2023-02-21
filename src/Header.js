import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import logoUrl from "./assets/logo.png";
function Header() {
  const options = ["sujith1", "sujith2", "sujith3"];
  return (
    <div className="blueBackground">
      <div className="container">
        <div className="grayHeaderHeight appBar">
          <img
            alt="Amadeus"
            height="36"
            src={logoUrl}
            title="Amadeus Business Intelligence"
            width="128"
          />
          <div
            className="userMenuDropdown"
            uib-dropdown
            auto-close="outsideClick"
            is-open="$ctrl.userMenuOpened"
          >
            <DropdownButton
              autoClose="outside"
              variant="#0e7fc3"
              className="userMenuDropdown"
              title="mereddy.sujith@amadeus.com (despegar) "
              id="dropdown-menu-align-end"
            >
              <div className="accountField">
                <label className="control-label" htmlFor="account">
                  Account
                </label>

                <DropdownButton
                  autoClose="outside"
                  title="Dropdown end"
                  id="dropdown-item-butto"
                  variant="white"
                >
                  {options.map((option, index) => {
                    return (
                      <Dropdown.Item eventKey={index}>{option}</Dropdown.Item>
                    );
                  })}
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              </div>
              <div>
                <a href="#" onClick={console.log("logout")}>
                  Log-out
                </a>
              </div>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
