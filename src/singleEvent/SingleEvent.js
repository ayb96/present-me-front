import React, {useContext, useEffect} from "react";
import "./SingleEvent.css";
import { MyContext } from ".././Context";

const SingleEvent = (props) => {
  const { singlee, setSinglee } = useContext(MyContext);

  
  return (
    <div className="container-2">
      <h1>{singlee.title}</h1>
      <img src={singlee.imgUrl} className="event__img" alt="" onClick={()=>{
        console.log(singlee)
      }}/>
      <div className="box-1">
        <div className="event-info">
          <h3>Title: {singlee.title}</h3>
          <h3>Description: </h3>
          <h3>Event Date: </h3>
        </div>
        <div className="host-info">
          <img   alt="" />
          <h3></h3>
        </div>
      </div>
      <button className="btna">Attend</button>
    </div>
  );
};

export default SingleEvent;
