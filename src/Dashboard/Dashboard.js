import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "../axios";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  let history = useHistory();

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("mainw");
      setPeople(req.data);
    }
    fetchData();
  }, []);
  {
    people.map((obj, index) => {
      console.log(obj.reviews);
      {
        obj.reviews.map((item) => {
          console.log(item.events);
        });
      }
    });
  }
  console.log(people);

  return (
    <div className="dashboardContainer">
      <button
        onClick={() => {
          localStorage.removeItem("userInfo");
          history.push("/");
        }}
      >
        logout
      </button>
      {people.map((obj, index) => {
        return (
          <div className="each-slides-dashboard" key={index}>
            <div>
              <div style={{ backgroundImage: `url(${obj.imgUrl})` }}></div>

              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        );
      })}
      <div className="centericon">
        <AddCircleTwoToneIcon className="dashboardaddicon" />
      </div>
    </div>
  );
};
