import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bio, Portfolio, Contact, Resume } from "./components/Main";

function App() {
  const [currentPage, setCurrentPage] = useState("React-Bio");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/React-Bio" element={<Bio />} />
          <Route path="/My-React-Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
