import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroContent from './components/IntroContent';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import About from './pages/About';

const ChatBot = () => {
  return(
    <div className='chat_bot'>
      <span>Chat</span>
    </div>
  )
}

const navOptions = ["Home", "About", "Services", "Work", "Contact"]

function App() {
  return (
    <Router>
      <div className="content">
        <NavBar/>
        <Routes>
        <Route path="/" element={<IntroContent/> }/>
        <Route path="/About" element={<About/> }/>
        {/* <ChatBot/> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
