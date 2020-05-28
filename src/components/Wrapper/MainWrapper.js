import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import {outerTheme} from 'utils/palette';
import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';

const MainWrapper = ({children}) => {
  return (
    <ThemeProvider theme={outerTheme}>
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {children}
        <footer />
      </BrowserRouter>
    </div>
    </ThemeProvider>
  )
}

export default MainWrapper;