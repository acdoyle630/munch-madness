import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import Redirector from "./scenes/redirector/redirector";
import HomePage from "./scenes/home-page/home-page";
import ChooseSettings from "./scenes/choose-settings/choose-settings";
import ChooseCategories from "./scenes/choose-categories/choose-categories";
import ErrorModal from "./components/modals/ErrorModal";
import RoundModal from "./components/modals/RoundModal";
import TopNav from "./components/top-nav/TopNav";
import Bracket from "./scenes/bracket/bracket";
import "./index.css";

const store = createStore(
  reducers,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <TopNav />
    <ErrorModal />
    <RoundModal />
    <Router>
      <div>
        <Route exact path="/" component={Redirector} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/choose-settings" component={ChooseSettings} />
        <Route exact path="/choose-categories" component={ChooseCategories} />
        <Route exact path="/bracket" component={Bracket} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
