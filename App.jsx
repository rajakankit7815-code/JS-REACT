import {useState} from 'react'
import Home from './Home'
// import Home from './Home'
import {New} from './Home'

 const App = () => {
  let user="ankitt"
    const [count,setCount]= useState(0)
    function fun1(){
        setCount(count + 1)
        
    }
    function fun2(){
      setCount(count - 1)
    }
    

  return (
    <div>
    {/* <h2>{count}
    </h2> */}
    {/* <button onClick={fun1}>Click + </button>
    <button onClick={fun2}>Click-</button> */}
    
      {/* <Home/> */}
      <Home data={user}/>
      <New/>
    </div>
  )
// import React from 'react'
// import Home from './Home'



 }

export default App




// export default App