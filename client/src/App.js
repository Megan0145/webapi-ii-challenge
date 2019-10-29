import React from "react";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const monsterReducer = combineReducers({
  posts: reducers.postsReducer
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  );
}

export default App;
