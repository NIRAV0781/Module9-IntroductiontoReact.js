import logo from './logo.svg';
import './App.css';
import Introductiontoreact from './Introductiontoreact';
import JsxJavascriptXml from './JsxJavascriptXml';
import Greeting from './Greeting';
import Welcomemassage from './Welcomemassage';
import UserCard from './UserCard';
import Counter from './Counter';

function App() {
  return (
   <>
   <Introductiontoreact/>
   <JsxJavascriptXml/>
   <Greeting name="Nirav"/>
   <Welcomemassage/>
   <UserCard name="Nirav" age="21" location="Ahmedabad"/>
   <Counter/>
   </> 
  )
}

export default App;
