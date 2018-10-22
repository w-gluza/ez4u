import React from "react";

const SVG = ({
    style = {},
    fill = "",
    width = "100%",
    className = "",
    viewBox = "0 0 232 232"
}) => (
        <svg
            width={width}
            style={style}
            height={width}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
           <path d="M136 140v64h96v-64h-96zm88 56h-80v-48h80v48zM168 208h32v8h-32zM0 204h96v-64H0v64zm8-56h80v48H8v-48zM32 208h32v8H32zM164 16H68v64h96V16zm-8 56H76V24h80v48zM100 84h32v8h-32zM52 124h128v12h8v-20h-68V96h-8v20H44v20h8z"/>
  </svg>
    );

export default SVG;
