import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Middle from './Components/Middle';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <br/>
     <Footer/>
    </div>
  );
}

export default App;
