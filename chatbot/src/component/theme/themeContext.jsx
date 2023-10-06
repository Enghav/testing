import React from 'react'
import { createContext,useContext, useState } from 'react'
const ThemeContext = createContext()
export function useTheme (){
  return useContext(ThemeContext);
}
export function ThemeProvider({Children}){
  const [theme,setTheme ]=useState(true)
  return (
    <ThemeContext.Provider value={theme}>
      {Children}
    </ThemeContext.Provider>
  )
}