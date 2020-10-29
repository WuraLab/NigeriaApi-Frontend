import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cookie from "react-cookies";
import Axios from "axios";

// ASSETS
import tourism from "./images/tourism.jpeg";
import industry from "./images/industry.jpeg";
import institution from "./images/institution.png";

import "./dashboard.css";
import { Button, Modal } from "react-bootstrap";
library.add(fab, faCheckSquare, faCoffee);

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      token: "",
      modalShow: false,
      apiKey: "",
    };
  }

  componentDidMount() {
    this.setState({ token: cookie.load("userToken") });
  }

  setModalShow(val) {
    this.setState({ modalShow: val });
  }

  genrateApi = (e) => {
    e.preventDefault();

    Axios.get(
      `https://nigeria-api-backend.herokuapp.com/api/v1/users/generateApikey`,
      {
        headers: {
          //"Content-Type": "application/json",
          Authorization: `Bearer ${this.state.token}`,
        },
      }
    )
      .then((res) => {
        console.log(res);
        this.setState({ apiKey: res.data.apikey });
      })
      .catch((err) => console.log(err));

    this.setModalShow(true);
    console.log(this.state.apiKey);
  };

  ApiModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">API Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Developer API Key </h3>
          <h5 className="font-weight-bold text-secondary">{props.apikey}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
                    <a
                      className="nav-link"
                      href="https://documenter.getpostman.com/view/7357882/T1Ds8uvo"
                      target="blank"
                    >
                      Documentation
                    </a>
                  </li>
                  <li className="nav-item pr-3">
                    <a className="nav-link" href="#" onClick={this.genrateApi}>
                      Generate API key
                    </a>
                  </li>

                  <li className="nav-item pr-3">
                    <a className="nav-link" href="https://github.com/WuraLab/NigeriaApi" target="blank">
                      Contribute <FontAwesomeIcon icon={["fab", "github"]} />

                  
      

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
                <img src={institution} alt="tourism" className="card-img-top" />
                <div className="card-body">
                  <p className="card-title h3">Institutions</p>
                  <p className="card-text">
                    This is a collection of institutions API, ranging from
                    Universities, Polytechnics, and College of Educations
                  </p>
                  <a
                    href="/institution"
                    target="blank"
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

        <this.ApiModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
          apikey={this.state.apiKey}
        />
      </div>
    );
  }
}

export default Dashboard;
