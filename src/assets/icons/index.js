import React from "react";

import Facebook from "./Facebook";
import YouTube from "./YouTube";
import LinkedIn from "./LinkedIn";

const Icon = props => {
  switch (props.name) {
    case "facebook":
    return <Facebook {...props} />;
    case "youtube":
      return <YouTube {...props} />;
    case "linkedin":
    return <LinkedIn {...props} />;
    default:
      return;
  }
};

export default Icon;
