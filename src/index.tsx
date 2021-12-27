import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
// react-router-dom v6 docs recommended way
import { BrowserRouter } from "react-router-dom";

import App from "./App";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
         </BrowserRouter>
    </React.StrictMode>, 
    document.getElementById("root")
);




