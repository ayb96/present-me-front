import React, { useState, useContext, useEffect } from "react";
import { Modal } from "./Modal";
import "./Popup.css";
// import Education from "./imagePop/index.jpeg";
// import Sport from "./imagePop/index1.jpeg";
// import Music from "./imagePop/index2.jpg";
import axios from "../../axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { MyContext } from "../../Context";
AOS.init();

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const POPBOX = {
  display: "flex",
  flexDirection: "column",
  backgroundcolor: "red",
  border: "5px solid red",
};

const BUTTON_COMPONENT = {
  margin: "5px",
};

const GRID_BOX = {
  display: "grid",
  gridTemplateColumns: "20rem 20rem 20rem",
  gridAutoRows: "20rem",
  gridGap: "30px",
  justifyContent: "center",
  padding: "30px",
};

//add


export const Popup = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState([]);

  const [yow, setYow] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("mainw");
      setYow(req.data);
    }
    fetchData();
  }, []);

  const { singlee, setSinglee } = useContext(MyContext);
  const gotosingle = (e) => {
    e.preventDefault();
    {
      info.map((show) => {
        if (show._id == e.target.id) {
          console.log("show id =" + show._id);
          console.log("target id =" + e.target.id);
          console.log(show.single);
          setSinglee(show.events);
        }
      });
    }
    history.push("/singles");
  };

  const ifclick = (e) => {
    e.preventDefault();
    {
      yow.map((values) => {
        if (values._id == e.target.id) {
          setInfo(values.reviews);
          console.log("first " + values._id);
          console.log("first " + e.target.id);
          console.log(info);
        }
      });
    }
  };

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <div style={GRID_BOX}>
          {yow.map((obj, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                backgroundImage: `url(${obj.imgUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "-1px 4px 20px -6px rgba(10,10,10,0.75)",
              }}
              onClick={() => setIsOpen(true)}
              // data-aos="fade-up-right"
            >
              <button
                id={obj._id}
                onClick={ifclick}
                className="hiddenbutton"
              ></button>
              <div className="singleboxttitle">{obj.title}</div>
            </div>
          ))}
        </div>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <form>
            <div>
              {info.map((obj, index) => (
                <div style={POPBOX}>
                  <button
                    style={BUTTON_COMPONENT}
                    id={obj._id}
                    onClick={gotosingle}
                  >
                    
                    {obj.title}
                  </button>
                </div>
              ))}
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};
