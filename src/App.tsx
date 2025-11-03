import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavMenu from "./components/organisms/NavMenu/NavMenu";
import LandingPage from "./components/pages/LandingPage/LandingPage";

function App() {

  return (
    <div>
      <NavMenu />
      <div className="">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
