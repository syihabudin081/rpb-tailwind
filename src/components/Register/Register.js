import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {

  useEffect(() => {
    document.querySelector('.img-btn').addEventListener('click', () => {
      document.querySelector('.cont').classList.toggle('s-signup');
    });
  }, []);

  return (
    <div className='bodyregister h-screen  flex items-center justify-center w-full'>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="register.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
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
      <div className="cont">
        <div className="form sign-in">
          <h2>Sign In</h2>
          <label>
            <span>Email Address</span>
            <input type="email" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <Link to="/"><button className="submit" type="button">Sign In</button></Link>
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
              <p>If you already has an account, just sign in. We've missed you!</p>
            </div>
            <div className="img-btn">
              <span className="m-up">Sign Up</span>

              <span className="m-in">Sign In</span>

            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign Up</h2>
            <label>
              <span>Name</span>
              <input type="text" />
            </label>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <label>
              <span>Confirm Password</span>
              <input type="password" />
            </label>
            <button type="button" className="submit">Sign Up Now</button>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Register;