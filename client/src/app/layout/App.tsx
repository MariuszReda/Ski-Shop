import { useState } from "react"
import Catalog from "../../features/Catalog/Catalog";
import { createTheme, ThemeProvider, Container, CssBaseline } from "@mui/material";
import Header from "./Header";



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
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Catalog />
      </Container>
    </ThemeProvider>

  )
}

export default App
