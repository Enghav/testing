import React from 'react'
import { ThemeProvider } from './themeContext'
import homePage from './homePage'

function themeChange() {
  return (
    <ThemeProvider>
        <homePage/>
    </ThemeProvider>
  )
}

export default themeChange
