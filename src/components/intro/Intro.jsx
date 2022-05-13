import React from 'react'
import NavBar from '../NavBar'
import CounterTwo from '../CounterTwo'
import CounterOne from '../CounterOne'
import Home from '../Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const Intro = () => {
    return (
        <>
        <Router>
            <NavBar/>
            <div className='intro'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/counter-one' element={<CounterOne/>}/>
                    <Route path='/counter-two' element={<CounterTwo/>}/>
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default Intro
