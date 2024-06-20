import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { signature } from "../imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {
  END_POINT_SETTINGS,
  END_POINT_SETTINGS_CHANGE_PASSWORD,
  END_POINT_SETTINGS_SIGNATURE,
} from "../../routers/end-points";

const SettingsSignature = () => {
  const [show, setShow] = useState(false);

  // Render
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        {/* Page Content */}
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index.html">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Settings</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="settings-menu-links">
            <ul className="nav nav-tabs menu-tabs">
              <li className="nav-item">
                <Link className="nav-link " to={END_POINT_SETTINGS}>
                  General Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={END_POINT_SETTINGS_CHANGE_PASSWORD}
                >
                  Change Password
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to={END_POINT_SETTINGS_SIGNATURE}>
                  Signature
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Signature Details</h5>
                </div>
                <div className="card-body pt-0">
                  <form>
                    <div className="settings-form">
                      <div className="form-group">
                        <p className="settings-label">
                          Signature <span className="star-red">*</span>
                        </p>
                        <div className="settings-btn">
                          <input
                            type="file"
                            accept="image/*"
                            name="image"
                            id="file"
                            // onchange="loadFile(event)"
                            className="hide-input"
                          />
                          <label htmlFor="file" className="upload">
                            <i className="feather-upload">
                              <FeatherIcon icon="upload" />
                            </i>
                          </label>
                        </div>
                        <h6 className="settings-size">
                          Recommended image size is <span>150px x 150px</span>
                        </h6>
                        <div
                          className="upload-images"
                          style={{ display: show ? "none" : "" }}
                        >
                          <img src={signature} alt="Image" />
                          <Link to="#" className="btn-icon logo-hide-btn">
                            <i
                              className="feather-x-circle crossmark"
                              onClick={() => setShow((s) => !s)}
                            >
                              <FeatherIcon icon="x-circle" />
                            </i>
                          </Link>
                        </div>
                      </div>

                      <div className="form-group mb-0">
                        <div className="settings-btns">
                          <button
                            type="submit"
                            className="border-0 btn btn-primary btn-gradient-primary btn-rounded me-2"
                          >
                            Update
                          </button>
                          <button
                            type="submit"
                            className="btn btn-secondary btn-rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSignature;
