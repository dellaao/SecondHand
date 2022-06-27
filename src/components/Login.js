//import React from "react";
import "../style.css";
import banner from "../../src/images/SecondHand.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-6 sm-12">
            <div className="banner-img">
              <img src={banner} width="100%" alt="" />
            </div>
          </div>
          <div className="col-md-6 sm-12">
            <div className="login-form">
              <span className="title-text">Masuk</span>
              <div className="email-part">
                <form>
                  <label for="form_email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control py-3" placeholder="Contoh: johndee@gmail.com" aria-label="Email" />
                </form>
              </div>
              <div className="password-part">
                <form>
                  <label for="form_password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control py-3" placeholder="Masukkan Password" aria-label="Password" />
                </form>
              </div>
              <button className="login-button">Masuk</button>
              <h6>
                Belum punya akun? <span style={{ color: "#7126B5" }}>Daftar di sini</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
