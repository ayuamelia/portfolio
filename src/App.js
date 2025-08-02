// import React from "react";
// import "./App.scss";
// import Main from "./containers/Main";

// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// export default App;

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import OtherProjectDetail from "./containers/otherProject/OtherProjectDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/otherProjects/:slug" component={OtherProjectDetail} />
        <Route component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
