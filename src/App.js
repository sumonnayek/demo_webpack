import React from "react";
import "./App.css";
import TodoMain from "./components/TodoMain";
import { Provider } from "react-redux";
import store from './store';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoMain />
      </div>
    </Provider>
  );
}

export default App;

//  {
//   categories: {},
//   todoList: [],
//   loading: false,
//   activeTodoId: null,
// }
