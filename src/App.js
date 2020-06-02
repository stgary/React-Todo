import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    task: "put on some clothes",
    id: 123,
    completed: false
  },
  {
    task: "go to a party",
    id: 124,
    completed: false
  },
  {
    task: "drink beer",
    id: 1235,
    completed: false
  },
  {
    task: "crash your car",
    id: 1235,
    completed: false
  },
  {
    task: "go to jail",
    id: 1246,
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

  toggleItem = clickedItemId => {
    console.log(clickedItemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === clickedItemId) {
          return {
          ...item,
          completed: !item.completed
          };
        } else {
          return  item;
        }
      })
    });
  };


  deleteItem = () => {
    const updatedList = this.state.todo.filter(item => item.completed !== true);
    console.log(updatedList)
    this.setState({
      todo: [...updatedList]
    });
  };
   

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
