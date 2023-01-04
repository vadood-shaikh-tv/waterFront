import React, { useEffect, useState } from "react";
import darlinsImage from "../../Assets/Images/companyImage1.png";
import CrossCenterImage from "../../Assets/Images/companyImage2.png";
import CrossArenaImage from "../../Assets/Images/companyImage3.png";
import BoldPointImage from "../../Assets/Images/companyImage4.jpg";
import WestImage from "../../Assets/Images/companyImage7.jpg";
import AuraImage from "../../Assets/Images/companyImage5.jpg";
import "../CompanyNames/company.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Axios from "../../Service/Instance";
// import Darlings from "../EventsPage/PavilionsDarlings/Darlings";



export default function CompanyNames({ id, img }) {
  const navigate = useNavigate()

  const onNavigate = (id) => {
    navigate(`/Venue/VenueCardDetails`, { state: id })
  }
  return (
    <>

      <div className="companys" onClick={() => onNavigate(id)}>

        <img className="companyIcon" src={img} alt="" />
      </div>
    </>
  );
}
