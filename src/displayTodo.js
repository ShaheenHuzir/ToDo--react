import React,{useState} from 'react';
import {connect} from 'react-redux';
import './App.css';
// import TodoEdit from './todoedit';
function DisplayTodo(props){
let {todo,removeTodo,showEdit,isEdit,editTodo} = props;

let [inputText,inputState] = useState("");
    
     return(
            <div className="todoDisp">
                {!!todo && todo.length >0 && todo.map((item,index)=>{
                    return(
                    <div className="todoItem">
                     <div className="todoText"> 
                      <p>{index+1}.{item}</p> 
                        </div>
                        <div>
                           {!isEdit?<button onClick={()=>{showEdit(isEdit)}}>Edit</button>:null}
                        </div>
                        
                        {isEdit?<div>
                            <input type="text" onChange={(e)=>{inputState(e.target.value)}}></input>
                            <button onClick={()=>{editTodo([item,inputText])}} >Update</button>  
        </div>:null}
                        <div>
                        <button onClick={()=>{removeTodo(item)}}>Done</button>
                        </div>
                        </div>)
                })
                }
             </div>
     )

}

let mapStoreToProps = (store) =>({
    isEdit  : store.isEdit,
})

export default connect (mapStoreToProps)(DisplayTodo);