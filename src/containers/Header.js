// import React, { Component } from "react";
// import "../css/style.css";

// class Header extends Component {
//   render() {
//     return (
//       <header className="header">
//         <div className="header__img " />

//         <div className="header__text">
//           <h1 className="heading__primary">
//             <span className="heading__primary--main">
//               <span className="red">SMS</span> MARKETING
//             </span>
//             <span className="heading__primary--main">
//               <span className="red">WEB</span> DESIGN
//             </span>
//           </h1>
//           <button className="button__header">Let's talk!</button>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;

import React from "react";
import "../css/style.css";

import HeaderMain from "../components/Header/HeaderMain";

const Header = () => {
  return <HeaderMain />;
};

export default Header;
