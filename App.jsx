// import {useState} from 'react'
// import Home from './Home'
// // import Home from './Home'
// import {New} from './Home'

//  const App = () => {
//   let user="ankitt"
//     const [count,setCount]= useState(0)
//     function fun1(){
//         setCount(count + 1)
        
//     }
//     function fun2(){
//       setCount(count - 1)
//     }
    

//   return (
//     <div>
//     {/* <h2>{count}
//     </h2> */}
//     {/* <button onClick={fun1}>Click + </button>
//     <button onClick={fun2}>Click-</button> */}
    
//       {/* <Home/> */}
//       <Home data={user}/>
//       <New/>
//     </div>
//   )
// // import React from 'react'
// // import Home from './Home'



//  }

// export default App




// // export default App



// import React from 'react'
// import {useState, useEffect} from 'react'
//  import'./card.css'

//  const App = () => {
//      let [ApiData,SetApiData]=   useState([])
//      let[search, SetSearch]=    useState("")
//   // let [count,SetCount]= useState(0)
//   // let [city,SetCity]=useState("Goa")
//   useEffect(()=>{
//     // console.log("hello");
//     async function call(){
//       let res= await fetch("https://dummyjson.com/products")
//       let data=      await  res.json()
//       console.log(data);
//       SetApiData(data.products)
//     }
//     call()

//   },[])
//   return (
//     <div className="main">

//   <h2>{search}</h2>
//   <>
//   <input
//     className="search-box"
//     type="text"
//     placeholder="Search Product..."
//     value={search}
//     onChange={(e)=>setSearch(e.target.value)}
//   />

//   <div className="main">
//     {ApiData.map((a)=>(
//       <div key={a.id}></div>
//     ))}
//   </div>
// </>

//   {
//     ApiData
//       .filter((a) =>
//         a.title.toLowerCase().includes(search.toLowerCase())
//       )
//       .map((a) => {
//         return (
//           <div>
//             <h1>{a.id}</h1>
//             <h5>{a.title}</h5>
//             <img src={a.thumbnail} />
//           </div>
//         )
//       })
//   }

// </div>

//     // <div>
//     // //   <h2>{count}</h2>
//     // //   <h4>{city}</h4>
//     // //   <button onClick={()=>SetCity("manali")}>change</button>
//     // //   <button onClick={()=>SetCount(count+1)}>click</button>
//     //  </div>
//   )
// }

// export default App





// import React, { useState } from 'react'

// const Taskk = () => {
//   const [search, setSearch] = useState("")
//   console.log(search);

//   async function apicall() {
//     console.log("byeyeyeyee")
//     if(!search.trim()){
//       alert("aange nii jana")
//     return;
//     }

//         let res= await fetch(`https://dummyjson.com/products/search?q=${search}`);
//             let data=      await  res.json()
//       console.log(data);
    
//   }

//   }

//   return (
//     <div>
//       <div>taskk</div>
//       <input
//         type="text"
//         value={product}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={setSearch}>Search</button>
//     </div>
//   )


// export default Taskk






// import React from 'react'
// import NavBar from './NavBar'
// import { Routes, Route } from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Task from './Task'


// function App() {
//   return (
//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/"   element={<Home/>}/>
//          <Route path="/about"   element={<About/>}/>
//           <Route path="/task"   element={<Task/>}/>
//       </Routes>
      
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Todo from './Todo'

// function App() {
//   return (
//     <div>
     
//       <Todo/>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'
// import Home from "./Home"

//main-> app-> A-> b-> C



// import NavBar from "./NavBar"

// import { Route, Routes } from "react-router-dom"
// import Cart from "./Cart"

// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App





// import { useState } from "react";
// import songs from "./Songs";


// function App() {
//   const [currentSong, setCurrentSong]=useState(null);
//   return (
//     <div>
//       <h1>Spotify Clone</h1>
//       {songs.map((song) => (
//         <div key={song.id}>
//           <h3>{song.title}</h3>
//           <p>{song.artist}</p>
//           <button onClick={()=>setCurrentSong(song)}>Play</button>
//            <audio controls>
//         <source
//           src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
//           type="audio/mpeg"
//         />
//       </audio>
//           </div>
//       ))}{currentSong && (
//         <audio
//           src={currentSong.audio}
//           controls
//           autoPlay
//         />
//       )}
//     </div>
//   );
// }


// export default App




// import React from 'react'
// import Home from "./Home"
// import UserList from "./UserList"
// import { Route, Routes } from "react-router-dom"
// import UserProfile from "./UserProfile"

// const App = () => {
//   return (
//     <div>
//       <Home/>
//      {/* http://localhost:5173/profile/0 */}
//       <Routes>
//         <Route   path="/"   element={ <UserList/>}/>
//         <Route   path="/profile/:id"   element={ <UserProfile/>}/>
//       </Routes>
//     </div>
//   )
// }
// export default App




// import React from 'react'
// import ChatBoat from './ChatBoat'

// function App() {
//   return (
//     <div>
//       <ChatBoat/>
//     </div>
//   )
// }

// export default App



import React from 'react'
import Claude from './Claude'

function App() {
  return (
    <div>
      <Claude/>
    </div>
  )
}

export default App