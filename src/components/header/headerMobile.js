import React, { useContext, useCallback, useState } from "react";
import "./index.css";
import { AuthContext } from "../../context/Authcontext";
import { IoMenu } from "react-icons/io5";


export default function MobileAppbar() {
  const { isShowMenu, setIsShowMenu } = useContext(AuthContext);

  const handleButtonClick = useCallback(() => {
    setIsShowMenu(prevState => !prevState); // Toggle the state
  }, [isShowMenu, setIsShowMenu]);

  return (
    <div
      className="outer-appbar"
      style={{paddingRight: '10px'}}
    >
      { !isShowMenu &&
            <button  style={{float: "right", border: "none", backgroundColor: "#ddd", zIndex: 1}} onClick={handleButtonClick}>
              <span className="">
                    <IoMenu style={{fontSize: '25px'}}/> 
                </span>
            </button>
      
      }

    </div>
  );
}
