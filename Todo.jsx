// import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   let [index,SetIndex]=useState(null)
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(index)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;







// USE REDUCER
// import React, { useReducer } from 'react'
// const Todo = () => {
//   function reduser(state,action){
//     if(action.type=="inc"){
//       return state+1
//     }
//     return state
//   }
//   let [state,dispatch]= useReducer(reduser,0)
  

//   return (

//     <div>
//       <h2>{state}</h2>
//       <button onClick={()=>dispatch({type:"inc"})}>++</button>
//     </div>
//   )
// }

// export default Todo




// import React, { useEffect, useState } from 'react'
// import "./Todo.css"

// const Todo = () => {

//     const [task,setTask]=useState("");
//     const [todos,setTodos]=useState([])
//     let [index,SetIndex]=useState(null)

//     let add=()=>{
//         setTodos([...todos,task]);
//         setTask("");
//         // console.log(todos);
        
//     }
//     function del(){
        
//     }
//     function edit(i){
//         SetIndex(i)

//         // console.log("yes")

//     }

//   return (
//     <>
//     <div className='container'>
        
//             <h1>Todo List</h1>
        
//         <div className='input'>
//             <input 
//                 placeholder='Enter a task'
//                 type='text'
//                 value={task}
//                 name="task"
//                 onChange={(e)=>setTask(e.target.value)}


            
//             />
//             <button  onClick={add}  >{index!==null?"Update":"Add"}</button>
//         </div>
//         <div className='list'>

//             {todos.map((todo,index)=>{
//                return( <div className='item' key={index}>

//                     <span>{todo}</span>

//                     <div className='action'>
//                         <button onClick={()=>edit(index)}>Edit</button>
//                         <button onClick={del}>Delete</button>
//                     </div>

//                 </div>)
//             })}

//         </div>
//     </div>
//     </>
//   )
// }

// export default Todo

// import React from 'react'
// import { useReducer } from 'react'
// import "./Todo.css"


// const Todo = () => {

//     let [color,dispatch]=useReducer(reduser , 0)

//     // function reduser(state,action){
//     //     if(action.type=="inc"){
//     //         return state+1
//     //     }
//     //     return state
//     // }
//     function reduser(color,action){
//         if(action.type=="red"){
//             return "red"
//         }else if(action.type=="blue"){
//             return "blue"
//         }else if(action.type=="green"){
//             return "green"
//         }else if(action.type=="yellow"){
//             return "yellow"
//         }else if(action.type=="pink"){
//             return "pink"
//         }
//     }

    

//   return (
//     <div  style={{backgroundColor:color,height:"100vh",width:"100%"}}>
//         {/* <h2>{state}</h2>
//         <button onClick={()=>dispatch({type:"inc"})}>++</button> */}

//         <h1>COLOR</h1>
//         <button onClick={()=>dispatch({type:"red"})}><h2>RED</h2></button>
//         <button onClick={()=>dispatch({type:"blue"})}><h2>BLUE</h2></button>
//         <button onClick={()=>dispatch({type:"green"})}><h2>GREEN</h2></button>
//         <button onClick={()=>dispatch({type:"yellow"})}><h2>YELLOW</h2></button>
//         <button onClick={()=>dispatch({type:"pink"})}><h2>PINK</h2></button>
    
//     </div>
//   )
// }

// export default Todo


import React, { useReducer } from 'react'



function Todo() {
    let initialData = {
        input: "",
        todos: [],
        editIndex: null
    }

    function reducer(state, action) {
        if (action.type == "set_input") {
            return {
                ...state,
                input: action.payload
            }
        } else if (action.type == "add_TODO") {
            if (state.input.trim() === "") {
                return state
            }
            return {
                ...state,
                todos: [...state.todos, state.input],
                input: ""
            }
        }else if(action.type=="del"){
            return{
                ...state,
                todos:state.todos.filter((_, index) => index !==action.payload)
                
            }
        }else if(action.type=="edit"){
            return{
                ...state,
                input:state.todos[action.payload],
                editIndex:action.payload


            }
        }else if (action.type === "update") {
          const newTodos = [...state.todos];

         newTodos[state.editIndex] = state.input;

         return {
          ...state,
         todos: newTodos,
         input: "",
         editIndex: null
  };
}


    
        return state
    }

    let [state, dispatch] = useReducer(reducer, initialData)
    return (
        <div>
            <input
                value={state.input}
                onChange={(e) => dispatch({ type: "set_input", payload: e.target.value })}
            />
            <button onClick={() => dispatch({ type: state.editIndex == null ? "add_TODO" : "update" })}>
                {state.editIndex == null ? "Add" : "Update"}</button>
            
            {state.todos.map((a, index) => (
                <div key={index}>
                    <h2>{a}</h2>
                    <button onClick={() => dispatch({ type: "del",payload: index })}>Delete</button>
                    <button onClick={() => dispatch({ type: "edit",payload: index })}>Edit</button>

                </div>
            ))}
        </div>
    )
}

export default Todo