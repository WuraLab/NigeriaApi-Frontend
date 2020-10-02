import React, { Component } from "react";

class Institution extends Component {
  render() {
    return (
        <div id="header-nav">
        <div className="container">
          <div className="row">
            <nav className="col navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="index.html">
                NIGERIA API
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="navbarContent"
                className="collapse navbar-collapse justify-content-end"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a
                      className="nav-link"
                      href="https://documenter.getpostman.com/view/7357882/T1Ds8uvo"
                      target="blank"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Generate API key
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        </div>

      

    );
  }
}

export default Institution;
