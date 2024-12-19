import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js"; // Import the store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* The Provider component is used to wrap the App component
    and provide it with the store which contains the state and reducers */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
