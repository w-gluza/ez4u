import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import App from "./App";
import clientsArray from "./assets/json/clients.json"
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import common_en from "./translations/en/common.json";
import common_pt from "./translations/pt/common.json";
import common_es from "./translations/es/common.json";


i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'pt',                              // default language
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        pt: {
            common: common_pt
        },

        es: {
            common: common_es
        },
    },
});



ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App clientsArray={clientsArray} />
    </I18nextProvider>,
    document.getElementById("root")
);
