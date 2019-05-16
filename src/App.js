import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
import { Router, Route, Link, NavLink, BrowserRouter, Switch} from 'react-router-dom';
import Register from './components/Register';
import Session from './components/Session';
import Athletes from './components/Athletes';
import SingleAthlete from './components/Athletes/components/SingleAthlete'
import Firebase from 'firebase';
import config from './config';
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {

  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <h2 id="influxHeader">Influx Sport Pre-Training Questionaire Example</h2>
            <NavLink to="/">Register</NavLink>
            <NavLink to="/session">Session</NavLink>
            <NavLink to="/athletes">Athletes</NavLink>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          {/* <h1>SurveyJS library in action:</h1> */}
          <Switch>
              <Route exact path="/athletes" component={Athletes} />
              <Route path="/athletes/:athleteId" component={SingleAthlete}></Route>
              <Route path="/session" component={Session} />

              <Route path="/" component={Register} />
          </Switch>


        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
