import React,{useState,useEffect} from 'react';
import {Typography,Container} from '@mui/material';
import AddTodoForm from './components/AddTodoForm/addTodoForm';
import TodoList from './components/TodoList/todoList';
import './css/App.css';

const App = () => {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    getLocalTodos();
  }, []);

  useEffect(()=>{
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = ()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  };

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let toLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(toLocal);
    }
  };

  return (
    <div className="App">
      <React.Fragment>
          <Container maxWidth="lg" className='container'>
            <Typography variant="h2" component="div" className='heading' >
              Todo List
            </Typography>
            <AddTodoForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
            <TodoList todos={todos} setTodos={setTodos}/>
          </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
