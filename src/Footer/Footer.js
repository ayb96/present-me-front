import React from "react";
import "./Footer.css";
import fimage from "./FooterImage/logoImage.png";
import { useHistory } from "react-router-dom";
export const Footer = () => {
  let history = useHistory();
  return (
    <div className="footer-container">
      <div className="flex-footer1">
        <div className="footer-titles">About Us</div>
        <div className = "about-footer">
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown 
        </div>
      </div>
      <div className="flex-footer2">
        <div className="footer-titles">Leave a comment</div>
        <textarea name="comment" form="usrform" className="textarea-footer">
          Enter Comment here...
        </textarea>
        <button>subimt</button>
      </div>
      <div className="flex-footer3">
        <img
          src={fimage}
          alt=""
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
    </div>
  );
};
