// defaultState
export const DEFAULT_STATE = {
  city: "",
  weatherData: [],
};

// actionTypes
export const GET_WEATHER = "GET_WEATHER";
export const CHANGE_CITY = "CHANGE_CITY";

// actions 异步请求需要使用redux-thunk异步中间件

export const getWeather = (data) => ({
  type: GET_WEATHER,
  data: data,
});

export const fetchWeather = () => {
  return (dispatch) => {
    // 发送请求拿到数据
    // dispatch(getWeather(data));
  };
};

export const changeCity = (data) => ({
  type: CHANGE_CITY,
  data: data,
});

// reducer
export const weatherReducer = function (state = DEFAULT_STATE, action) {
  const { type, data } = action;
  switch (type) {
    case GET_WEATHER:
      return state;
    case CHANGE_CITY:
      return {
        ...state,
        city: data,
      };

    default:
      return state;
  }
};
