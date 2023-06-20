import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { useState } from "react";
import { RegisterPage } from "../pages/RegisterPage";
import { DashbordPage } from "../pages/DashbordPage";

export const RoutesMain = () => {
  const [user, setUser] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashbord" element={<DashbordPage user={user} />} />
    </Routes>
  );
};
