
import './App.css';
import Main from './component/main';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Second from './component/second';
function App() {
  return (
    <Router>
      <Routes>

      <Route path='/' element={<Main/>}/>
      <Route path='/1' element={<Second/>}/>
      
      </Routes>
    </Router>
  
  );
}

export default App;
