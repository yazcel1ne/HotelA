import { React, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteWrap from "./Pages/SiteWrap.jsx";
import { ThemeProvider } from "@mui/material/styles";
import MyTheme from "./Components/MyTheme";

function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<SiteWrap />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
