import React, { useState } from 'react'
import { useRef } from 'react';
//  import { topic } from './Navbar';
// import { changetopic, topic } from './Navbar';
import App from './App';
// import { useState } from 'react';
import logo from './images/logo.ico'
import dark_mode from './images/dark_mode.png'
import light_mode from './images/light_mode.png';
import './Header.css'


const Header = ({ onTopicChange, onModeChange , Mode}) => {
    console.log(Mode);

    const inputref = useRef(null);
    const buttonref = useRef(null);
    // let icon = dark_mode;
    const[icon, setIcon]=useState(dark_mode);
    // console.log(icon);
    function handlesearch() {
        let val = String((inputref.current).value);
        onTopicChange(val);
        // cannot change the value of variable of an another file even after exporting(it allows only access to the value).
        // Have to create a setter method for it. 
        //  let value = String((inputref.current).value);
        // changetopic(value);
        // console.log(topic);
        // //  App();
       

    }
    function handlemode(){
        onModeChange();
       if(icon==dark_mode){
        setIcon(light_mode);
    }
       else{
      setIcon(dark_mode);
       }
    }



    return (

        <div className={"header_"+Mode}>

            <span><img className="logo" src={logo} /> </span>
            <h1 className={"title_"+Mode}>The Australian Times</h1>





        
                <div className="searchbox">
                    <input ref={inputref} readOnly={false} id="input" />
                    <button onClick={handlesearch} ref={buttonref} id="searchbutton" className={"mybutton_"+Mode}>Search</button>
                </div>
                <span><img onClick={handlemode} className='icon' src={icon} /></span>

           
        </div>
    )
}

export default Header
