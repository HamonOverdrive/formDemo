import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Firebase from 'firebase';


// needs to be fixed?
class SingleAthlete extends Component {
  constructor(props) {
    super(props);
    // Firebase.initializeApp(config);
    this.state = {
      athlete: {}
    };
  }

  componentDidMount(){
    this.getSingleAthelete();
  }

  getSingleAthelete = () => {
    const athleteId = this.props.match.params.athleteId
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      const found = state.athletes.find((e) =>{
        return e.uid == athleteId
      })
      this.setState({athlete: found});
    });
  }

  render() {
    console.log(this.state.athlete)
      const {name, skillMetric, weekRoutine, currentSport} = this.state.athlete
      return (
        <div className="container">
          <div className="card">
            <div className="card-header">
              Athlete: {name}
            </div>
            <div className="card-body">
              <h5 className="card-title">Sports Involved</h5>
              {currentSport && currentSport.map((e)=>{
                return (
                  <ul>
                    <li>{e.Sport}</li>
                    <li>{e.Position}</li>
                    <li>{e.Season[0]}</li>
                  </ul>
                )
              })}
              <h5 className="card-title">Weekly Routine</h5>
              {weekRoutine &&
              <ul>
                <li>Weekly Agility: {weekRoutine.weekAgility}</li>
                <li>Weekly Cardio: {weekRoutine.weekCardio}</li>
                <li>Weekly Core: {weekRoutine.weekCore}</li>
                <li>Weekly Explosive: {weekRoutine.weekExplosive}</li>
                <li>Weekly Flexibility: {weekRoutine.weekFlex}</li>
                <li>Weekly Power: {weekRoutine.weekPower}</li>
              </ul>}
              <h5 className="card-title">Skill Metric</h5>
              {skillMetric &&
                <ul>
                  <li>Agility - {skillMetric.Agility}</li>
                  <li>Cardio - {skillMetric.Cardio}</li>
                  <li>Core - {skillMetric.Core}</li>
                  <li>Explosiveness - {skillMetric.Explosiveness}</li>
                  <li>Flexibility - {skillMetric.Flex}</li>
                  <li>Power - {skillMetric.Strength}</li>
                </ul>
              }

              <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">Athlete Injury Answers</h5>
                {this.state.athlete.injury &&
                <p><strong>Do you have any injury or physical condition that might influence your performance?</strong> <br />{this.state.athlete.injury}</p>}

                {this.state.athlete.injuryOne &&
                <p><strong>6. If you answered 'yes' to the question above, please provide details</strong> <br />{this.state.athlete.injuryOne}</p>}

                {this.state.athlete.injuryTwo &&
                <p><strong>7. If you are being treated for a medical condition by a doctor or with physical therapy, please provide details</strong><br /> {this.state.athlete.injuryTwo}</p>}

                {this.state.athlete.injuryThree &&
                <p><strong>8. If a medical professional has advised certain exercises / movements to avoid, please list them below</strong><br /> {this.state.athlete.injuryThree}</p>}

              </div>
            </div>
            </div>
          </div>
        </div>

      )
  }
}

export default SingleAthlete;
