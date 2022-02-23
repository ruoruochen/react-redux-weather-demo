import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "@pages/Home";
import Search from "@pages/Search";
import store from "@redux";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
