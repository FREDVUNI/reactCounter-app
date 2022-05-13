import React,{useState} from 'react'
import "./intro/intro.css"

const CounterTwo = () => {
    const [countInput,setCountInput] = useState(0)

    const increaseInputValue = () =>{
        setCountInput(countInput + 1)
    }

    const decreaseInputValue = () =>{
        setCountInput(countInput - 1)
    }

    const changeValue = (e) =>{
        let inputValue = parseInt(e.target.value)
        setCountInput(inputValue)
    }
    return (
        <div className="right-side">
            <h2 className='welcome'>counter with input </h2>
                <input type="number" value={countInput} onChange={changeValue} placeholder="Enter the number value"/>
                <p className='group'>
                    <button onClick={increaseInputValue}>Increase</button>
                    <button onClick={decreaseInputValue}>Decrease</button>
                </p>
        </div>
    )
}

export default CounterTwo
