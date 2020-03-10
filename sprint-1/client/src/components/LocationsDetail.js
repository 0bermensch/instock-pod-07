import React, { Component } from "react";
import axios from "axios";

export default class LocationsDetail extends Component {
  constructor() {
    super();
    this.state = {
      locationDetails: []
    };
  }

  componentDidMount() {
    console.log(this.props);
    axios.get(`/api/locations/${this.props.id}`).then(res => {
      console.log(res.data);
      this.setState({
        locationDetails: res.data
      });
    });
  }

  render() {
    return <div>Hello</div>;
  }
}
