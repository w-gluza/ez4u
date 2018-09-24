import React from "react";

const SVG = ({
  style = {},
  fill = "",
  width = "",
  height = "",
  className = "",
  viewBox = "0 0 470.513 470.513"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M271.521 154.17v-40.541c0-6.086.28-10.8.849-14.13.567-3.335 1.857-6.615 3.859-9.853 1.999-3.236 5.236-5.47 9.706-6.708 4.476-1.24 10.424-1.858 17.85-1.858h40.539V0h-64.809c-37.5 0-64.433 8.897-80.803 26.691-16.368 17.798-24.551 44.014-24.551 78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086h-73.37z"
    />{" "}
    />
  </svg>
);

export default SVG;
