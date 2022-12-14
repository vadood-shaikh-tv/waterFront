import Card from "../CardSec/Card";
import "../Featured/featured.scss";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Featured() {
  const [key, setKey] = useState("home");
  return (
    <>
      <div className="ShowsSection">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="featuredShowSec border-BottomClass">
                <div className="featuredContent">
                  <div className="featuredHeading">
                    <h1>FEATURED SHOWS</h1>
                  </div>
                  <div className="GetUpdateSec">
                    {/* <!-- Button trigger modal --> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      GET UPDATE ON OUR EVENTS
                    </button>

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              GET UPDATES ON OUR EVENTS
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modalBG">
                            <div className="modal-body">
                              <h2>Sign up for WFC updates!</h2>
                              <p>
                                Stay up to date on all of our new shows and
                                special announcements!
                              </p>
                              <form>
                                <div className="mb-4">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="exampleInputFirst1"
                                    className="form-label"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="name"
                                    className="form-control"
                                    id="exampleInputfirst1"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="exampleInputLast1"
                                    className="form-label"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="last"
                                    className="form-control"
                                    id="exampleInputLast1"
                                    aria-describedby="emailHelp"
                                  />
                                </div>

                                <div className="mb-4">
                                  <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                  >
                                    Postal Code
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                  />
                                </div>

                                <div>
                                  <p>
                                    By submitting this form, you are consenting
                                    to receive marketing emails from: Waterfront
                                    Concerts, 275 Fourth Street, Old Town, ME,
                                    04468, US,
                                    http://www.waterfrontconcerts.com. You can
                                    revoke your consent to receive emails at any
                                    time by using the SafeUnsubscribe® link,
                                    found at the bottom of every email. Emails
                                    are serviced by Constant Contact.
                                  </p>
                                </div>
                                <div className="ModalSignupBtn">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    SIGN UP!
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  Oops! There are currently no shows available in your city.
                  Check back soon.
                </p>
              </div>
            </div>
          </div>
          <div className="row border-BottomClass upcomingShowSec">
            <div className="">
              <div>
                <div className="featuredContent">
                  <div className="featuredHeading">
                    <h1>UPCOMING SHOWS </h1>
                  </div>
                  <div className="SelectSec">
                    <div className=" locationContent">
                      <h5 className="selectHeading">LOCATION :</h5>
                      <span>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option>All</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </span>
                    </div>
                    <div className="Venue">
                      <div className=" locationContent">
                        <h5 className="selectHeading">VENUE :</h5>
                        <span>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </span>
                      </div>
                    </div>
                    <div className="GridIcon">
                      <span>
                        <i
                          className="fa-sharp fa-solid fa-list"
                          eventkey="home"
                          title="Home"
                        ></i>
                      </span>
                      <span>
                        <i className="fa-sharp fa-solid fa-list"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tabs */}
      <div className="TabsSec">
        <div className="container">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <Card />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <h1>world</h1>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}