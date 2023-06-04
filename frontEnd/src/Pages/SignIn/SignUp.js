import "./Sign.css";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Appcontext } from "../../App";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [respo, setrespo] = useState("");
  const { setlogin } = useContext(Appcontext);
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const username = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;
    console.log(username, email, password);

    fetch("https://e-commerce-website-uznv.onrender.com/register", {
      method: "post",
      crossDomin: true,
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: username,
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
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-part">
            <input
              type="text"
              placeholder="Username"
              className="username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
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
          <button className="btn-signin">Sign Up</button>
        </form>
        <p>
          Already an User :
          <Link to="/signIn" className="sign-url">
            Log In
          </Link>
        </p>
        <p className="red">{respo}</p>
      </section>
    </div>
  );
};

export default SignUp;
