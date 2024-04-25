import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './home/home';
import Login from './login/login';
import AddBlog from './AddBlogForm/AddBlogForm';
import Resources from './resources/resources';
import Rankings from './rankings/rankings';
import XboxGamesRanking from './rankings/XboxGamesRanking';
import GrandTheftAutoV from './Games/grand-theft-auto-v/grand-theft-auto-v';
import Footer from './footer/footer';
import Navbar from './Navbar/navbar';
import { UserProvider } from './UserContext';
import Fortnite from './Games/fortnite/fortnite';
import DemoForm from './Demo/Demo';
import ContactSales from './contact-sales/ContactSales';
import Contact from './contact/contact';
import Subscribe from './subscribe/subscribe';
import About from './About/About';
import PalworldReport from './resources/blog/PalworldReport';
import GameHypeGuide from './resources/GameHypeGuide';
import BlogDetails from './resources/blog/BlogDetails'; // Importez le composant pour les détails du blog

const App = () => {
  return (
    <Router>
      <div className="App">
        <UserProvider>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/about" element={<About />} />
            <Route path="/Demo" exact element={<DemoForm />} />
            <Route path="/contact-sales" exact element={<ContactSales />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/AddBlogForm" element={<AddBlog />} />
            <Route path="/Resources" element={<Resources />} />
            <Route path="/blogs/:id" element={<BlogDetails />} /> {/* Utilisez :id pour passer l'ID du blog */}
            <Route path="/Resources/GameHypeGuide" element={<GameHypeGuide />} />
            <Route path="/Resources/blog/PalworldReport" element={<PalworldReport />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/rankings/XboxGamesRanking" element={<XboxGamesRanking />} />
            <Route path="/Games/grand-theft-auto-v" element={<GrandTheftAutoV />} />
            <Route path="/Games/Fortnite" element={<Fortnite />} />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
