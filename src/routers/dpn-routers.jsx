import { Route, Routes } from "react-router-dom";
import Admin_Dashboard from "../components/Dashboard/Admin";
import AddDoctor from "../components/Doctor/AddDoctor";
import DoctorList from "../components/Doctor/DoctorList";
import DoctorProfile from "../components/Doctor/DoctorProfile";
import EditDoctor from "../components/Doctor/EditDoctor";
import Login from "../components/pages/login";
import ForgotPassword from "../components/pages/login/ForgotPassword";
import Setting from "../components/settings";
import SettingsChangePassword from "../components/settings/SettingsChangePassword";
import SettingsSignature from "../components/settings/SettingsSignature";
import {
  END_POINT_ADD_DOCTOR,
  END_POINT_ADMIN_DAHSBOARD,
  END_POINT_DOCTOR_LIST,
  END_POINT_EDIT_DOCTOR,
  END_POINT_FORGOT_PASSWORD,
  END_POINT_HOME,
  END_POINT_LOGIN,
  END_POINT_PROFILE_DOCTOR,
  END_POINT_SETTINGS,
  END_POINT_SETTINGS_CHANGE_PASSWORD,
  END_POINT_SETTINGS_SIGNATURE,
} from "./end-points";

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
      {/* Doctor  */}
      <Route path={END_POINT_DOCTOR_LIST} element={<DoctorList />} />
      <Route path={END_POINT_ADD_DOCTOR} element={<AddDoctor />} />
      <Route path={END_POINT_EDIT_DOCTOR} element={<EditDoctor />} />
      <Route path={END_POINT_PROFILE_DOCTOR} element={<DoctorProfile />} />
    </Routes>
  );
};

export default DpnRouters;
