import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './utils/theme'
import Global from './Global'
import Reset from './Reset'
import Landing from './pages/Landing'
import Nav from './components/Nav'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Reset />
        <Global />
        <Router>
          <Nav />
          <Route path="/" component={Landing} />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
