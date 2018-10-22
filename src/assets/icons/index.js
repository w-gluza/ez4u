import React from "react";
import "../../css/style.css";

import Logo from "./Logo";
import Facebook from "./Facebook";
import YouTube from "./YouTube";
import LinkedIn from "./LinkedIn";

import SMS from "./Features/SMS";
import Pricing from "./Features/Pricing";
import Inbox from "./Features/Inbox";
import API from "./Features/API";
import IVR from "./Features/IVR";
import Security from "./Features/Security";
import Geolocation from "./Features/Geolocation";
import Whitelabel from "./Features/Whitelabel";
import URL from "./Features/URL";




const Icon = props => {
  switch (props.name) {
    case "logo":
      return <Logo {...props} />;
    case "facebook":
      return <Facebook {...props} />;
    case "youtube":
      return <YouTube {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "sms":
      return <SMS {...props} />;
    case "pricing":
      return <Pricing {...props} />;
    case "inbox":
      return <Inbox {...props} />;
    case "api":
      return <API {...props} />;
    case "ivr":
      return <IVR {...props} />;
    case "security":
      return <Security {...props} />;
    case "geolocation":
      return <Geolocation {...props} />;
    case "whitelabel":
      return <Whitelabel {...props} />;
    case "url":
      return <URL {...props} />;
    default:
      return;
  }
};

export default Icon;
