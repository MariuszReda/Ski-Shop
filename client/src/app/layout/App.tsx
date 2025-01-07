import { useState } from "react"
import { createTheme, ThemeProvider, Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const paletteType = darkMode? 'dark': 'light';

  const themProvider = createTheme(
    {    palette:{
        mode:paletteType,
        background: {
          default: paletteType === "light" ? '#eaeaea' : '#121212'
        }
    }}
  )

  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (
  <ThemeProvider theme={themProvider}>
    <ToastContainer position="top-right" autoClose={false} theme="colored"/>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Outlet />
      </Container>
    </ThemeProvider>

  )
}

export default App
