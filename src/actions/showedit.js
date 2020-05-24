
function showEdit(isEdit){
       return{
            type:"SHOW_EDIT",
            payload: isEdit,
    }
}

export const showsEdit=(isEdit)=>{
    return (dispatch=>{
        dispatch(showEdit(isEdit))
    }
)}