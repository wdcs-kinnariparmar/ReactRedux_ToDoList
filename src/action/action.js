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
            id   
        }
    }
}

export const saveUpdate = (id, item) => {
    
    return{ 
        type: "Save_Update", 
        payload: {
            id, item  
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

export const removeAll  = () => {
    return{
        type: "Remove_All"
    }
}




