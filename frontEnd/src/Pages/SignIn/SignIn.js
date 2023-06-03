import "./Sign.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Appcontext } from "../../App";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [respo, setrespo] = useState("");
  const navigator = useNavigate();
  const { setlogin } = useContext(Appcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);

    fetch("/signin", {
      method: "post",
      crossDomin: true,
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setrespo("Something Went Wrong");
          console.log("error");
        } else {
          setlogin(true);
          setrespo("will be moved");
          navigator("/");
        }
      });
  };
  return (
    <div className="main-signin">
      <section className="container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-part">
            <input
              type="text"
              placeholder="email or Username"
              className="username"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <button className="btn-signin">SignIn</button>
        </form>
        <p>
          Create new account :
          <Link to="/signUp" className="sign-url">
            Sign Up
          </Link>
        </p>
        <p className="red">{respo}</p>
      </section>
    </div>
  );
};

export default SignIn;
