import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import { inject } from '@vercel/analytics';
 
inject();

Kommunicate.init(process.env.REACT_APP_CHAT_TOKEN, {
  automaticChatOpenOnNavigation: true,
  popupWidget: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
