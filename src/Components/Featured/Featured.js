import "../Featured/featured.scss";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FeturedCard from "./FeaturedCardPage/FeturedCard";
import APICalling from "../APICalling";
import Axios from "../../Service/Instance";
import GridIcon from "../../Assets/Images/listgrid.png"


export default function Featured() {
  // FEATURED API 
  const [value, setValue] = useState([])

  const FeaturedApi = async () => {
    const getResponse = await Axios.get("/events?currentPage=1&eventType=ONSALE&pageSize=4&sortBy=location")
    // console.log("vadood", getResponse.data.data)
    setValue(getResponse.data.data)
  }

  useEffect(() => {
    FeaturedApi()
  }, [])

  const [isActive, setIsActive] = useState(false);
  const [isActiveSecond, setIsActiveSecond] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };


  return (
    <>
      {/* <APICalling /> */}
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
                                    htmlFor="exampleInput1"
                                    className="form-label"
                                  >
                                    Postal Code
                                  </label>
                                  <input
                                    type=""
                                    className="form-control"
                                    id="exampleInput"
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
              <div className="FeaturedCardSec">
                <div className="row">
                  {value.map((value) => {
                    return <FeturedCard title={value.title} image={value.featureImage} date={value.seoDescription} secondTitle={value.seoTitle} thirdTitle={value.subTitle} Price={value.price} />
                  })}

                </div>
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
                      <Link to="Card" >
                        <span className={isActive ? 'LightGridIcon1' : 'gridicon1'} onClick={handleClick}>

                        </span>
                      </Link>
                      <Link to="SecondCard">
                        <span className={isActive ? 'LightGridIcon2' : 'gridicon2'} onClick={handleClick}>

                        </span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">

            <Outlet />

          </div>
        </div>
      </div>
    </>
  );
}
