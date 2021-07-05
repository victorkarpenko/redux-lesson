## устанавливаем библиотеки
npm i redux react-redux

## создаем структуру
=1
папка redux
/actions
/reducers
store.js


## создаем экшены

const loginUser = (user) => {
  return {
    type: "contacts/CREATE_USER",
    payload: {
      email: user.email,
      password: user.pass,
    },
  };
};
};

## создаем редюсеры

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "contacts/CREATE_USER":
      const newState = action.payload;
      return newState;

    default:
      return state;
  }
};

## создаем стор

import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ contacts: contactReducer, filter: filterReducer });

const store = createStore(
rootReducer,
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
);
export default store;

## заворачиваем все приложение в компонент Provider

в index.js
import { Provider } from "react-redux";
import store from "./redux/store";

передаем store пропами через Provider

## получаем доступ к глобальному стору к компонентах через HOC connect

import { connect } from "react-redux";

заворачиваем экспорт компонента в HOC connect и передаем
mapStateToProps для передачи свойств
mapDispatchToProps для передачи методов

## или через хуки
