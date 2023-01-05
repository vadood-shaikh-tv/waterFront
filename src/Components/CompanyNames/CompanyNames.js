import React from "react";
import "../CompanyNames/company.scss";
import { useNavigate } from "react-router-dom";

export default function CompanyNames({ id, img }) {
  const navigate = useNavigate()

  const onNavigate = (id) => {
    navigate(`/Venue/VenueCardDetails`, { state: id })
  }
  return (
    <>
      <div className="col-sm-2">
        <div className="companys" onClick={() => onNavigate(id)}>
          <img className="companyIcon" src={img} alt="" />
        </div>
      </div>
    </>
  );
}
