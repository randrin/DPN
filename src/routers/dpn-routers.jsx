import { Route, Routes } from "react-router-dom";
import {
  END_POINT_ADMIN_DAHSBOARD,
  END_POINT_FORGOT_PASSWORD,
  END_POINT_HOME,
  END_POINT_LOGIN,
  END_POINT_SETTINGS,
  END_POINT_SETTINGS_CHANGE_PASSWORD,
  END_POINT_SETTINGS_SIGNATURE,
} from "./end-points";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/login/ForgotPassword";
import Admin_Dashboard from "../components/Dashboard/Admin";
import Setting from "../components/settings";
import SettingsChangePassword from "../components/settings/SettingsChangePassword";
import SettingsSignature from "../components/settings/SettingsSignature";

const DpnRouters = () => {
  return (
    <Routes>
      <Route path={END_POINT_HOME} element={<Login />} />
      <Route path={END_POINT_LOGIN} element={<Login />} />
      <Route path={END_POINT_FORGOT_PASSWORD} element={<ForgotPassword />} />
      {/* Dashboard */}
      <Route path={END_POINT_ADMIN_DAHSBOARD} element={<Admin_Dashboard />} />
      {/* Settings */}
      <Route path={END_POINT_SETTINGS} element={<Setting />} />
      <Route
        path={END_POINT_SETTINGS_CHANGE_PASSWORD}
        element={<SettingsChangePassword />}
      />
      <Route
        path={END_POINT_SETTINGS_SIGNATURE}
        element={<SettingsSignature />}
      />
    </Routes>
  );
};

export default DpnRouters;
