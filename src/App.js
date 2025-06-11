import './App.css';
import FirstSection from './First_section.tsx';
import useGSAP from './hooks/useGsap.tsx';
import Navbar from "./navbar.tsx";

function App() {
  useGSAP(".integra-magna");
  return (
   <>
   <div className = "integra-magna">
    <Navbar/>
    <FirstSection/>
   </div>
   </>
  );
}

export default App;
