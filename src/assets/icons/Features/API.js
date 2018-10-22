import React from "react";

const SVG = ({
    style = {},
    fill = "",
    width = "100%",
    className = "",
    viewBox = "0 0 470 470"
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
             <path d="M167.313 209.123a7.498 7.498 0 0 0-10.281-2.605l-87.369 52.039a7.499 7.499 0 0 0-.001 12.886l87.369 52.039a7.495 7.495 0 0 0 10.281-2.605 7.5 7.5 0 0 0-2.605-10.281L88.156 265l76.551-45.596a7.499 7.499 0 0 0 2.606-10.281zM302.688 320.877a7.494 7.494 0 0 0 10.281 2.605l87.369-52.039a7.5 7.5 0 0 0 0-12.886l-87.369-52.039a7.498 7.498 0 0 0-10.281 2.605 7.5 7.5 0 0 0 2.605 10.281L381.844 265l-76.551 45.596a7.497 7.497 0 0 0-2.605 10.281zM263.72 208.78l-69.893 104.078a7.5 7.5 0 1 0 12.453 8.362l69.893-104.078a7.5 7.5 0 1 0-12.453-8.362z"/>
  <path d="M462.5 22.5H7.5A7.5 7.5 0 0 0 0 30v410a7.5 7.5 0 0 0 7.5 7.5h455a7.5 7.5 0 0 0 7.5-7.5v-80c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v72.5H15v-335h440V330c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5V30a7.5 7.5 0 0 0-7.5-7.5zM15 37.5h277.5v45H15v-45zm292.5 45v-45H455v45H307.5z"/>
  <path d="M381.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM340.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM422.5 52c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"/>
  </svg>
    );

export default SVG;
