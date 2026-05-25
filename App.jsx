import {useState} from 'react'
 const App = () => {
    const [count,setCount]= useState(0)
    function fun1(){
        setCount(count + 1)
        
    }
  return (
    <div>
    <h2>{count}
    </h2>
    <button onClick={fun1}>Click</button>
    </div>
  )
}

export default App