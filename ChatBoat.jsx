import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import "./carder.css"

function ChatBoat() {
    let [searchData,SetSearchData]=useState('')
    let genAI= new GoogleGenerativeAI("")
    async function search() {
        try{
            let model= genAI.getGenerativeModel({
                model:"gemini-2.5-flash"
            })
            let res= await model.generateContent(searchData)
            console.log(res.response.text());
        }catch(er){
            console.log(er);
        }
        
    }
  return (
    <div className='container'>
        <div className='box'>
        <h1>AI</h1>
        <div className='main'>
        <input onChange={(e)=>SetSearchData(e.target.value)}/>
            <button onClick={search}>Search</button>
            </div>
            </div>
        
            

    </div>
  )
}

export default ChatBoat


