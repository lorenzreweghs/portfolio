import './App.scss';
import nightSky from './assets/images/nightsky3_sky.jpg';
import trees from './assets/images/nightsky_only_trees.png';
import titleRocket from './assets/images/title-rocket.svg';
import bigRocketIcon from './assets/images/big-rocket-icon.svg';

const App = () => {
  return (
    <div className="App">
      <div className="background">
        <div className="title-rocket-div">
          <img src={titleRocket} className="title-quote" alt="quote with a rocket icon" />
          <img src={bigRocketIcon} className="big-rocket-icon" alt="big icon of a rocket" />
        </div>
        <img src={trees} className="trees" alt="silhouette of trees in front of the night sky" />
        <img src={nightSky} className="nightsky" alt="a moving night sky as the website background" />
      </div>
    </div>
  );
}

export default App;