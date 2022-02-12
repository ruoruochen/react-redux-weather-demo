import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Search from "../src/pages/Search";
import store from "./redux";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes store={store}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
