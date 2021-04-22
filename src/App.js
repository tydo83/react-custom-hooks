import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { deepPurple } from '@material-ui/core/colors'
// import { Button } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

import Spinner from './components/Spinner/Spinner'
import MainRouter from './MainRouter'
import React from 'react'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple["A200"],
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFF5EE",
      contrastText: "black",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica Neue", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button> */}
      <React.Suspense fallback={<Spinner />}>
        <Router>
          <MainRouter />
        </Router>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
