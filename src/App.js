import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import "tw-elements";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import AbsoluteNav from "./components/AbsoluteNav";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={
              <>
               <AbsoluteNav/>
                <Home />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
               
                <Register />
              </>
            }
          />
            <Route
            path="/product"
            element={
              <>
                <Navbar />
                <Product/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
