import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todo,
    }
  }

  render() {
    return (
      <div>
        <h2>Todo List!</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
