import React, {useState} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import './task.css';
    
const Task = (props)=>{
    const [statusTask,setStatusTask] = useState(props.task.status);
    const [nameTask] = useState(props.task.name);

    const hundleToggle = ()=>{
        if(statusTask === "not--complete"){
            const newTasks = props.todos.map((el)=>{
                if(el.name === nameTask){
                    el.status='complete';
                    return el;
                }
                else {
                    return el;
                }
            });
            props.setTodos(newTasks);
            setStatusTask('complete')
        }
        else{ 
            const newTasks = props.todos.map((el)=>{
                if(el.name === nameTask){
                    el.status='not--complete';
                    return el;
                }
                else {
                    return el;
                }
            });
            props.setTodos(newTasks);
            setStatusTask('not--complete')
        }
    };

    return ( 
        <React.Fragment>
            <div className='todo-list__task' >
                <p className={statusTask}>
                    {nameTask}
                </p>

                <div className="todo-list__btn-icon">
                    <span onClick={hundleToggle}>
                        <CheckRoundedIcon />
                    </span>
                    <span onClick={()=>props.onDelete(props.task)}>
                        <ClearIcon />
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Task;