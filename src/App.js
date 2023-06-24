import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/Details/DetailView";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
