import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import Checkout from "pages/Checkout";
import NotFound from "pages/404";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/example" component={Example} />
        <Route path="/browse-by" component={NotFound} />
        <Route path="/stories" component={NotFound} />
        <Route path="/agents" component={NotFound} />
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
