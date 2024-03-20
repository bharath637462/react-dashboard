// AuthContext.js
import React, { createContext, useState } from "react";
import { FaLessThan } from "react-icons/fa";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showAltIcon, setShowAltIcon] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const value = {
    showAltIcon,
    setShowAltIcon,
    isExpanded,
    setIsExpanded,
    isShowMenu,
    setIsShowMenu

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
