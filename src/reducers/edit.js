const initialState = {
    items: [],
    title: "",
    item: "",
    edit: false,
    error: ""
}


const Reducers = (state = initialState, action) => {
    switch(action.type){
            case actionTypes.ADD_ITEM:
                const newitem = {
                    id: Date.now(),
                    value: state.title
                }
            return {
                ...state,
                items: state.items.concat(newitem),
                title: "",
                error: ""
            }
            case actionTypes.EDIT_ITEM:
                var newList = [...state.items];
                var index = newList.indexOf(state.item);
                if (index !== -1) {
                    newList[index].value = state.title;
                    return {
                    ...state,
                    title: "",
                    edit: false,
                    items: newList,
                    error: ""
                    }
                } 
                else{
                    return {
                    ...state
                    }
                }

            case actionTypes.DELETE_ITEM:
                newList = [...state.items];
                index = newList.indexOf(state.item);
                if (index !== -1) {
                    newList.splice(index, 1);
                    return {
                    ...state,items: newList
                    }
                } else {
                    return {
                    ...state
                    }
                }    

            case actionTypes.SET_TITLE:
                return {
                    ...state,
                    title: action.title
                }

            case actionTypes.SET_ITEM:
                return {
                    ...state,
                    item: action.item,
                    error: ""
                }
            case actionTypes.SET_ERROR:
                return {
                    ...state,
                    error: action.error
                }
            case actionTypes.SET_EDIT:
                return {
                    ...state,
                    edit: true,
                    error: ""
                }    




    }
}