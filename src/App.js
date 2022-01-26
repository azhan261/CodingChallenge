import logo from './logo.svg';
import Home from './components/navigation/Home'
import Header from './components/navigation/Header';
import Category from './components/navigation/Category';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom' 

function App() {
  return (
    <div>
      <Header />
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
