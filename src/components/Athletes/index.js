import React, {Component} from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import Firebase from 'firebase';
import config from '../../config';
// import { Router, Route, Link, NavLink, BrowserRouter, Switch} from 'react-router-dom';


// needs to be fixed?
class Athletes extends Component {

  constructor(props) {
    super(props);

    this.state = {
      athletes: [],
    };

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

  render() {
    const { athletes} = this.state;
    console.log(this.state.athletes)
      return (
        <div className="container">
          <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {athletes &&
          athletes.map((e, i)=>{
            return (
              <tr key={e.uid}>
                <th>{i +1}</th>
                <td><NavLink to={`/athletes/${e.uid}`}>{e.name}</NavLink></td>
              </tr>
            )
          })}
        </tbody>
      </table>
        </div>
      )
  }
}

export default Athletes;
