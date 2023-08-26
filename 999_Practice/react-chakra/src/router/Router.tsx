import React, { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";

import { Header } from "../components/layout/Header";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="home">
        <Route path="" element={<Header />} />
        <Route path="setting" element={<Setting />} />
        <Route path="user_management" element={<UserManagement />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
