import React,{useState} from 'react';
import { connect } from 'react-redux';

function TodoEdit(props){
    let {editTodo,todo} = props;
    let [inputText,inputState] = useState("");
        console.log(todo);
    return(
        
        <div>
            <input type="text" onChange={(e)=>{inputState(e.target.value)}}></input>
            <button onClick={editTodo(todo,inputText)} >Update</button> 
        </div>
    )


}



export default TodoEdit;