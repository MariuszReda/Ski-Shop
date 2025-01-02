import { useState } from "react"
import { createTheme, ThemeProvider, Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

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
  console.log('text')

  return (
  <ThemeProvider theme={themProvider}>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Outlet />
      </Container>
    </ThemeProvider>

  )
}

export default App
