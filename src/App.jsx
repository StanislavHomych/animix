import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAnime } from "../store/slices/animeListSlice"
import { createGlobalStyle } from "styled-components"
import { theme } from "./styled/theme"
import Content from "./Content"

const GlobalStyles = createGlobalStyle`
  :root {
    background-color: ${(props) => props.theme.backgroundMain};
  }
`

function App() {
  const dispatch = useDispatch()
  const animeListStatus = useSelector((state) => state.anime.status)

  useEffect(() => {
    if (animeListStatus === "idle") {
      dispatch(fetchAnime())
    }
  }, [animeListStatus, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
