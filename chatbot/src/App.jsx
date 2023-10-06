import Side from './component/Side'
import Home from './component/theme/homePage'
import React from 'react'
function App() {
  return (
   <div className=' h-screen flex overflow-y-hidden justify-between bg-slate-300 '>
    <Side/>
    <div>
      <Home/>
       <div>page</div>
    </div>
   </div>
  )
}

export default App