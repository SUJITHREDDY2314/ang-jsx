// eslint-disable-next-line

import logo from "../../assets/images/logo.png";

import { connect } from "react-redux";

import { useEffect, useState } from "react";

import "../../amadeus.css";

import "./header.css";

import "../../grid.less";

function Header(props) {
  const [header, setHeader] = useState({
    email: props.userSettings.user.email,

    activeAccount: undefined,

    availableAccounts: [],
  });

  useEffect(() => {
    if (props && props.availableAccount && props.availableAccounts) {
      setHeader({
        ...header,

        activeAccount: props.availableAccount.name,

        availableAccounts: props.availableAccounts,
      });
    }
  }, [props]);

  return (
    <>
      <div className="blueBackground">
        <div className="container">
          <div className="grayHeaderHeight appBar">
            <img
              alt="Amadeus"
              height="30"
              src={logo}
              title="Amadeus Business Intelligence"
              width="128"
            />

            <div className="userMenuDropdown" auto-close="outsideClick">
              <button className="accountName dropdown-toggle">
                {header.email}

                {`(${header.activeAccount})`}

                <span className="caret"></span>
              </button>

              <div className="dropdown-menu userMenuDropdownMenu pull-right">
                <div className="userMenuDropdownPanel">
                  <div className="accountField">
                    <label className="control-label" for="account">
                      Account
                    </label>

                    <select id="account" className="form-control">
                      {header &&
                        header.availableAccounts.map((account, a) => {
                          return (
                            <option value={account.name} key={a}>
                              {account.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div>
                    <a href="void:0">Log-out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userSettings: state.app.userSettings,

    availableAccount: state.app.availableAccount,

    availableAccounts: state.app.availableAccounts,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
