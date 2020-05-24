import React,{useState} from 'react';

function TodoInput(props){
        
    let [textInput,setTextInput] = useState("");

    
    let {addTodo} = props;

    return(
        
        <div className="addTodo">
            <div className="todoInput">
                <input type="text" style={{margin:"10px"}} autoComplete="off" value={textInput} onChange={(e)=>setTextInput(e.target.value)}></input>
                <button onClick={()=>addTodo(textInput)} >Add</button>
            </div>
        </div>
        
    )


}

export default TodoInput;