
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  return (
    <>
    {/* {<Navbar title = "Learnngharry" aboutText = "About"/>} */}
    {/* {<Navbar/>} */}
    <Navbar title = "Learnngharry"/>
    <div className="container">
    <TextForm heading = "Entet the text to analyze below"/>
    </div>
    
    </>
  );
}

export default App;
