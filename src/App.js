import './App.css';
import IntroContent from './components/IntroContent';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

const ChatBot = () => {
  return(
    <div className='chat_bot'>
      <span>Chat</span>
    </div>
  )
}

function App() {
  return (
    <div className="content">
      <NavBar/>
      <IntroContent/> 
      {/* <ChatBot/> */}
    </div>
  )
}

export default App;
