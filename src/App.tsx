import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Searchpage} />
          <Route exact path="/:filter/:search" component={FilterResults} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
