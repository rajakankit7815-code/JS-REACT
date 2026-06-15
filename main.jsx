// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'
// import {BrowserRouter} from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )






import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import C, { Context } from './Context.jsx'
import {BrowserRouter}   from 'react-router-dom'

// import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

<Context> 
  

  <BrowserRouter> 
    <App />
    </BrowserRouter>
    </Context>
    </StrictMode>
   
)
 