import React, { useEffect } from 'react'
import './Navbar.css';
import App from './App';
//  import { useRef } from 'react';
// import { useState } from "react";

  
//  export let topic = " trending ";
 
//  export function changetopic(newtopic){
//   topic=newtopic;
//  }
// GLOBAL VARIABLE SHOULD NOT BE USED FOR CHNAGING VALUES OF COMPONETS 
// AS IT DOES NOT RE-RENDER THE COMPONENT ON STATE(VALUE OF VARIABLE) CHNAGE
// INSTEAD USE '{useState}' hook to update the value of the variable and pass it as props between components.
// '{useState}' ENSURES THAT COMPONENTS ARE RE-RENDERED WHEN THE VALUE OF THE VARIABLE IS UPDATED.
//And props are passed from parent to child.
// Always try to make the data flow from parent to child



const Navbar = ({onTopicChange, Mode}) => {
  // const [topic, setTopic] = useState('trending');
  // useEffect(()=>{
  //   console.log("topic updated");
  // }

  // ,[topic])
  
  // // const navref =useRef(null);
  // // const keyref0 =useRef(null);
  // // const keyref1 =useRef(null);
  // // const keyref2 =useRef(null);
  // // const keyref3 =useRef(null);
  // // const keyref4 =useRef(null);
  // // const keyref5 =useRef(null);
  // // const keyref6 =useRef(null);
  // // const keyref7 =useRef(null);
  // // const keyref8 =useRef(null);
  
 
  // let KeyRefs=[ keyref0,keyref1,keyref2,keyref3,keyref4,keyref5,keyref6,keyref7,keyref8 ];
// "KEY REFS ARE NEEEDED WHEN YOU WANT TO ACCESS THE DOM ELEMENTS. THEY MIGHT NOT BE NECESSARILY REQUIRED FOR ADDING EVENT LISTENERS"
  // for (let i=0;i<KeyRefs.length;){
  //   (KeyRefs[i].current).add.addEventListener('click', ()=>{
  //     topic=keytopics[i]});
  // }
  //keyref is just a reference to the HTML element and it can return the current object only after HTML rendering. Before that it will create null as we passed null in useref().
 

  
    
    // console.log(keytopics);
    // const topic= (keyref.className);
    // console.log(topic);
    // console.log(keyref.current.textContent);
    // function handleClick(){
      
    // for (let i=0;i<keytopics.length;i++){
    //   keytopics[i].addEventListener('click', ()=>{
    //     console.log(keytopics[i].innerText);
    //   })
    // }

    // }
//     let handleClick=[
//     function fn0(){
// console.log(topic);
//       topic =keyref0.current.innerText
//       console.log(topic);
//     }, 
//     function fn1(){
//       console.log(topic);
//       topic =keyref1.current.innerText
//       console.log(topic);
//     },
//     function fn2(){
//       console.log(topic);
//       topic =keyref2.current.innerText
//       console.log(topic);;
//     },
//     function fn3(){
//       console.log(topic);
//       topic =keyref3.current.innerText
//       console.log(topic);
//     },
//     function fn4(){
//       console.log(topic);
//       topic =keyref4.current.innerText
//       console.log(topic);
//     }, 
//     function fn5(){
//       console.log(topic);
//       topic =keyref5.current.innerText
//       console.log(topic);
//     },
//     function fn6(){
//       console.log(topic);
//       topic =keyref6.current.innerText
//       console.log(topic);
//     },
//     function fn7(){
//       console.log(topic);
//       topic =keyref7.current.innerText
//       console.log(topic);
//     },
//     function fn8(){
//       console.log(topic);
//       topic =keyref8.current.innerText
//       console.log(topic);
//     }
  
//   ];
    // for(let i=0;i<KeyRefs.length;i++){
    //   // let fn =(handleClick+i);
     

    //   }

    let keytopics =["Tech","Sports","Politics","Trending","World","Business","Science","Health","Entertainment"];

    function handleClick(val){
      // console.log(topic);
    //  topic=val;
    //  console.log(topic);
    //  return<App>
    // App();
    onTopicChange(val);
    }
    

    

  return (
    <div  className={"navbar_"+Mode}>
    <span  onClick={()=>handleClick(keytopics[0])} className={"keyTopic_"+Mode}>{keytopics[0]}</span>
    <span  onClick={()=>handleClick(keytopics[1])} className={"keyTopic_"+Mode}>{keytopics[1]}</span>
    <span onClick={()=>handleClick(keytopics[2])} className={"keyTopic_"+Mode}>{keytopics[2]}</span>
    <span  onClick={()=>handleClick(keytopics[3])} className={"keyTopic_"+Mode}>{keytopics[3]}</span>
    <span  onClick={()=>handleClick(keytopics[4])} className={"keyTopic_"+Mode}>{keytopics[4]}</span>
    <span onClick={()=>handleClick(keytopics[5])} className={"keyTopic_"+Mode}> {keytopics[5]}</span>
    <span onClick={()=>handleClick(keytopics[6])} className={"keyTopic_"+Mode}>{keytopics[6]}</span>
    <span  onClick={()=>handleClick(keytopics[7])} className={"keyTopic_"+Mode}>{keytopics[7]}</span>
    <span  onClick={()=>handleClick(keytopics[8])} className={"keyTopic_"+Mode}>{keytopics[8]}</span>
    {/* <span ref={KeyRefs[8]} onClick={handleClick(keytopics[8])} className="keyTopic">{keytopics[8]}</span> */}
    {/* The above commented span is calling the function handle click straightaway but we need to pass the fn here so that it can be called when the span is clicked.
    The coorect format for that is ()=> fn */}
</div>

  )
  

}

export default Navbar
