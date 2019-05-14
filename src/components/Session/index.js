import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Survey from "survey-react";

// needs to be fixed?
class Session extends Component {
surveyJSON = {"pages":[{"name":"page5","elements":[{"type":"matrixdropdown","name":"question2","title":"CORE Activity","columns":[{"name":"I Have Never Performed this Drill"},{"name":"Am Familiar - Need Help with Technique"},{"name":"Can Perform Drill without Instruction"},{"name":"Drill Not Challenging - let's increase Intensity"}],"choices":["1"],"cellType":"checkbox","rows":["Front Plank\t\t","Side plank (Right, Left, Rest)\t","Heel Touches\t\t","Crunches\t\t"]}]}],
completedHtml: "<p><h4>Session has been logged</h4></p>"}


  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + JSON.stringify(result.data));
  }
  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.surveyJSON);
      return (
        <div>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>

      )
  }
}

export default Session;
