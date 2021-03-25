import './App.sass';
import HomeBody from '../HomeBody/HomeBody';
import TopBar from '../TopBar/TopBar';

const App = () => {
  return (
    <div className="app-container">
      <TopBar />
      <HomeBody />
    </div>
  );
}

export default App;
