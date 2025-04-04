import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExecrciesDetail from "./pages/ExecrciesDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" }, m: "auto" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExecrciesDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
