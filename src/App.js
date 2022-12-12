import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EventPage from "./Components/EventsPage/EventPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/navbar" element={<EventPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
