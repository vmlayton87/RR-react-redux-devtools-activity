import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToList, clearList } from './features/todoSlice'

function HandleTodoList () {
    // Call useSelector to grab the current value of our state variable from the store, and assign it to a variable named "toDoList"
    const toDoList = useSelector((state) => state.todoList.toDoItems)

    // And include the useDispatch hook...
    const dispatch = useDispatch()

    // state for the form input that will be a user inputed string
    const [input, setInput] = useState('')

    function handleAddToList (e) {
        e.preventDefault()
        dispatch(addToList(String(input)))
    }

    function renderList () {
        
            return(
                <ul>
                    {toDoList.map((item, index) => (
                        <li key={index}>{item.text}</li>
                        ) 
                    )}
                </ul>
            )
        }
    

    return (
        <div>
            {renderList()}
            
            <form onSubmit={(e)=> handleAddToList(e)}>
                <input type="text" onChange={ (e) => setInput(e.target.value)} placeholder='Enter a to do item'/>
                <button type="submit">Add To Do Item</button>
            </form>
            <button onClick={() => dispatch(clearList())}>Clear Whole List</button>
        </div>
    )
}
export default HandleTodoList