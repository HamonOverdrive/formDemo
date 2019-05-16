import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Survey from "survey-react";


// needs to be fixed?
class SingleAthlete extends Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }


  render() {

      return (
        <div>
          <h1>yo</h1>
        </div>

      )
  }
}

export default SingleAthlete;
