import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as Survey from "survey-react";
import Firebase from 'firebase';
import config from '../../config';

// needs to be fixed?
class Register extends Component {

  constructor(props) {
    super(props);
    // Firebase.initializeApp(config);

    this.state = {
      athletes: [],
    };

    this.onComplete = this.onComplete.bind(this)
  }

  componentDidMount() {
    this.getUserData();
  }


  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  writeUserData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }


   surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"text","name":"name","title":"Please Enter Full Name","isRequired":true},{"isRequired":true,"type":"matrixdynamic","name":"currentSport","title":"Please list sport(s) you are competing and check box for season during which you are competing","columns":[{"name":"Sport","title":"Sport ","cellType":"text"},{"name":"Position","cellType":"text"},{"name":"Season","title":"Season","cellType":"checkbox"}],"choices":["Winter","Spring","Summer","Fall"],"cellType":"text","rowCount":1,"addRowText":"Add New Sport and Position"}]},{"name":"page2","elements":[{"isRequired":true,"type":"multipletext","name":"weekRoutine","title":"Questions","items":[{"name":"weekPower","placeHolder":"#","inputType":"number","title":"How many times a week do you perform strength / power exercises? (e.g. bench press, push-ups, pull-ups, squat, row, deadlift, etc.)"},{"name":"weekExplosive","placeHolder":"#","inputType":"number","title":"How many times a week do you perform Explosiveness exercises? (e.g. vertical leap, sprint, long box jump, clean and jerk, etc.)"},{"name":"weekAgility","placeHolder":"#","inputType":"number","title":"How many times a week do you perform agility exercises? (e.g. plyometric hurdles and box jumps, speed ladder, footwork and cone drills, etc.)"},{"name":"weekCore","placeHolder":"#","inputType":"number","title":"How many times a week do you perform core exercises? (e.g. crunches, sit-ups, leg raises, planks, etc.)"},{"name":"weekCardio","placeHolder":"#","inputType":"number","title":"How many times a week do you perform cardio exercises? (e.g. jump rope, running, stationary bicycle, swimming, HIIT, etc.)"},{"name":"weekFlex","placeHolder":"#","inputType":"number","title":"How many times a week do you perform flexibility exercises? (e.g. yoga, stretching exercises, etc.)"}]}]},{"name":"page3","elements":[{"isRequired":true, "type":"matrix","name":"skillMetric","title":"Please prioritze the performance metrics below on a scale of 1‐6 (1 being the highest priority)","columns":["1","2","3","4","5","6"],"rows":["Strength","Explosiveness","Agility","Core","Cardio","Flexibility"]}]},{"name":"page4","elements":[{"type":"panel","name":"panel1","elements":[{"type":"matrix","name":"injury","title":"Do you have any injury or physical condition that might influence your performance?","columns":["Yes","No"]},{"type":"comment","name":"injuryOne","title":"If you answered 'yes' to the question above, please provide details"},{"type":"comment","name":"injuryTwo","title":"If you are being treated for a medical condition by a doctor or with physical therapy, please provide details"},{"type":"comment","name":"injuryThree","title":"If a medical professional has advised certain exercises / movements to avoid, please list them below"}]}]}],
  completedHtml: "<p><h4>Thank you for registering with Influx Sport.</h4></p>"};

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    const completed = result.data
      const uid = new Date().getTime().toString();
      const { athletes } = this.state;
      let obj = {}
      for(let key in completed){
        obj[key] = completed[key]
      }
      obj.uid = uid

      athletes.push(obj)
      this.setState({ athletes });

    // for(var key in completed){
    //   console.log(key,':', completed[key])
    //   this.refs.key.value = '';
    // }
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
