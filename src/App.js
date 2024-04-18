import React from 'react';
import './styles/App.css'
import AboutPage from './app/pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from './app/pages/HomePage';


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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
