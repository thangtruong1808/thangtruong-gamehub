import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import Reviewpage from "./components/Review";
import NewReleasespage from "./components/NewReleases";
import AllGamespage from "./components/AllGames";
import Browsespage from "./components/Browse";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/reviews" element={<Reviewpage />} />
    </Routes>
  );
}

export default App;
