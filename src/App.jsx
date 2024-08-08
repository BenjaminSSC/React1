import React from 'react';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

