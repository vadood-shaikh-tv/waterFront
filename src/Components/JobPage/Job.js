import React, { useEffect, useState } from "react";
import Axios from "../../Service/Instance";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import LoadingImage from "../../Assets/Images/loading_Gif.gif"
import "./job.scss";

export default function Job() {
  const [item, setitem] = useState()
  const [loading, setLoading] = useState(false);


  const GetApi = async () => {
    try {
      setLoading(true)
      const responsss = await Axios.get("/web/ticket-submenu?slug=jobs")
      setitem(responsss.data.data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }
  useEffect(() => {
    GetApi()
  }, [])
  if (loading) {
    return (<><div className="loadingDiv">
      <img className="LoadingImage" src={LoadingImage} alt="" />
    </div></>)
  }
  const parse = require('html-react-parser');
  return (
    <>
      <Navbar />
      <div className="MainCommon">
        <div className="JobSection">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="JobHeadSec">
                  <div className="JobHeading  border-BottomClass">
                    <h1>{item ? parse(item.slug) : ""}</h1>
                  </div>
                  <div className="JobDetailSec boxStyle">
                    {item ? parse(item.content) : ""}
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
