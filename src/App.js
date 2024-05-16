import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

