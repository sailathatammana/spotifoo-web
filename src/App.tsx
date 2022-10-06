import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/style.css";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Searchpage from "./pages/SearchPage";
import FilterResults from "./pages/FilterResults";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/:filter/:search" element={<FilterResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
