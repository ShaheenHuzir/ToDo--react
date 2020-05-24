
const initState = {
    todo:[],
    isEdit: false,
};

function addsTodo(state,action){
    let {payload} = action;
    return{
            ...state,
            todo:[...state.todo,payload]
    }

}

function doneTODO(state,action){
    let {payload} = action;
    let newTodo = [...state.todo];
    let index = newTodo.findIndex(item=> item===payload);
    newTodo.splice(index,1);
    return {
        ...state,
        todo:[...newTodo]
    }
}


function showEditBox(state,action){
        let {payload} = action;
        console.log("isEdit",action)
        let isEdits = !payload.isEdit;
        return{
            ...state,
            isEdit: isEdits
        }

}

function editsTodo(state,action){

    //console.log("State action is",action);
    console.log("state is",state);
    let {payload} = action;
    let[editedTodo,newText] = payload;
    let newTodo = [...state.todo];
    let isEdits = !(state.isEdit);
    let index =  newTodo.findIndex(item =>item===editedTodo);
    newTodo.splice(index,1,newText);
    return {
        ...state,
        todo:[...newTodo],
        isEdit : isEdits
    }
}


export const todoReducer=(state=initState,action)=>{
 
    switch(action.type){
        case "ADD_TODO": return addsTodo(state,action);
        case "DONE_TODO" : return doneTODO(state,action);
        case "SHOW_EDIT" :  return showEditBox(state,action);
        case "EDIT_TODO" : return editsTodo(state,action);
        default : return state;
    }
}