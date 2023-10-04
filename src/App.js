import "../src/dist/styles.css";
// import ".src/LoginPage.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes, } from "react-router-dom";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
// import BookCar from "./components/BookCar";
import Book from "./Pages/Book";
import LoginPage from "./Pages/LoginPage";
import Error from "./Pages/Error";
import Register from "./Pages/Register";
function App() {
  return (
    <>
      
        {/* <Navbar /> */}
        <Routes>
          <Route index path="/" element={<Register />} />
          <Route index path="/home" element={<Home />} />
          <Route index path="/login" element={<LoginPage />} />

          <Route path="models" element={<Models />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="bookcar" element={<Book />} />
          <Route path="*" element={<Error />} />
        </Routes>
        
        
        {/* <Route path="login" element={<LoginPage/>} /> */}

      
    </>
  );
}

export default App;
