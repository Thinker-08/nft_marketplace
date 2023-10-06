import './App.css';
import Home from './pages/index';
import {
  Service,
  BigNFTSlider,
  Subscribe} from './components/componentindex';
function App() {
  return (
    <div className="App">
      <Home/>
      <Service/>
      <BigNFTSlider/>
      <Subscribe/>
    </div>
  );
}

export default App;
