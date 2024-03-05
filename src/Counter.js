import React , {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice'

function Counter() {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value)

    // And include the useDispatch hook...
    const dispatch = useDispatch()

    // state for the form input that will be a user inputed amount for how much to incement or decrement the number by
    const [input, setInput] = useState(0)

    // e is the event that makes this happen
    const handleAmountBySubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }
    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={() => dispatch(increment())}>
                Increment by 1
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement by 1
            </button>
            <form onSubmit={(e)=> handleAmountBySubmit(e)}>
                <input type="number" onChange={ (e) => setInput(e.target.value)} placeholder='Enter a - or + amount'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter
