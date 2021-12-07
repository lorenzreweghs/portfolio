import './App.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <div id="aboutme" className="house-bg"></div>
    </div>
  );
}

export default App;