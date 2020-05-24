import React from 'react';
import DisplayTodo from './displayTodo';
import TodoInput from './todoInput';
import './App.css';
import {connect} from 'react-redux';
import { doneTodos } from './actions/donetodo';
import {addTodos} from './actions/addTodo';
import { editTodos } from './actions/editsTodo';
import {showsEdit} from './actions/showedit';

class Content extends  React.Component{
    
    // constructor(props){
    //     super(props);
    //     //this.state = { todo:[] }
    // }
        
    

    addTodo = newTodo =>{
            let {addTodo} = this.props;
            addTodo(newTodo);

            //  let {todo} = this.state;
    //          let updatedTodo = [...todo];
    //          updatedTodo.push(newTodo)   
    //  this.setState({
    //                  todo:updatedTodo, 
    //         })
    }
    

    removeTodo = todoToRemove =>{
                let {doneTodo} = this.props;
                doneTodo(todoToRemove);
            // let {todo} = this.state;
            // let latestTodo = [...todo];
            // let indexToRemove = todo.findIndex(item=> item===todoToRemove)
            // latestTodo.splice(indexToRemove,1);
            // return this.setState({
            //     todo:latestTodo,
            // })

    }

    showEdit = () =>{
            let {isEdit,showsEdit} = this.props;
            showsEdit(isEdit)
    }
    
    editTodos =(todo) =>{
            let {editsTodo} = this.props;
              editsTodo(todo);
                  
    }

    render(){
        
        let {todoData} = this.props;
        console.log(todoData);
        return(
            <div className="todo_container">
                <div>
                <TodoInput addTodo ={this.addTodo} />
                </div>
                <div className="display_container">
                <DisplayTodo todo={todoData} removeTodo={this.removeTodo} showEdit={this.showEdit} editTodo={this.editTodos}/>
                </div>
            </div>
        )
    }

}
 
let mapStoreToProps=store=>(
    {
        todoData : store.todo,
        isEdit  : store.isEdit,
    }
)

let mapDispatchToProps=dispatch=>({

    addTodo : (todo)=>{dispatch(addTodos(todo))},
    doneTodo : (todo)=>{dispatch(doneTodos(todo))},
    showsEdit : (isEdit)=>{dispatch(showsEdit(isEdit))},
    editsTodo : (todo,newText)=>{dispatch(editTodos(todo,newText))},
})


export default connect(mapStoreToProps,mapDispatchToProps)(Content) 