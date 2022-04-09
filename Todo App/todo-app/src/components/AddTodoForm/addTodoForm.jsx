import React from 'react';
import {TextField, Button} from '@mui/material';
import './addTodoForm.css';

const AddTodoForm = (props)=>{

    const inputTextHundler = (e)=>{
        props.setInputText(e.target.value);
    }

    const submitHundler = (e)=>{
        e.preventDefault(); 
        props.setTodos([
            ...props.todos,{name: props.inputText, status: 'not--complete'}
        ]);
        props.setInputText("");
    }

    return ( 
        <React.Fragment>
            <form>
                <TextField id="outlined-basic" value={props.inputText} onChange={inputTextHundler} label="Add todo" variant="outlined" className='text-field'/>
                <br/>
                <Button variant="contained" onClick={submitHundler} className='btn'>Submit</Button>
            </form>
        </React.Fragment>

    );
}

export default AddTodoForm;