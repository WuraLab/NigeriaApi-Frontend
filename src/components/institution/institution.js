import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./institutions.css";

import institution from '../dashboard/images/institution.png'


library.add(fab, faCheckSquare, faCoffee)
class Institution extends Component {
  render() {
    return (
        <div id="header-nav">
        <div className="container">
          <div className="row">
            <nav className="col navbar fixed-top navbar-expand-lg navbar-dark">
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
        {/* //  CARD SECTION============ */}
         <div className="container">
         <div className="col colhead">
              <h1>Institutions API Collections</h1>
            </div>
         <div className="card">
                    <img className="card-img-top" src={institution} alt="Card image cap"/>
                    <div className="card-body">
                    <p className="card-title h3">Universities</p>
                    <p className="card-text">This collection contains universities data all over Nigeria.</p>
                    <a href="https://documenter.getpostman.com/view/7357882/T1Ds8uvo#7e35e2c2-7368-47df-83d3-20a53dda7e5d" target="blank"class="btn btn-primary">GET API</a>
                     </div>
             </div>

             <div className="card mt-3">
                    <img className="card-img-top" src={institution} alt="Card image cap"/>
                    <div className="card-body">
                    <p className="card-title h3">Polytechnics</p>
                    <p className="card-text">This collection contains polytechnics data all over Nigeria..</p>
                    <a href="https://documenter.getpostman.com/view/7357882/T1Ds8uvo#02d0d7cd-5829-4fbf-841f-b2c0576e46d9" target="blank" class="btn btn-primary">GET API</a>
                     </div>
             </div>
         </div>


        {/* //======= footer ======= */}
        <div className="bg-light mt-4">
          <div className="container">
            <div className="row pt-4 pb-3">
              <div className="col">
                <ul className="list-inline text-center">
                  <li className="list-inline-item">
                    <a href="#">About Us</a>
                  </li>
                  <li className="list-inline-item">&middot;</li>
                  <li className="list-inline-item">
                    <a href="#">Privacy</a>
                  </li>
                  <li className="list-inline-item">&middot;</li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

      

    );
  }
}

export default Institution;
