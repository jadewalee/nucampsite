import { Routes, Route } from 'react-router-dom';
import ContactPage from './app/pages/ContactPage';
import HomePage from './app/pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './app/pages/campsitesDirectoryPage';
import CampsiteDetailPage from './app/pages/CampsiteDetailPage';
import '../src/styles/App.css';
import AboutPage from './app/pages/AboutPage';


function App() {
  return (
    <div className='App'>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
        <Route path='about' element={<AboutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;



// import './styles/App.css'
// import Header from './components/Header';
// import Footer from './components/Footer';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";
// import HomePage from './app/pages/HomePage';
// import Directory from './app/pages/Directory';
// import AboutPage from './app/pages/AboutPage';
// import ContactPage from './app/pages/ContactPage';


// function App() {
//   return (
//     <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path='/HomePage'
//             element={<HomePage />}>
//           </Route>
//           <Route
//             path="/AboutPage"
//             element={<AboutPage />}
//           ></Route>
//           <Route
//             path="/Directory"
//             element={<Directory />}
//           ></Route>
//           <Route
//             path="/ContactPage"
//             element={<ContactPage />}
//           ></Route>
//         </Routes>
//         <Footer />
//     </div>
//   );
// }

// export default App;
