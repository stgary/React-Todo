import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todo = [
  {
    task: "Bananas",
    id: 123,
    completed: false
  },
  {
    task: "Torillas",
    id: 124,
    completed: false
  },
  {
    task: "Milk",
    id: 1235,
    completed: false
  },
  {
    task: "Pizza Sauce",
    id: 1246,
    completed: false
  },
  {
    task: "Raw Honey",
    id: 1237,
    completed: false
  },
  {
    task: "Granola",
    id: 1248,
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
