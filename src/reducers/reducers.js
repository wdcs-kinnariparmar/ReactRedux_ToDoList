import {combineReducers} from "redux";

const initialState = {
    list : [],
    templist:[]
}

const Reducers = (state = initialState, action) => {


    switch(action.type){
        
       case "Add_Item" :
            return {
                ...state,
                list: [ 
                    ...state.list,action.payload
                ],
                temlist: [
                    ...state.list, action.payload
                ]
            } 
        case "Delete_Item":
            
            return {
                ...state.list,
                list: state.list.filter(ele => ele.id !== action.payload.id)
            }
        case "Edit_Item" :
            
            return {
                ...state.list,
                list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele, editing: true} : ele)
            }   


        case "Update" :
            console.log("action.payload",action.payload);
            return {
                ...state.list,
                list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele, item: action.payload.item, editing: false} : {...ele, editing: false})
            }  

        case "Checked_Item":

            return{
                list: state.list,
            } 

        case "Check_List": 
            // const text = state.list.map((ele) => ele.checked === true);
        
            return { 
                ...state.list,
                list: state.list.filter((ele) => ele.checked === true)
            }
             
        case  "Uncheck_List" :
            // const text= state.list.map((ele) => ele.checked !== true);  
            
            return {
                ...state.list,
                list: state.list.filter((ele) => ele.checked !== true)
                    
            }
            
 
        case "All_List":
                
            return {
                ...state.list,
                templist : state.list
            } 

        case "Remove_All" :     
            return {
                ...state,
                templist : []
            }
        default :
            return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
