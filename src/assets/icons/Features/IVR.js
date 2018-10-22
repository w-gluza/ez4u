import React from "react";

const SVG = ({
    style = {},
    fill = "",
    width = "100%",
    className = "",
    viewBox = "0 0 58 58"
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
    <path d="M44 28c-.552 0-1 .447-1 1v6c0 7.72-6.28 14-14 14s-14-6.28-14-14v-6c0-.553-.448-1-1-1s-1 .447-1 1v6c0 8.485 6.644 15.429 15 15.949V56h-5c-.552 0-1 .447-1 1s.448 1 1 1h12c.552 0 1-.447 1-1s-.448-1-1-1h-5v-5.051c8.356-.52 15-7.465 15-15.949v-6c0-.553-.448-1-1-1z"/>
  <path d="M29 46c6.065 0 11-4.935 11-11V11c0-6.065-4.935-11-11-11S18 4.935 18 11v24c0 6.065 4.935 11 11 11zm-9-35c0-4.963 4.038-9 9-9s9 4.037 9 9v24c0 4.963-4.038 9-9 9s-9-4.037-9-9V11z"/>
        </svg>
    );

export default SVG;
