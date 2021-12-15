export const addItems = (item) => {
    return{
        type: "Add_Item",
        payload: {
            id: new Date().getTime().toString(),
            item,
            checked: false,
            editing: false
        }
    }
    
}

export const editItem = (id) => {
    
    return{ 
        type: "Edit_Item", 
        payload: {
            id,
            key: id
        }
    }
}

export const update = (id, data) => {

    return{
        type: "Update",
        payload: {
            id, data
        }
    }
}


export const deleteItem = (id) => {
    return{
        type: "Delete_Item",
        payload: {
            id: id,
            key: id
        }
        
    }

    
}

export const checkedItem = (id,item) => {
    return{
        type: "Checked_Item",
        payload: {  id , item }
    }
}

export const checkList = (checked,list) => {
    return{
        type: "Check_List",
        payload: { checked,list }
    }
}

export const uncheckList = (checked,list) => {
    return{
        type: "Uncheck_List",
        payload: { checked,list}
    }
}

export const allList = (checked,list) => {
    return{
        type: "All_List",
        payload: { checked,list }
    }
}

export const removeAll  = (id) => {
    return{
        type: "Remove_All"
    }
}




