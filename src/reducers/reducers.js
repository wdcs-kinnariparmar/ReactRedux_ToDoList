import {combineReducers} from "redux";

const initialState = {
    list : []
}

const Reducers = (state = initialState, action) => {


    switch(action.type){
        
       case "Add_Item" :
            return {
                list: [ 
                    ...state.list,action.payload
                ]
            } 
        case "Delete_Item":
            
            return {
                list: state.list.filter(ele => ele.id !== action.payload.id)
            }
        case "Edit_Item" :
            
            return {
                list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele, editing: true} : ele)
            }   


        case "Update" :
            console.log("action.payload",action.payload);
            return {
                list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele, item: action.payload.item, editing: false} : {...ele, editing: false})
            }  

        case "Checked_Item":

            return{
                list: state.list
            } 

        case "Check_List": 
            // const text = state.list.map((ele) => ele.checked === true);
        
            return { 
                list: state.templist
            }
             
        case  "Uncheck_List" :
            // const text= state.list.map((ele) => ele.checked !== true);  
            
            return {
                list: state.templist
                
            }
            
 
        case "All_List":
                
            return {
                list : state.list
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
