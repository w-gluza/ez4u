import React from "react";

import YouTube from "./YouTube";
import LinkedIn from "./LinkedIn";

const Icon = props => {
  switch (props.name) {
    case "youtube":
      return <YouTube {...props} />;
    case "linkedin":
    return <LinkedIn {...props} />;
    default:
      return;
  }
};

export default Icon;
