import React from 'react';
import Todo from './Todo';
import App from '../App';

const TodoList = props => {
    console.log(props)
    return (
        <div>
            {props.todo.map((item, index) => (
            <Todo 
                key={index}
                item={item}
                toggleItem={props.toggleItem}

            />
            ))}
            <button onClick={props.deleteItem}>Delete</button>
        </div>
    );
};

export default TodoList;
