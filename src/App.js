import React from 'react';
import './styles/App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from './app/pages/HomePage';
import Directory from './app/pages/Directory';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
          path='/HomePage'
          element={<HomePage />}>
          </Route>
          <Route
            path="/AboutPage"
            element={<AboutPage />}
          ></Route>
          <Route
            path="/Directory"
            element={<Directory />}
          ></Route>
           <Route
            path="/ContactPage"
            element={<ContactPage />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
