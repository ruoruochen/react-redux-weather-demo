import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWeather } from "@/redux/weatherModule";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: false,
    };
  }

  getLocationCity() {
    //eslint-disable-next-line
    AMap.plugin("AMap.CitySearch", function () {
      //eslint-disable-next-line
      var citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function (status, result) {
        if (status === "complete" && result.info === "OK") {
          return result;
        }
      });
    });
    return "";
  }

  //初始化天气数据
  initWeather(city) {
    // 获取天气
    this.props.getWeather();
    console.log(this.props.weather, "info-data");
    this.setState({ init: true });
  }

  componentDidMount() {
    let city = this.props.weather.city;
    // 仅在第一次初始化拉取地点城市
    if (!this.state.init) {
      city = this.getLocationCity();
    }
    this.initWeather(city);
  }

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
    dispatch(fetchWeather());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
