import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroContent from './components/IntroContent';
import Loading from './components/Loading';
import NavBar from './components/NavBar';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import Contact from './pages/Contact';

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
        <Route path="/Services" element={<Services/> }/>
        <Route path="/Work" element={<Work/> }/>
        <Route path="/Contact" element={<Contact/> }/>
        {/* <ChatBot/> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;
