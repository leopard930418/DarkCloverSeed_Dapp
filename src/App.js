import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Menu from "./components/Menu";
import HomePage from "./pages/Home";
import MyLand from "./pages/MyLand";
import MyNFT from "./pages/MyNFT";
import MarketPlace from "./pages/MarketPlace";
import Whitepaper from "./pages/Whitepaper";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Menu/>
      <div className="route-content">
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-nft" element={<MyNFT />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/my-land" element={<MyLand />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;