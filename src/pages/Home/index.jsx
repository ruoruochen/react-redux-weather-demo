import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { getWeather } from "@/redux/weatherModule";
class Home extends Component {
  render() {
    return (
      <div>
        Home
        <Link to="/search">搜索</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  weather: state.weather,
});

const mapDispatchToProps = (dispatch, props) => ({
  getWeather() {
    // dispatch();
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
