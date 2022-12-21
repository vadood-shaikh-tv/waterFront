
import { Link } from "react-router-dom";
import CrossCenterImage from "../../../Assets/Images/companyImage2.png";
import "./venueCard.scss";

export default function VenueCard({ title, image, address }) {

  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="VenueShowsCard">
          <div className="VenueCardSection">
            <div className="VenueCard">

              <div className="card">
                <div className="CardImage">

                  <img src={image} className="card-img-top" alt="..." />
                </div>
                <hr />

                <div className="card-body">
                  <div className="VenueCardDetail">

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{address}</p>
                  </div>
                </div>
                <div className="card-footer">
                  <Link to="/VenueCardDetails">
                    <a className="btn btn-primary MoreInfoBtn">
                      MORE INFO
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
