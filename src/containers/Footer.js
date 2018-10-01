import React from "react";
import "../css/style.css";

import FooterMain from "../components/Footer/FooterMain";
// import FooterMain from "../components/Footer/FooterFooter";



const footer = () => {
  return (
    <footer className="footer">
      <FooterMain></FooterMain>
      {/* <FooterFooter></FooterFooter> */}
    </footer>
  );
};

export default footer;
