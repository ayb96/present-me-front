import "./App.css";
import { UniqueFeatures } from "./components/UniqueFeatures/UniqueFeatures";
import { Slideshow } from "./components/TopEvent/TopEvent";
import { MainSlideshow } from "./Events/Events";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Testimonial } from "./Testimonial/Testimonial";
import { Popup } from "./AllCategoriesComponent/Popup/Popup";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import { Dashboard } from "./Dashboard/Dashboard";
import { Registration } from "./Registration/Registration";
import { AllEventsSubCategory } from "./allEventsSubCategory/allEventsSubCategory";
import { ProtectedRoute } from "./ProtectedRoute";
import React, { useState, useEffect } from "react";
import { SingleCategory } from "./Dashboard/SubCategory";
import SingleEvent from "./singleEvent/SingleEvent";
import { MyContext } from "./Context";
function App({ history }) {
  const [isAuth, setIsAuth] = useState(false);
  const [singlee, setSinglee] = useState([]);
  const [last, setLast] = useState()
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    console.log(userInfo);

    if (userInfo) {
      setIsAuth(true);
    }
  }, [history]);

  
  return (
    <div className="App">
      <MyContext.Provider value={{ singlee, setSinglee, last, setLast }}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <MainSlideshow />
            <UniqueFeatures />
            <Slideshow />
            <Testimonial />
            <SingleCategory />
          </Route>

          <Route path="/discover" exact component={Popup} />
          <Route path="/single" exact component={UniqueFeatures} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/Registration" exact component={Registration} />
          <Route path="/singles" exact component={SingleCategory} />
          <Route path="/allevent" exact component={AllEventsSubCategory} />
          <Route path="/singleevent" exact component={SingleEvent} />
          <ProtectedRoute
            path="/dashboard"
            component={Dashboard}
            isAuth={isAuth}
          />
        </Switch>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
