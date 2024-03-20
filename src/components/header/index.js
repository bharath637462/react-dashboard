import React, { useContext, useCallback } from "react";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { AuthContext } from "../../context/Authcontext";

export default function Appbar() {
  const { showAltIcon, setShowAltIcon } = useContext(AuthContext);
  const handleButtonClick = useCallback(() => {
    setShowAltIcon(prevState => !prevState);
  }, [setShowAltIcon]);

  return (
    <div
      className="outer-appbar"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="jss69">
          <div className="jss88">
            <button className="Muibutton-threedot" onClick={handleButtonClick}>
              <span className="">
                {showAltIcon ? <TfiMenuAlt /> : <BsThreeDotsVertical />}
              </span>
            </button>
          </div>
        </div>
        <div className="MuiButtonBase">
          <span className="MuiButton-label">Dashboard</span>
        </div>
      </div>
      <div className="jss677">
        <div className="inputf">
          <input type="text" className="inputd" value="Search" />
        </div>
        <div className="searchficon">
          <IoIosSearch className="ioio" />
        </div>
        <div className="ioiofo">
          <MdDashboard />
          <IoIosNotifications className="ioionotif" />
          <FaUser />
        </div>
      </div>
    </div>
  );
}
