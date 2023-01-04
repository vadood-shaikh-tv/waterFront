import { useNavigate } from "react-router-dom";
import "./venueCard.scss";

export default function VenueCard({ title, image, address, id }) {

  const navigate = useNavigate()

  // const onNavigate = (id) => {
  //   navigate(`/Venue/VenueCardDetails`, { state: id })
  // }
  const onNavigate = (id) => {
    navigate(`/Venue/VenueCardDetails`, { state: id })
  }

  // Venue chlid API
  //api.waterfrontconcerts.com/events?currentPage=1&pageSize=12&venueId=5e2eea0d1700cb32758e0b98
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
                  <a className="btn btn-primary MoreInfoBtn" onClick={() => onNavigate(id)}>
                    MORE INFO
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
