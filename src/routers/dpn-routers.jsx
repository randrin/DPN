import { Route, Routes } from "react-router-dom";
import {
  END_POINT_FORGOT_PASSWORD,
  END_POINT_HOME,
  END_POINT_LOGIN,
} from "./end-points";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/login/ForgotPassword";

const DpnRouters = () => {
  return (
    <Routes>
      <Route path={END_POINT_HOME} element={<Login />} />
      <Route path={END_POINT_LOGIN} element={<Login />} />
      <Route path={END_POINT_FORGOT_PASSWORD} element={<ForgotPassword />} />
    </Routes>
  );
};

export default DpnRouters;
