import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProfilesCard from "./pages/ProfilesCard";
import ProfileDetails from "./pages/ProfileDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles-list" element={<ProfilesCard />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </div>
  );
}

export default App;