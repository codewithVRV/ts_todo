type TodoListType = {data: string}
import {useState} from 'react'

function TodoList ({data, deletee, edit}  : TodoListType) {
    const [todoData, setTodoData] = useState(data)
    const [edited, setEdited] = useState(false)
    return (
        <div>
            {(edited) ? <input  type='text' value={todoData}
                onChange={(e) => setTodoData(e.target.value)}
            /> : <h3>{data}</h3>}
            <button onClick={() => {
                deletee()
            }}>Delete</button>
            <button onClick={() => {
                setEdited(!edited)
                edit(todoData)
            }}>{(edit) ? "Edit" : "Save"}</button>
        </div>
    )
}

export default TodoList;