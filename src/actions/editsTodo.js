function editTheTodo(todo){
    console.log("action",todo)
    return{
        type:"EDIT_TODO",
        payload: todo,      
    }
}

export const editTodos=(action)=>{
    console.log(action)
    return ( dispatch=>{
        dispatch(editTheTodo(action))
    })
}