import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] =useState(8);
  const [numberAllowed, setNumberAllowed] =useState(true);
  const [charAllowed, setCharAllowed] =useState(false);
  const [specialAllowed, setSpecialAllowed] =useState(false);
  const [pass, setPass]=useState("");
  
  const passref=useRef();
  let num="0123456789";
  let cha="qwertyuioplkjhgfdsazxcvbnmASDFGHJKLZXCVBNMQWERTYUIOP";
  let spe="~!@@#$%%^&*(()){{}}";
  useEffect(()=>{
    let str="";
    if(numberAllowed) str +=num;
    if(specialAllowed) str +=spe;
    if(charAllowed) str +=cha;
    let passs="";
    if(length>0)
    for(let i=0; i<length; i++){
      let ind= Math.floor(Math.random()*str.length);
      passs +=str[ind];
    }
    setPass(passs);
    
    
  },[charAllowed, specialAllowed, numberAllowed, length])

  const handleCopy = () => {
    console.log({Headers});
    console.log({navigator});
    navigator.clipboard.writeText(pass);
    passref.current?.select();
    
  };

  
  return (
    <div className='flex flex-col items-center justify-center p-3 mx-20 mt-20 rounded-lg gap-y-4 bg-zinc-500'>
    <div className='flex items-center justify-center text-4xl font-bold rounded-lg bg-zinc-500' >
      Password Generator
    </div>
    <div className='overflow-hidden text-2xl rounded-lg '   >
      <input type="text" 
      className=''
      value={pass}
      ref={passref}
    readOnly
    
      />

      <button className='pr-1 bg-blue-400' onClick={handleCopy} >Copy</button>
    </div>
    <div >
      <input type="range"  
      min={3}
      value={length}
      style={{color: 'red'}}
      max={100}
      id="length"
      className="bg-black appearance-none rounded-xl"
      onChange={(e)=>{setLength(e.target.value)}}
      /> <label htmlFor='length' > length : {length}</label> 
      <input type="checkbox"  
     
      value={specialAllowed}
      id="special"
      onChange={(e)=>{setSpecialAllowed((pre)=>!pre)}}
      /> <label htmlFor='special' >Special Chars </label> 
      
      <input type="checkbox"  
      value={charAllowed}
      id="char"
      onChange={(e)=>{setCharAllowed((pre)=>!pre)}}
      /> <label htmlFor='char' >words</label> 
       <input type="checkbox"  
       defaultChecked
       id='number'
      value={numberAllowed}
      onChange={(e)=>{setNumberAllowed((pre)=>!pre)}}
      /> <label htmlFor='number' > Numbers </label> 
    </div>
    </div>
  )
}

export default App