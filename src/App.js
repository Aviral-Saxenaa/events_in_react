import React, { useState } from 'react';

const App=()=>{

  let[mycolor,setMycolor]=useState("purple");
  let[myname,setMyname]=useState("Click me");

  const bgcolor=()=>{
    setMycolor("red");
    setMyname("noice");
  }

  const secbgcolor=()=>{
    setMycolor("purple");
    setMyname("very noice");
  }

  return(
    <>
    <div style={{backgroundColor:mycolor}}>
      <button onClick={bgcolor} onDoubleClick={secbgcolor}>{myname}</button>
    </div>
      
    </>
  )
}

export default App;