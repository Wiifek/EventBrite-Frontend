// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

//Interceptors
import requestInterceptor from './interceptors/requestInterceptor';
import responseInterceptor from './interceptors/responseInterceptor';

//toastr
import { ToastContainer } from "react-toastr";
import "toastr/build/toastr.css";
import "animate.css/animate.css";

let container;


ReactDOM.render(
  <HashRouter>
    <ToastContainer
      className="toast-top-right"
      ref={ref => {
        container = ref;
      }}
    />
    <ScrollToTop />
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);
export default container;