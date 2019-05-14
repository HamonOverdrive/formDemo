import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Survey from "survey-react";

// needs to be fixed?
class Register extends Component {
   surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"text","name":"name","title":"Please Enter Full Name","isRequired":true},{"type":"matrixdynamic","name":"question3","title":"Please list sport(s) you are competing and check box for season during which you are competing","columns":[{"name":"Sport","title":"Sport ","cellType":"text"},{"name":"Position","cellType":"text"},{"name":"Season","title":"Season","cellType":"checkbox"}],"choices":["Winter","Spring","Summer","Fall"],"cellType":"text","rowCount":1,"addRowText":"Add New Sport and Position"}]},{"name":"page2","elements":[{"type":"multipletext","name":"question1","title":"Questions","items":[{"name":"text1","placeHolder":"#","inputType":"number","title":"How many times a week do you perform strength / power exercises? (e.g. bench press, push-ups, pull-ups, squat, row, deadlift, etc.)"},{"name":"text2","placeHolder":"#","inputType":"number","title":"How many times a week do you perform Explosiveness exercises? (e.g. vertical leap, sprint, long box jump, clean and jerk, etc.)"},{"name":"text3","placeHolder":"#","inputType":"number","title":"How many times a week do you perform agility exercises? (e.g. plyometric hurdles and box jumps, speed ladder, footwork and cone drills, etc.)"},{"name":"text4","placeHolder":"#","inputType":"number","title":"How many times a week do you perform core exercises? (e.g. crunches, sit-ups, leg raises, planks, etc.)"},{"name":"text5","placeHolder":"#","inputType":"number","title":"How many times a week do you perform cardio exercises? (e.g. jump rope, running, stationary bicycle, swimming, HIIT, etc.)"},{"name":"text6","placeHolder":"#","inputType":"number","title":"How many times a week do you perform flexibility exercises? (e.g. yoga, stretching exercises, etc.)"}]}]},{"name":"page3","elements":[{"type":"matrix","name":"question4","title":"Please prioritze the performance metrics below on a scale of 1‐6 (1 being the highest priority)","columns":["1","2","3","4","5","6"],"rows":["Strength / Power","Explosiveness","Agility","Core","Cardio","Flexibility"]}]},{"name":"page4","elements":[{"type":"panel","name":"panel1","elements":[{"type":"matrix","name":"question5","title":"Do you have any injury or physical condition that might influence your performance?","columns":["Yes","No"]},{"type":"comment","name":"question6","title":"If you answered 'yes' to the question above, please provide details"},{"type":"comment","name":"question8","title":"If you are being treated for a medical condition by a doctor or with physical therapy, please provide details"},{"type":"comment","name":"question7","title":"If a medical professional has advised certain exercises / movements to avoid, please list them below"}]}]}],
  completedHtml: "<p><h4>Thank you for registering with Influx Sport.</h4></p>"};

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

export default Register;
