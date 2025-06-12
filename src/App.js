import './App.css';
import FirstSection from './First_section.tsx';
import useGSAP from './hooks/useGsap.tsx';
import Navbar from "./navbar.tsx";
import SecondSection from './second_section.tsx';

function App() {
  useGSAP(".integra-magna");
  return (
   <>
   <div className = "integra-magna">
    <Navbar/>
    <FirstSection/>
    <SecondSection/>
   </div>
   </>
  );
}

export default App;