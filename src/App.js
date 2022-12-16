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
import Faq from "./Components/FAQPage/Faq";
import General from "./Components/FAQPage/FAQ-Components/General"
import BoxOffice from "./Components/FAQPage/FAQ-Components/BoxOffice"
import ClearBag from "./Components/FAQPage/FAQ-Components/ClearBag"
import Contest from "./Components/FAQPage/FAQ-Components/Contest"
import PrivacyPolicy from "./Components/FAQPage/FAQ-Components/PrivacyPolicy"
import Smoking from "./Components/FAQPage/FAQ-Components/Smoking"
import Tickets from "./Components/FAQPage/FAQ-Components/Tickets"
import AccessibleService from "./Components/FAQPage/FAQ-Components/AccessibleService"
import SecondCard from "./Components/CardSec/SecondCard";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} >
          <Route path="Card" element={<Card />} />
          <Route path="SecondCard" element={<SecondCard />} />
        </Route>
        <Route path="/Featured" element={<Featured />} />


        {/* <Route path="/Card" element={<Card />} /> */}
        <Route path="/Darlings" element={<Darlings />} />
        <Route path="Venue" element={<Venue />} />
        <Route path="/VenueCardDetails" element={<VenueCardDetails />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/GuestService" element={<GuestService />} />
        <Route path="/Faq" element={<Faq />} >
          <Route path="General" element={<General />} />
          <Route path="BoxOffice" element={<BoxOffice />} />
          <Route path="ClearBag" element={<ClearBag />} />
          <Route path="Contest" element={<Contest />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="Smoking" element={<Smoking />} />
          <Route path="Tickets" element={<Tickets />} />
          <Route path="Accessible" element={<AccessibleService />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//  <Route path="/" element={<Navbar />} /><Route path="/Footer" element={<Footer />} />
