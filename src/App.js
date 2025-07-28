import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";  
import Home from './pages/home/Home';

 

// Women Clothing

const App = () => {
  return (
    <Router> {/* Move the Router component here */}
      <div className="App">
        {/*Website TAB Description*/}
        <Helmet>
          <meta charSet="utf-8" />
          <title>The Jackpot | Modern Collection for Men's & Women's Clothing</title>
          <link rel="canonical" href="https://www.google.com/" />
          <meta name="description" content="© 2025 The Jackpot Inc. All Rights Reserved." />
        </Helmet>

        <Routes>
          <Route path="/" element={<Home />} />
        

        </Routes>
      </div>
    </Router>
  );
}

export default App;
