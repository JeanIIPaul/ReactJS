import React from "react";
import Todos from "./components/Todos.js";
//import App from "./App.css";

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Update GitLab",
        completed: false
      },
      {
        id: 3,
        title: "Finish project",
        completed: false
      },
      {
        id: 4,
        title: "Go to the gym",
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
