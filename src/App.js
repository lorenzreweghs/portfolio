import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <div id="aboutme" className="house-bg"></div>
    </div>
  );
}

export default App;