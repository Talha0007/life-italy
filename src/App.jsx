import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Marchant from "./pages/Marchant";
import Events from "./pages/Events";
import Categories from "./pages/management/Categories";
import SpecialCategories from "./pages/management/SpecialCategory";
import Coupons from "./pages/management/Coupon";
import CrediePackages from "./pages/management/CrediePackages";
import AdminUser from "./pages/Administations/AdminUser";
import AppUser from "./pages/Administations/AppUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchants" element={<Marchant />} />
        <Route path="/events" element={<Events />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/scategories" element={<SpecialCategories />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/creditpackages" element={<CrediePackages />} />
        <Route path="/admins" element={<AdminUser />} />
        <Route path="/appusers" element={<AppUser />} />
      </Routes>
    </>
  );
}

export default App;
