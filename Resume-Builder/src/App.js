//import logo from './logo.svg';
//import ReactDOM from 'react-dom/client';
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Branch from './Components/Branch';
import Login from './Components/Login';
import Invoice from './Components/Invoice';
import FillInfo from './Components/FillInfo';
import ResumeBuilder from './Components/ResumeBuilder';
import GetStartResumeBuilder from './Components/GetStartResumeBuilder'
import ResumeTamplates from './Components/ResumeTamplates'
import Template2 from './Components/Template2'
import ResumeHome from './Components/ResumeHome';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
    </div>
    
    <div>
    <Routes>
      <Route path='/Home' element={<ResumeBuilder/>}/>
    
    </Routes></div>
    <div >
      <Routes>
      <Route  path="/" element={ <ResumeHome/>}/>
      <Route  path="/ResumeHome" element={ <ResumeHome/>}/>
      <Route  path="/Home" element={ <Home/>}/>
      <Route exact path="/About" element={ <About/>}/>
      <Route exact path="/Login" element={ <Login/>}/>
      <Route exact path="/Invoice" element={ <Invoice/>}/>
      
      <Route  path="/Branch" element={ <Branch/>}/>
      <Route  path="/Home/Branch" element={ <Branch/>}/>
      <Route  path="/Home/GetStartResumeBuilder" element={ <GetStartResumeBuilder/>}/>
      <Route  path="/Home/GetStartResumeBuilder/ResumeTamplates" element={ <ResumeTamplates/>}/>
      <Route  path="/Home/GetStartResumeBuilder/ResumeTamplates/FillInfo" element={ <FillInfo/>}/>
     <Route path="/Home/GetStartResumeBuilder/ResumeTamplates/Template2" element={<Template2/>} />
      </Routes>
  
  </div>
  </BrowserRouter>

  
   );
}

export default App;
//const root=ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App/>);