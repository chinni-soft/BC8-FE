import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./utils/theme";
import TestRedux from "./components/organisms/TestRedux";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./pages/HomePage/HomePage";
import Authentication from "./components/organisms/Authentication/Authentication";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <TestRedux/> */}
        <Authentication>
          <HomePage />
        </Authentication>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
