import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Topbody from './components/Topbody';
import MidBody from './components/MidBody';
import Gallary from './components/Gallary';
import Lastbody from './components/Lastbody';
import Footer from './components/Footer';
import Product from './components/Product';
import Payment from './components/Payment';
import About from './components/About';
import Contact from './components/Contact';
import Thankyou from './components/Thankyou';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<>
          <Navbar />
          <Topbody />
          <MidBody />
          <Gallary />
          <Lastbody />
          <Footer />
        </>}></Route>


        <Route exact path="/product" element={
          <>
            <Navbar />
            <Product />
            <Footer />

          </>
        } ></Route>

        <Route exact path="/payment" element={
          <>
            <Navbar />
            <Payment />
            <Footer />

          </>
        } ></Route>

      <Route exact path="/about" element={<>
          <Navbar />
          
          <About/>
          <Gallary />
          <Lastbody />
          <Footer />
        </>}></Route>

        <Route exact path="/contact" element={<>
          <Navbar />
          
          <Contact/>
          <Gallary />
          <Lastbody />
          <Footer />
        </>}></Route>

        <Route exact path="/thankyou" element={<>
          <Navbar />          
          <Thankyou/>
          <Gallary />
          <Lastbody />
          <Footer />
        </>}></Route>


      </Routes>
    </Router>


  );
}

export default App;
