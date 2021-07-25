import React, { useState, useEffect } from "react";
import "./Header.css";
import HeaderIcon from "./HeaderImage/logoImage.png";
import { useHistory } from "react-router-dom";

export const Header = () => {
  let history = useHistory();

  return (
    <div className="header-container">
      <div className="logo">
        <img
          src={HeaderIcon}
          alt="logo"
          onClick={() => {
            history.push("/");
          }}
        />
        <div className="logreg">
          <button
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              history.push("/Registration");
            }}
          >
            Registration
          </button>
        </div>
      </div>
      <div className="search-box">
        <input type="text" className="search-text" placeholder="search" />
        <button className="search-btn">
          <i class="fas fa-search"></i>
        </button>
        <br />
      </div>

      <div className="nav-container">
        <div
          className="radius btn btn1 sub-box"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </div>
        <div
          className="btn btn1 sub-box"
          onClick={() => {
            history.push("/discover");
          }}
        >
          Discover
        </div>
        <div className="btn btn1 sub-box">About us</div>
        <div className="radius btn btn1">Contact us</div>
      </div>
    </div>
  );
};
