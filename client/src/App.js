import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feeds from "../src/pages/Feeds"
import ContactUs from "./pages/ContactUs";

// Calling all components and using router to render pages
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/feeds" component={Feeds} />
        <Route exact path="/contact" component={ContactUs} />
      </div>
    </Router>
  )

}

export default App;