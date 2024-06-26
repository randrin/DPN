import React from "react";
import { Link } from "react-router-dom";
import { login02, loginlogo } from "../../imagepath";
import { Typography } from "antd";
import { END_POINT_LOGIN } from "../../../routers/end-points";

const ForgotPassword = () => {
  // Destructing
  const { Title, Paragraph } = Typography;

  // Render
  return (
    <div>
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap">
              <div className="login-sec">
                <div className="log-img" style={{ position: "relative" }}>
                  <img className="img-fluid" src={login02} alt="Logo" />
                  <div
                    className="col dpn-home-top"
                    style={{
                      position: "absolute",
                      top: "5%",
                      left: "15%",
                    }}
                  >
                    <Title className="dpn-white dpn-home-top-title text-center">
                      DPN
                    </Title>
                    <Paragraph className="dpn-white dpn-home-top-description text-center">
                      Dossier Patient Numérique
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login logo */}
            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link to={END_POINT_LOGIN}>
                          <img src={loginlogo} alt="#" />
                        </Link>
                      </div>
                      <h2>Reset Password</h2>
                      {/* Form */}
                      <form>
                        <div className="form-group">
                          <label>
                            Email <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="form-group login-btn">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            <Link to="/login" />
                            Reset Password
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          Need an account?
                          <Link to={END_POINT_LOGIN}> Login</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
