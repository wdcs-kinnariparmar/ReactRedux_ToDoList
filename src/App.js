import React from "react";
import store from "./store";
import Todo from "./Todo";
import {Provider} from "react-redux";

store.subscribe(() => console.log(store.getState()))

const App = () => {
  return (
    <>
      <Provider store = {store}>
        <Todo/>
      </Provider> 
    </>
  )
}

export default App;