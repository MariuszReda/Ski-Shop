import { useEffect, useState } from "react"
import { Product } from "../models/Product";
import Catalog from "../../features/Catalog/Catalog";
import { createTheme, ThemeProvider, Typography ,Container, CssBaseline } from "@mui/material";
import Header from "./Header";



function App() {

  const [darkMode, setDarkMode] = useState(false)

  const paletteType = darkMode? 'dark': 'light';

  const themProvider = createTheme(
    {    palette:{
        mode:paletteType
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
