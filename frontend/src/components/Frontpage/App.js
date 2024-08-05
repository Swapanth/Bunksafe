import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import KeyFeatures from './KeyFeatures';
import Benefits from './Benefits';
import PricingPlans from './PricingPlans';
import FAQ from './FAQ';
import Team from './Team';
import './index.css';
// import index from '../frontend/index.css';
// import Header from './components/Header';
// import HomePage from './components/HomePage';
// import KeyFeatures from './components/KeyFeatures';
// import Benefits from './components/Benefits';
// import PricingPlans from './components/PricingPlans';
// import FAQ from './components/FAQ';
// import Team from './components/Team';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/" component={KeyFeatures} />
//         <Route path="/" component={Benefits} />
//         <Route path="/" component={PricingPlans} />
//         <Route path="/" component={FAQ} />
//         <Route path="/" component={Team} />
//         </Routes>
//     </Router>
//   );
// }
function App() {
    return (
      <div>
        <Header />
        <main>
          <section id="home"><HomePage /></section>
          <section id="features"><KeyFeatures /></section>
          <section id="benefits"><Benefits /></section>
          <section id="pricing"><PricingPlans /></section>
          <section id="faq"><FAQ /></section>
          <section id="team"><Team /></section>
        </main>
      </div>
    );
  }
  
export default App;