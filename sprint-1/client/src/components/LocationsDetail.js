import React, { Component } from "react";
import axios from "axios";

export default class LocationsDetail extends Component {
  constructor() {
    super();
    state = {
      locationDetail: {}
    };
  }
  componentDidMount() {
    console.log(props);
    axios.get(`/api/locations/${props.id}`).then(res => {
      console.log(res.data);
      this.setState({
        locationDetail: res.data
      });
    });
  }

  render() {
    return <div>Hello</div>;
  }
}
