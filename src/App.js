import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import "tw-elements";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
            <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
