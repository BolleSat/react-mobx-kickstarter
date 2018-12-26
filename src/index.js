import React from "react";
import { render } from "react-dom";
import DataStore from './stores/DataStore';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';

const dataStore = new DataStore();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#33a07c',
      light: '#91d6bf',
      contrastText: '#ffffff',
    },
    secondary:{
      main: '#ffffff',
      contrastText: '#000000',
    },
    action:{
      disabledBackground:'#09421d'
    }
  },
});

render(
  <Provider dataStore={dataStore}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
