import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Fun1 from './Fun1.jsx'
import Cas1 from './Cas1.jsx'
import Cas2 from './Cas2.jsx'
// import {person} from './Fun1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <Fun1 />
     <Cas1 /> 
     <Cas2 />
     {/* {person}
     */}
  </React.StrictMode>
)
