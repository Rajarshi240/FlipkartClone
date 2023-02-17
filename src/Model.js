import React, { useState } from "react";
import Model from "@material-ui/core/Model";
import "./Model.css";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

export default function TransitionsModel(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const close = () => {
    props.handleClose();
  };

  return (
    <div>
      <Modal className="mmmmm" open={props.open} onClose={close}>
        <>
          <div className="closeButton" onClick={close}>
            <CloseIcon />
          </div>
          <div className="model">
            <div className="model__left">
              <div className="modelLeft__top">
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
            </div>
            <div className="model__right">
              <div className="form">
                <div className="wrapper">
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Email/Mobile number</label>
                  </div>
                  <div className="input__data">
                    <input
                      type="text"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="underline"></div>
                    <label>Enter Password</label>
                  </div>
                </div>

                <div className="form__button">
                  <button
                    style={{ cursor: "pointer" }}
                    // onClick={LoginToA}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <div style={{ marginLeft: "140px", padding: "15px" }}>Or</div>
                  <div className="form__button1">
                    <button>Request OTP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}
