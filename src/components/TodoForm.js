import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        } 
        
    }

    render() {
        return (
          <div>
            <form>
                <input 
                type='text'
                name='item'
                />
                <button>Add</button>
                <button>Delete</button>
            </form>
          </div>
        );
      }
    }