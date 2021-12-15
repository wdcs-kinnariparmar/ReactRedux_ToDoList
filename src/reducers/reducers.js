import {combineReducers} from "redux";


const initialState = {
    list : [],
    templist:[]
}

const Reducers = (state = initialState, action) => {


    if(action.type === "Add_Item"){
        const {id,item} = action.payload;
        if(action.payload.item === "") {
            alert("please write your list...");
            return state;
        }
        else {
            return{
                ...state,
                list: [ ...state.list,{
                    id,item
                }],
                temlist: []
            } 
        }     
    }
    else if(action.type === "Delete_Item"){
        
        return {
            ...state.list,
            list: state.list.filter(ele => ele.id !== action.payload.id)
        }
    }
    else if(action.type === "Edit_Item"){
        
        return {
            ...state.list,
            list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele, editing: true} : ele)
        }

    }   


    else if(action.type === "Update"){
        console.log("action.payload",action.payload);
        return {
            ...state.list,
            list: state.list.map((ele) => ele.id === action.payload.id ? { ...ele,item: action.payload.item ,editing: false} : {...ele, editing: false})
        }

    }   

    else if(action.type === "Checked_Item"){

        return{
            list: state.list,
            text: state.text
        }

       
    }  

        else if(action.type === "Check_List"){
            // const text = state.list.map((ele) => ele.checked === true);
        
            return { 
                ...state.list,
                list: state.list.filter((ele) => ele.checked === true)
            }
            
        }  
        else if(action.type === "Uncheck_List"){
            // const text= state.list.map((ele) => ele.checked !== true);  
            
            return {
                ...state.list,
                list: state.list.filter((ele) => ele.checked !== true)
                    
            }
            
        }  


        else if(action.type === "All_List"){
                
            return {
                ...state.list,
                list : state.list
            }

        }  

        else if(action.type === "Remove_All"){       
            return {
                ...state,
                list : []
            }
        }  

    
    else {
        return state;
    }
}


const StoreReducers = combineReducers({Reducers});

export default StoreReducers;

export {Reducers}
