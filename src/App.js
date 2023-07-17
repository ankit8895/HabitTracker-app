//import react
import React from 'react';
//import BrowserRouter, Route, Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Container component
import { Container } from 'react-bootstrap';
//import Header component
import Header from './components/Header';
//import Footer component
import Footer from './components/Footer';
//import HomePage component
import HomePage from './Pages/HomePage';
//import WeekViewPage component
import WeekViewPage from './Pages/WeekViewPage';

//create react functional component App
const App = () => {
  // this is UI structure to display
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            {/* HomePage route */}
            <Route path='/' element={<HomePage />} />
            {/* WeekViewPage route */}
            <Route path='/week-view/:id' element={<WeekViewPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

//export App
export default App;
