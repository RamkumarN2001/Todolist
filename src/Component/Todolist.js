import { useState } from "react"
import "./Todolist.css"
function Todo_list() {

    const [list, setlist] = useState([{ id: 1, activity: "Apple" }, { id: 2, activity: "Orange" }])
    const [newitem, setnewitem] = useState("")

    function handledelete(removeid) {

        var temparr = list.filter(function (item) {

            if (item.id == removeid) {
                return false
            }
            else {
                return true
            }

        })

        setlist(temparr)


    }

    function handlechange(evt) {
        setnewitem(evt.target.value)
    }
    function addnew() {
        setlist([...list, { id: list.length + 1, activity: newitem }])
        setnewitem("")
    }




    return (
        <div className="todo-container">
            <h1 className="todo-title">📝 Todo List</h1>
            <div className="todo-input-section">
                <input
                    className="todo-input"
                    value={newitem}
                    onChange={handlechange}
                    placeholder="Enter a new task"
                />
                <button className="todo-add-btn" onClick={addnew}>Add</button>
            </div>
            <ul className="todo-list">
                {list.map(item => (
                    <li key={item.id} className="todo-item">
                        <span>{item.activity}</span>
                        <button
                            className="todo-delete-btn"
                            onClick={() => handledelete(item.id)}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todo_list