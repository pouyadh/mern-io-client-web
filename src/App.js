import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ContextMenuProvider } from "./containers/ContextMenu/ContextMenu";

// Pages
import Loading from "./pages/Loading/Loading";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Messenger from "./pages/Messenger/Messenger";

import { ToasterProvider } from "./containers/Toaster/Toaster";
import { AuthProvider } from "./auth";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: '"Nunito" , sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider fallback={<Loading />}>
          <ToasterProvider>
            <ContextMenuProvider>
              <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/" element={<Messenger />} />
              </Routes>
            </ContextMenuProvider>
          </ToasterProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
