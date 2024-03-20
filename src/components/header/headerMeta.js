import React, { useContext, useCallback, useState } from "react";
import "./index.css";
import Appbar from ".";
import MobileAppbar from "./headerMobile";
import useViewport from "../viewPort";


export default function HeaderMeta() {
    const { width } = useViewport();
    const breakpoint = 970;



  return (
     width < breakpoint ? <MobileAppbar /> : <Appbar />

  )
}