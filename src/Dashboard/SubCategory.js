import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import axios from "../axios";
import { MyContext } from "../Context";

export const SingleCategory = ({ history }) => {
  const { singlee, setSinglee } = useContext(MyContext);
  const [last, setLast] = useState();
  console.log(singlee);

  const gotoosingle = (e) => {
    e.preventDefault();
    {
      singlee.map((show) => {
        if (show._id == e.target.id) {
          console.log("show id =" + show._id);
          console.log("target id =" + e.target.id);
          console.log(show);

          setSinglee(show);
          console.log(singlee);
        }
      });
    }
    history.push("/singleevent");
  };

  return (
    <div className="dashboardContainer">
      {singlee.map((obj, index) => {
        {
          return (
            <div className="each-slides-dashboard" key={index}>
              <div>
                <div
                  id={obj._id}
                  style={{
                    backgroundImage: `url(${obj.imgUrl})`,
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <button
                    onClick={gotoosingle}
                    style={{
                      position: "absolute",
                      top: "0",
                      bottom: "0",
                      width: "100%",
                      opacity: "0",
                    }}
                    id={obj._id}
                  ></button>
                  <div className="singleboxttitle">{obj.title}</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
