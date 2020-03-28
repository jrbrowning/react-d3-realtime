import React from "react";
import axios from 'axios';
import "../../App.css";

export default class Dashboard extends React.Component {
 state = {
    usStates: []
  }

  componentDidMount() {
    axios.get(`https://covidtracking.com/api/states`).then(res => {
      const usStates = res.data;
      this.setState({ usStates });
    });
  }

  render() {
    return (
      <ul>
        {this.state.usStates.map(region => (
          <li>{region.state}</li>
        ))}
      </ul>
    );
  }
}