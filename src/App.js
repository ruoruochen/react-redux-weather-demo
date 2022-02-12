import { Router, Route } from "react-router";
import Home from "../src/pages/Home";
import Search from "../src/pages/Search";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" component={<Home />}></Route>
      <Route path="/search" component={<Search />}></Route>
    </Router>
  );
}

export default App;
