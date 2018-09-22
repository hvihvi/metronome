import React from "react";
import metronome from "./redux/metronome";
import * as Redux from "redux";
import { Provider } from "react-redux";
import AppLayout from "./containers/AppLayout";

const store = Redux.createStore(
  Redux.combineReducers({ metronome }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default App;
