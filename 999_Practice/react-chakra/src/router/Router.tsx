import React, { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";

import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { HeaderLayout } from "../components/template/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="home" element={<HeaderLayout />}>
        <Route path="setting" element={<Setting />} />
        <Route path="user_management" element={<UserManagement />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
});
