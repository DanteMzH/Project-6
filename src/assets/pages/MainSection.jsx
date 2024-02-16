import React, { useState } from 'react'
import { Gifblock } from '../components/Gifblock'
import { Header } from '../components/Header'


export const MainSection = () => {


  const [gifBlock, setGifBlock] = useState("")

  const [input, setInput] = useState("");

  const handleInput = (e) =>{
    setInput(e.target.value);
  }

  const handleForm = (event) =>{
    event.preventDefault();
    setGifBlock(input);
    
    setInput("")
  }
  
  console.log(gifBlock);



  return (
    <>


      <Header/>

      <form onSubmit={handleForm}>
        
        <input onChange={handleInput}
        placeholder='Search category'
        type='text'
        value={input}
        
        />

      </form>
      <div className="container-fluid d-flex flex-wrap" style={{ height: '80vh' }}>
          <Gifblock props1 = {gifBlock} props2 = {setGifBlock}/>
      </div>

    </>
  )
}
