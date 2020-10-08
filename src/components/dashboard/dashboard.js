import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ASSETS
import tourism from "./images/tourism.jpeg";
import industry from "./images/industry.jpeg";
import institution from "./images/institution.png";

import "./dashboard.css";
library.add(fab, faCheckSquare, faCoffee)

class Dashboard extends Component {
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
                  <li className="nav-item active pr-3">
                    <a className="nav-link" href="https://documenter.getpostman.com/view/7357882/T1Ds8uvo" target="blank"> 
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item pr-3">
                    <a className="nav-link" href="#">
                      Generate API key
                    </a>
                  </li>
                  <li className="nav-item pr-3">
                    <a className="nav-link" href="#">
                      Contribute <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="container">
          <div className="row my-3">
            <div className="col">
              <h1>Nigeria API Collections</h1>
            </div>
          </div>
          <div className="row">
              <div className="col-12 col-lg-4">
              <div className="card mb-4 mb-lg-0 border-light shadow-sm">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
            <img class="d-block w-100" src={tourism} alt="First slide"/>
        </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={tourism} alt="Second slide"/>
             </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={tourism} alt="Third slide"/>
             </div> 
  </div>
</div>
                <div className="card-body">
                  <p className="card-title h3">Institutions</p>
                  <p className="card-text">
                    This is a collection of institutions API, ranging from
                    Universities, Polytechnics, and College of Educations
                  </p>
                  <a
                    href="/institution" target="blank"
                    className="btn btn-primary stretched-link"
                  >
                    
                      Explore API
                  
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card mb-4 mb-lg-0 border-light shadow-sm">
                <img src={tourism} alt="tourism" className="card-img-top" />
                <div className="card-body">
                  <p className="card-title h3">Tourism</p>
                  <p className="card-text">
                    Collection of everything tourism in Nigeria like pristine
                    beaches, historical monuments,tropical forests, wildlife,
                    ancient sites, diverse art and culture. etc
                  </p>
                  <a
                    href="lesson-1.html"
                    className="btn btn-primary stretched-link"
                  >
                    Explore API
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card mb-4 mb-lg-0 border-light shadow-sm">
                <img src={industry} alt="industry" className="card-img-top" />
                <div className="card-body">
                  <p className="card-title h3">Industries</p>
                  <p className="card-text">
                    A collection of the industries and companies in Nigeria
                  </p>
                  <a
                    href="lesson-1.html"
                    className="btn btn-primary stretched-link"
                  >
                    Explore API
                  </a>
                </div>
              </div>
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

export default Dashboard;
