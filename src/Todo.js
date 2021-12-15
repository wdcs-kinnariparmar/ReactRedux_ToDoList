import React, { useState, useEffect} from 'react';
import { addItems,editItem,update, deleteItem, checkedItem,checkList, uncheckList, allList, removeAll} from './action/action';

import "./App.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// get the local data back

const getLocalData = () => {
    const lists = localStorage.getItem("reduxtodolist");

    if(lists) {
        return JSON.parse(lists);
    }
    else{
        return[];
    }
}

const Todo = () => {
    const [inputData,setInputData] = useState('');
    const list = useSelector(state => state.Reducers.list);
    const dispatch = useDispatch();

    const saveUpdate = (e,key) => {
        e.preventDefault();
        const newItem = e.target.value;
        const data = {newItem};
        
        dispatch(update({id: key,data: data}))
    }

    //set data in local storage.
    useEffect(() => {
        localStorage.setItem("reduxtodolist", JSON.stringify(list));
    }, [list]);


    return (
        <>
            <div className = "main_div">
                <div className = "child_div">
                
                    <h2>TODO List</h2>
                    {/* the input and button */}
                    <div className = "add_items">
                        <input className = "todo_inp" type = "text" 
                        value = {inputData}
                        onChange = {(e) => {
                            setInputData(e.target.value)
                        }}
                        placeholder = "Add Items..." />
                        <button onClick={() => {dispatch(addItems(inputData),setInputData(''))}}>ADD</button>
                    </div>

                        {/* show the lists */}
                    <div>
                        
                            {
                                list.map((ele) => {
                                    return (
                                        <div className = "eachitem" key = {ele.id}>

                                        <span>
                                            {ele.editing ? (
                                                <form onSubmit={saveUpdate} key = {ele.id}>
                                                        <input key={ele.id} type="text"
                                                            onChange={e => e.target.value}
                                                            placeholder='add new item...'
                                                        />
                                                        <button type='submit'>Update</button>
                                                </form>
                                            ) : (<>
                                                        <h3>{ele.item}</h3>
                                                        <button  onClick = {() => {
                                                            console.log("ele.id", ele.id)
                                                            dispatch(editItem(ele.id))}}> Edit </button>
                                                    
                    
                                                 </>)}   
                                      
                                            <button onClick = {() => {dispatch(deleteItem(ele.id))}} > Close </button>
                                            <input type="checkbox" onClick = {() => dispatch(checkedItem(ele.checked = true))}/>
                                        </span>
                                        </div>
                                    )
                                })
                            }
                            
                    </div>
                    
                </div>

            </div>

            <div className = "checked_btn">
                <button onClick={() => {dispatch(checkList(list))}}>Checked</button>
                <button onClick={() => {dispatch(uncheckList(list))}}>UnChecked</button>
                <button onClick={() => {dispatch(allList(list))}}>All</button>
                <button className = "remove_btn" onClick = {() => {dispatch(removeAll())}}><span>Remove All</span></button>
            </div>

            
        </>
    );
};

export default Todo; 