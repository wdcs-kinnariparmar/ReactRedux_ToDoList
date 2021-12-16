import React, { useState, useRef} from 'react';
import { addItems,editItem,saveUpdate, deleteItem, checkedItem, removeAll} from './action/action';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Todo = () => {
    const [inputData,setInputData] = useState('');
    const list = useSelector(state => state.Reducers.list);
    const dispatch = useDispatch();
    const inputRef = useRef(true);
    const [sort, setSort] = useState("all");

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
                        { sort === "all" ?
                            list.map((ele) => {
                                    return (
                                            <div className = "eachitem" key = {ele.id}>

                                                <span>
                                                    <h3>{ele.editing ? inputData : ele.item}</h3>
                                    
                                                    {ele.editing ? null : 
                                                        <button  onClick = {() => {dispatch(editItem(ele.editing = true),setInputData(ele.item))}}> Edit </button>}
                                                    {ele.editing ? <button  onClick = {() => {
                                                        console.log("ele id", ele.id)
                                                        console.log("inputData", inputData)
                                                        dispatch(saveUpdate(ele.id,ele.item = inputData),setInputData(""))}}> save </button>
                                                    : null}
                                                    <button onClick = {() => {dispatch(deleteItem(ele.id))}} > Close </button>
                                                    <button type="checkbox" onClick = {() => dispatch(checkedItem(ele.checked = !ele.checked))}>
                                                        {ele.checked ? "completed" : "active"}
                                                    </button>
                                                </span>
                                            </div>
                                        )
                                }) : null
                            }
                            
                            { sort === "checked" ?
                                list.map((ele) => {
                                    return (
                                        ele.checked === true && (
                                            <div className = "eachitem" key = {ele.id}>

                                                <span
                                                    ref = {inputRef}
                                                    disabled = {inputRef}>
                                                    <h3>{ele.item}</h3>
                                                    <button  onClick = {() => {
                                                        console.log("ele.id", ele.id)
                                                        console.group("ele.item", ele.item)
                                                        dispatch(editItem(ele))}}> Edit </button>
            
                                            
                                                    <button onClick = {() => {dispatch(deleteItem(ele.id))}} > Close </button>
                                                    <button type="checkbox" onClick = {() => dispatch(checkedItem(ele.checked = !ele.checked))}>
                                                        {ele.checked ? "completed" : "active"}
                                                    </button>
                                                </span>
                                            </div>
                                        )
                                    )
                                }) : null
                            }
                            { sort === "unchecked" ?
                                list.map((ele) => {
                                    return (
                                        ele.checked === false && (
                                            <div className = "eachitem" key = {ele.id}>

                                                <span
                                                    ref = {inputRef}
                                                    disabled = {inputRef}>
                                                    <h3>{ele.item}</h3>
                                                    <button  onClick = {() => {
                                                        console.log("ele.id", ele.id)
                                                        console.group("ele.item", ele.item)
                                                        dispatch(editItem(ele))}}> Edit </button>
            
                                            
                                                    <button onClick = {() => {dispatch(deleteItem(ele.id))}} > Close </button>
                                                    <button type="checkbox" onClick = {() => dispatch(checkedItem(ele.checked = !ele.checked))}>
                                                        {ele.checked ? "completed" : "active"}
                                                    </button>
                                                </span>
                                            </div>
                                        )
                                    )
                                }): null
                            }
                            
                            
                    </div>
                    
                </div>

            </div>

            <div className = "checked_btn">
                <button onClick={() => {setSort("checked")}}>Checked</button>
                <button onClick={() => {setSort("unchecked")}}>UnChecked</button>
                <button onClick={() => {setSort("all")}}>All</button>
                <button className = "remove_btn" onClick = {() => {dispatch(removeAll())}}><span>Remove All</span></button>
            </div>

            
        </>
    );
};

export default Todo; 