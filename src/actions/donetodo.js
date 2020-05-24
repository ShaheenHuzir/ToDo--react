function doneTodo(text){
    return{
        type:"DONE_TODO",
        payload: text,
    }
}

export const doneTodos=(todo)=>{
    console.log(todo);
    return ( dispatch=>{
        dispatch(doneTodo(todo))
    })
}