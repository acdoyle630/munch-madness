import React from "react";
import style from "./PageLayout.jss";

const PageLayout = ({ children }) => {
  return <div style={style.pageLayout}>{children} </div>;
};

export default PageLayout;
