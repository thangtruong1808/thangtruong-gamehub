import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import Reviewpage from "./components/Review";
import NewReleasespage from "./components/NewReleases";
import AllGamespage from "./components/AllGames";
import Browsespage from "./components/Browse";
import Layout from "./components/Layout";
import ErrorPage from "./components/NoPage";

function App() {
  return (
    <></>
    // <Router>
    //   <Layout />
    //   <Routes>
    //     <Route path="/" element={<Layout />} />
    //     <Route index element={<Homepage />} />
    //     <Route path="/reviews" element={<Reviewpage />} />
    //     <Route path="*" element={<ErrorPage />} />
    //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
