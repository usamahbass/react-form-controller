import React, { Component } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  onClick = (e) => {
    e.preventDefault();

    let notif = document.getElementById("notification")

    if (this.state.email.length <= 0) {      
      notif.innerHTML = "Please enter your email !";

    } else if (this.state.password.length <= 0) {
      notif.innerHTML = "Please enter your password !";

    } else {
      let success = document.getElementById("notification-success")
      let load = document.getElementById("loader")
      let slow = document.getElementById("slow")

      load.style.display = "flex";
      success.style.display = "block";
      console.log(
        `email: ${this.state.email} password: ${this.state.password}`
      );
    }
  };
  render() {
    return (
      <div>
        <div className="login-input-container">
          <div className="login-input-content">
            <div className="login-input-header">
              <p>LOGIN</p>
            </div>
            <form className="login-form" onSubmit={this.onClick}>
              {/* Email Form */}
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <div className="input-content">
                <Input
                  name="email"
                  type="email"
                  onChange={this.onChange}
                  placeholder="youremail@example.com"
                  id="email"
                />
              </div>

              {/* Password Form */}
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <div className="input-content input-content-two">
                <Input
                  name="password"
                  type="password"
                  onChange={this.onChange}
                  placeholder="Enter your password"
                  id="password"
                />
              </div>

              {/* Alert Notification */}

              <div className="load" id="loader">
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
                <div className="items"></div>
              </div>

              <div id="notification-success">
                <h1>Login Success</h1>
                <a className="click close" href="#" >Go to page</a>
              </div>

              <p id="notification"></p>

              {/* Button Click */}
              <Button type="submit" onClick={this.onClick} />
              <br />
              <br />

              {/* Register */}

              <code>
                Belum punya akun ?, <a href="#">silahkan buat akun</a>
              </code>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
