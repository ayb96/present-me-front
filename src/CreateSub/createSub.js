import React, { useState, useContext } from "react";
import { MyContext } from "../Context";
import "./CreateSub.css";
import axios from "axios";
export function CreateSubbEvent({history}) {
  const {subid, setSubid } = useContext(MyContext);
  

  const [subevent, setSubevent] = useState({
    imgUrl: "",
    title: "",
    
    
  });
  const { imgUrl,title } = subevent;
  const onChange = (e) => {
    setSubevent({ ...subevent, [e.target.name]: e.target.value });
  };

  const onSubmet = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios
      .post(`https://presentmeapp.herokuapp.com/subcategories/${subid}`, subevent)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log(response);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
      history.push("/dashboard");
  };
  console.log(subevent);
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Create Sub Event</h1>
      </div>
      <div className="main-form">
        <form onSubmit={onSubmet}>
          <div className="flex-form">
            <div>
              <label>Title</label>
            </div>
            <div>
              <input
                type="text"
                value={title}
                name="title"
                onChange={onChange}
              />
            </div>
          </div>
          
          <div className="flex-form">
            <div>
              <label>Image Url</label>
            </div>
            <div>
              <input name="imgUrl" value={imgUrl} type="imgUrl" onChange={onChange} />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <input className="btn-2" name="add Event" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
