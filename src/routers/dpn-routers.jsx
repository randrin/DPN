import { Route, Routes } from "react-router-dom";
import {
  END_POINT_ADMIN_DAHSBOARD,
  END_POINT_FORGOT_PASSWORD,
  END_POINT_HOME,
  END_POINT_LOGIN,
} from "./end-points";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/login/ForgotPassword";
import Admin_Dashboard from "../components/Dashboard/Admin";

const DpnRouters = () => {
  return (
    <Routes>
      <Route path={END_POINT_HOME} element={<Login />} />
      <Route path={END_POINT_LOGIN} element={<Login />} />
      <Route path={END_POINT_FORGOT_PASSWORD} element={<ForgotPassword />} />
      {/* Dashboard */}
      <Route path={END_POINT_ADMIN_DAHSBOARD} element={<Admin_Dashboard />} />
    </Routes>
  );
};

export default DpnRouters;
