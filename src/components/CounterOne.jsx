import React,{useState} from 'react'
import "./intro/intro.css"


const CounterOne = () => {
    const [count,setCount] = useState(0)

    const increaseValue = () =>{
        setCount(count + 1)
    }
    const decreaseValue = () =>{
        setCount(count - 1)
    }
    return (
        <div className="left-side">
            <div className="left-wrap">
                <h2 className='welcome'>counter with placeholder </h2>
                <h1 className="site-gradient company">{count}</h1>
                <p className='group'>
                    <button onClick={increaseValue}>Increase</button>
                    <button onClick={decreaseValue}>Decrease</button>
                </p>
            </div>
        </div>
    )
}

export default CounterOne
