import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <Todo />
            <button>Delete</button>
        </div>
    );
};

export default TodoList;
