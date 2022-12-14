import "./App.css";
import { Route, Routes } from "react-router-dom";
import EventPage from "./Components/EventsPage/EventPage";
import Featured from "./Components/Featured/Featured";
import Card from "./Components/CardSec/Card";
import Darlings from "./Components/EventsPage/PavilionsDarlings/Darlings";
import GuestService from "./Components/Guest Service/GuestService";
import Job from "./Components/JobPage/Job";
import Venue from "./Components/VenuePage/Venue";
import VenueCardDetails from "./Components/VenuePage/VenueCard/VenueCardDetail/VenueCardDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/Featured" element={<Featured />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Darlings" element={<Darlings />} />
        <Route path="Venue" element={<Venue />} />
        <Route path="/VenueCardDetails" element={<VenueCardDetails />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/GuestService" element={<GuestService />} />
      </Routes>
    </>
  );
}

export default App;

//  <Route path="/" element={<Navbar />} /><Route path="/Footer" element={<Footer />} />
