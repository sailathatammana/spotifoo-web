import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/style.css";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Searchpage from "./components/SearchPage";
import FilterResults from "./components/FilterResults";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Searchpage} />
          <Route exact path="/:filtertype/:id" component={FilterResults} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
