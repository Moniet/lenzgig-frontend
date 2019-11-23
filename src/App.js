import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import ReactGA from 'react-ga'
import { theme } from './utils/theme'
import Global from './Global'
import Reset from './Reset'
import Landing from './pages/Landing'
import Nav from './components/Nav'
function App() {
  // Adding GA through npm in production mode
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY, {
      // debug: true,
      titleCase: false
    })
  }
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
