import React from 'react';
import './App.css';
import { CAMPSITES } from './app/shared/CAMPSITES';
import Header from './components/Header';
import CampsiteList from './features/campsites/CampsiteList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <CampsiteList />
      <Footer />
    </div>
  );
}

export default App;
