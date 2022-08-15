import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { defaultTheme } from './styles/default'


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
