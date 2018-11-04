import React from "react";

const SVG = ({
  style = {},
  fill = "",
  width = "100%",
  className = "",
  viewBox = "0 0 512 512",
  onClick
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    onClick={onClick}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M214.672 192.496V96.4h-16v96.096h-39.136l47.136 67.664 47.12-67.664h-39.12zm-24.48 15.984h32.96l-16.48 23.664-16.48-23.664zM304.096 205.184l-47.12 67.648h39.12v96.112h16v-96.112h39.136l-47.136-67.648zm-16.48 51.664l16.48-23.648 16.48 23.648h-32.96z" />
    <path d="M361.776 0H150.224C129.136 0 112 17.504 112 39.008v434C112 494.512 129.136 512 150.224 512h211.568C382.864 512 400 494.512 400 473.008v-434C400 17.504 382.864 0 361.776 0zM384 473.008c0 12.688-9.968 22.992-22.224 22.992H150.224C137.968 496 128 485.696 128 473.008V424h256v49.008zM384 408H128V56h256v352zm0-368H128v-.992C128 26.32 137.968 16 150.224 16h211.568C374.032 16 384 26.32 384 39.008V40z" />
    <path d="M256 433.168c-14.704 0-26.672 11.968-26.672 26.672s11.968 26.656 26.672 26.656 26.672-11.952 26.672-26.656c0-14.704-11.968-26.672-26.672-26.672zm0 37.328c-5.888 0-10.672-4.784-10.672-10.656 0-5.904 4.784-10.672 10.672-10.672s10.672 4.784 10.672 10.672c0 5.872-4.784 10.656-10.672 10.656z" />
  </svg>
);

export default SVG;