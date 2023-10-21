import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Panel from "../components/panel/Panel"
import { GlobalThemeContext } from '../context/ThemeContext'
const AppRouter = () => {
  const {darkMode}=useContext(GlobalThemeContext)
  return (
    <>
   <main className={darkMode ? "dark" : "light"}>
   <BrowserRouter>
    <Panel/>
    </BrowserRouter>
   </main>
      
    </>
  )
}

export default AppRouter
