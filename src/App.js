
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adresse from "./Component/Profile/Adresse";
import './App.css';

const App = () => (
  <>
    <div className="Profile">
      <div className="ProfilePhoto">
        <ProfilePhoto />
    </div>

      <div className="FullName-Box">
        <div className="FullName">
          <FullName />
        </div>
      </div>

      <div className="Adresse">
        <Adresse />
      </div>
    </div>

  </>
  );


export default App;


