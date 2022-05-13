import React from 'react'
import './intro/intro.css'

const Home = () =>{
    return(
        <div className='start'>
            <div className="start-left-side">
                <div className="start-left-wrap">
                    <h2 className='welcome'>Hello, welcome to </h2>
                    <h1 className="site-gradient company">xyz Company</h1>
                    <p className='group'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
            <div className="start-right-side">
                <div className="startright-wrap">
                    <img src={'../../svg/about.svg'} alt="intro" className="company-image"/>
                </div>
            </div>
        </div>
    )
}

 export default Home