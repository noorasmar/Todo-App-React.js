import React, {useState} from "react";
import Task from '../Task/task';


const TodoList = (props)=>{
    const RANGE_RANDOME = 1000;
    
    const hundleDelete = (currentTask)=>{
        const newTasks = props.todos.filter((el)=>{
            return el.name !== currentTask.name;
        });
        props.setTodos(newTasks);
    };

    const getRandomeKey = ()=>{
        return Math.floor(Math.random() * RANGE_RANDOME)
    };

    return ( 
        <React.Fragment>
            <div className='todo-list'>
                {
                    props.todos.map((el)=>{
                        return <Task key={getRandomeKey()} todos={props.todos} task={el} setTodos={props.setTodos} onDelete={hundleDelete}/>;
                    })
                }                
            </div>
        </React.Fragment>
    );
}

export default TodoList;