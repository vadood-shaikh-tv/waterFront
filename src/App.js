import "./App.css";
import { Route, Routes } from "react-router-dom";
import EventPage from "./Components/EventsPage/EventPage";
import Featured from "./Components/Featured/Featured";
import Card from "./Components/CardSec/Card";
import GuestService from "./Components/Guest Service/GuestService";
import Job from "./Components/JobPage/Job";
import Venue from "./Components/VenuePage/Venue";
import VenueCardDetails from "./Components/VenuePage/VenueCard/VenueCardDetail/VenueCardDetails";
import Faq from "./Components/FAQPage/Faq";
import General from "./Components/FAQPage/FAQ-Components/General";
import SecondCard from "./Components/CardSec/SecondCard";
import Season from "./Components/Tickets/SeasonPage/Season";
import Contact from "./Components/ContactPage/Contact";

function App() {
  return (
    <>
      <div className="MAIN">
        <Routes>
          <Route path="/" element={<EventPage />}>
            <Route path="/Card" element={<Card />} />
            <Route path="/SecondCard" element={<SecondCard />} />
          </Route>
          <Route path="/Featured" element={<Featured />} />
          <Route path="/Venue" element={<Venue />} />
          <Route path="Venue/VenueCardDetails" element={<VenueCardDetails />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/GuestService" element={<GuestService />} />
          <Route path="/Faq" element={<Faq />}>
            <Route path="General" element={<General />} />
          </Route>
          <Route path="/Season/:slug" element={<Season />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
