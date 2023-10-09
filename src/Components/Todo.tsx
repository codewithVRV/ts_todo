import TodoList from "./TodoList";
import {useState} from 'react'
function Todo () {

    const arr = [{data: "vishnu", id: 25}, {data: "neha", id: 90}]
    const [todo, setTodo] = useState(arr)
    const [inputText, setInputText] = useState("")
    function deleteTodo (id) {
        const remainingTodo = todo.filter((data) => data.id != id)
        setTodo([...remainingTodo])
    }

    function editTodo (id, newTodo) {
        const updatedTodos = todo.map((t) => {
            if(t.id == id) t.data = newTodo;
            return t;
        })
        setTodo([...updatedTodos])
    }

    return (
        <>
            <input type="text" placeholder="Enter Your Task Here" 
              value={inputText}  onChange={(e) => setInputText(e.target.value)}
            /> <br />
            <button
                onClick={() => {
                    setTodo([...todo, {data: inputText, id: (new Date()).getTime()}])
                    setInputText("")
                }}
            >Add Todo</button><hr/>

            {todo.map((d) => <TodoList key={d.id} data={d.data}
                deletee={() => deleteTodo(d.id)}
                edit={(newTodo) => editTodo(d.id, newTodo)}
            />)}
        </>
    )
}

export default Todo;