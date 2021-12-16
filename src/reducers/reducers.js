import {combineReducers} from "redux";

const initialState = {
    list : []
}

const Reducers = (state = initialState, action) => {


    switch(action.type){
        
       case "Add_Item" :
           if(action.payload.item === ""){
               alert("please enter list...");
               return state;
           }
           else{
                return {
                    list: [ 
                        ...state.list,action.payload
                    ]
                } 
           }
            
        case "Delete_Item":
            
            return {
                list: state.list.filter(ele => ele.id !== action.payload.id)
            }
        case "Edit_Item" :
            
            return {
                list: state.list
            }   

        case "Save_Update" :
            console.log("id",action.payload.id)
            console.log("item",action.payload.item)
            return {
                list: state.list.map(ele => ele.id === action.payload.id ? {...ele,item: action.payload.item, editing: false} : ele)
            }   

        case "Remove_All" :     
            return {
                list : []
            }
        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
