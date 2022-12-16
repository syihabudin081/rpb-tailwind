import React, { useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import "./register.css";

const BASE_URL = "https://jellyfish-app-6n27v.ondigitalocean.app/api";

function Register() {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = () => {
    setIsSignUp(!isSignUp);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsSignUp(false);
      });
  };

  const login = async () => {
    fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        redirect("/");
      });
  };

  const handleSubmit = () => {
    if (isSignUp) {
      register();
    } else {
      login();
    }
  };

  return (
    <div className="bodyregister h-screen  flex items-center justify-center w-full">
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="register.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <title>RPB STORE.REGISTER</title>
      {/* <header>
    <a href="#" class="brand">RPB <br> STORE</a>
    <div class="menu-btn"></div>
    <div class="navigation">
<div class="navigation-items">
  <a href="home.html">Home</a>
  <a href="#">Product</a>
  <a href="#">Order</a>
  <a href="#">About</a>
  <a href="#">Account</a>
</div>
    </div>
  </header> */}
      <div className={`cont ${isSignUp ? "s-signup" : ""}`}>
        <div className="form sign-in">
          <h2>Sign In</h2>
          <label>
            <span>Email Address</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
          </label>
          <button className="submit" type="button" onClick={handleSubmit}>
            Sign In
          </button>
          <p className="forgot-pass">Forgot Password ?</p>
          {/* <div class="social-media">
  <ul>
    <li><img src="images/facebook.png"></li>
    <li><img src="images/twitter.png"></li>
    <li><img src="images/linkedin.png"></li>
    <li><img src="images/instagram.png"></li>
  </ul>
</div> */}
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img-text m-in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleClick}>
              <span className="m-up">Sign Up</span>

              <span className="m-in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign Up</h2>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={form.password}
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={form.confirmPassword}
              />
            </label>
            <button type="button" className="submit" onClick={handleSubmit}>
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
