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

  deleteItem = clickedItemId => {
    console.log('hello');
    this.setState({
      todo: this.state.todo.map((item, index) => {
        if(item.id === clickedItemId) {
          const dlItem = (index, e) => {
            dlItem.splice(index, 1);
            this.setState(...item);
          }
        }
      })
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
