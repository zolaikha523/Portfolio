import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap-icons/font/bootstrap-icons.css';
import global_en from "./Components/transalation/en/global.json";
import global_fa from "./Components/transalation/fa/global.json";
import global_fr from "./Components/transalation/fr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
i18next.init({
 intorootlocation:{escapeValue:false},
 lng:"en",
 resources: {
  en: {
    global: global_en,
  },
  fa: {
    global: global_fa,
  },
  fr: {
    global: global_fr,
  }
 }

})
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

