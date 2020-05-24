
function addTodo(text){
    return{
        type:"ADD_TODO",
        payload: text,
    }
}

export const addTodos=(todoText)=>{

    return ( dispatch=>{
        dispatch(addTodo(todoText))
    })
}