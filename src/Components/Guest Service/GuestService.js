import React from "react";
import { Link, NavLink } from "react-router-dom";
import AccessibleIcon from "../../Assets/Images/guestIcon1.png";
import ACCOMODATIONICON from "../../Assets/Images/guestIcon2.png";
import CLEARICON from "../../Assets/Images/guestIcon3.png";
import SMAOKEICON from "../../Assets/Images/guestIcon4.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./guestService.scss";

export default function GuestService() {
  return (
    <>
      <Navbar />
      <div className="GuestSection MainCommon">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="GuestHeading border-BottomClass">
                <h1>Guest Heading</h1>

              </div>
            </div>
          </div>
          <div className="GuestDetails">
            <div className="row">
              <div className="col-lg-8">
                <div className="QuestionSection boxStyle">
                  <div className="QuestionHeading">
                    <h3>FREQUENTLY ASKED QUESTIONS</h3>
                  </div>
                  <div className="SearchSec">
                    <div className="input-group SetPosition">
                      <div className="form-outline ">

                        <select className="form-select" aria-label="Default select example" placeholder="Choose FAQ">
                          <option value="1">Choose FAQ</option>
                          <option value="2">General</option>
                          <option value="3">Accessible</option>
                          <option value="4">Box Office</option>
                          <option value="5">Clear Bag Policy</option>
                          <NavLink to="Faq/General">
                            <option value="6">Smoking Policy</option>
                          </NavLink>
                          <option value="7">Tickets</option>
                          <option value="8">Contest Rules</option>
                          <option value="9">Privacy Policy</option>
                        </select>
                      </div>
                      <i className="fas fa-search searchIconSet"></i>
                      <button type="button" className="SeacrhFaqbtn ">
                        SEARCH
                      </button>
                    </div>
                  </div>
                  <div className=" GoFaqPageBtn">
                    <Link to="/Faq/General">
                      <button type="" className="btn-primary GoFaqBtn">
                        GO TO FAQ PAGE
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <Link to="/Faq/Accessible">
                      <div className="boxStyle FaqList">
                        <a href="">
                          <img src={AccessibleIcon} alt="" />
                          <h3>ACCESSIBLE SERVICES</h3>
                        </a>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link to="/Faq/General">
                      <div className="boxStyle FaqList">
                        <a href="">
                          <img src={ACCOMODATIONICON} alt="" />
                          <h3>ACCOMODATIONS</h3>
                        </a>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link to="/Faq/ClearBag">
                      <div className="boxStyle FaqList">
                        <a href="">
                          <img src={CLEARICON} alt="" />
                          <h3>CLEAR BAG</h3>
                        </a>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <Link to="/Faq/Smoking">
                      <div className="boxStyle FaqList">
                        <a href="">
                          <img src={SMAOKEICON} alt="" />
                          <h3>SMOKE FREE</h3>
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="LostSection boxStyle">
                  <div className="LostHeading">
                    <h3>LOST AND FOUND CLAIM</h3>
                    <p>Lost Something</p>
                    <p>
                      Please fill out the form below and we'll contact you and
                      let you know if we found your item.
                    </p>
                    <p>Fields marked with * are required.</p>
                  </div>
                  <div className="LostFormSec">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Lost Item
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Description
                        </label>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Phone Number
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                        />
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="SubmitBtn">
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
