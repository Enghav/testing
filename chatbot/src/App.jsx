import Side from './component/Side'
import Home from './component/homePage'
import React from 'react'
import { useState } from 'react';
function App() {
  
  const [open, setOpen] = useState(true);
  return (
   <div className=' h-screen flex overflow-y-hidden justify-between bg-slate-300 '>
    <Side/>
     {/* <Logout/> */}
    <div>
      {/* <Home/> */}
       <div>page</div>
    </div>
   </div>
  )
}

export default App