import React, { useState } from 'react';
import ToDoList from './TodoList';
const App = () => {
    const [inputList, setInputList] = useState("buy apple");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList('');
    };
    const deleteItems = (id) =>{
setItems((oldItems)=>{
    return oldItems.filter((arreteElem, index)=>{
        return index !==id;
    })
})
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder='Add A Items'
                        onChange={itemEvent}
                        value={inputList}
                    />

                    <button onClick={listofItems}> + </button>

                    <ol>
                        {/* <li>{inputList}</li> */}

                        {Items.map((itemval, index) => {
                            return <
                                ToDoList
                                text={itemval}
                                key={index}
                                onSelect={deleteItems}
                            />;
                        })}

                    </ol>
                </div>
            </div>
        </>
    )
};
export default App;