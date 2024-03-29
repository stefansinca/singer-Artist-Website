import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";

import "./App.css";
import LoginForm from "./components/LoginPageComponent/LoginForm";
import { BioPageComponent } from "./components/BioPageComponent/BioPageComponent";
import ContactPageComponent from './components/ContactPageComponent/ContactPageComponent.jsx';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx';
import BlogPageComponent from "./components/BlogPageComponent/BlogComponent";
import AudioPlayer from "./components/AudioPlayerComponent/AudioPlayer";

function App() {
  const adminUser = {
    email: process.env.REACT_APP_USER_EMAIL,
    password: process.env.REACT_APP_USER_PASSWORD,
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // return form login
  const LoginFormApp = () => (
    <div>
      {user.email !== "" ? (
        <div className="logout-div">
          <button className="logout-btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );

  //Routes
  const RoutesComponent = () =>
    useRoutes([
      {
        path: "login",
        element: <LoginFormApp />,
      },
      {
        path: "/",
        element: <HomePageComponent />,
      },
      {
        path: "/bio",
        element: <BioPageComponent />,
      },
      {
        path: '/blog',
        element: <AudioPlayer />
      },
      {
        path: "/contact",
        element: <ContactPageComponent />
      },
      {
        path: '/home',
        element: <HomePageComponent />
      }
    ]);

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Welcome!");
      window.localStorage.setItem('Login', 'true');
      setUser({
        email: details.email,
        password: details.password,
      });
    } else {
      console.log("Details not match!");
      setError("Details not match!");
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
    setError("");
  };

  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
}

export default App;
