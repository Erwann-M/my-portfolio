import './App.scss';
import RouteMap from "../../Routes";
import { useSelector } from 'react-redux';

function App() {

  const { luminosity } = useSelector(state => state);

  let style = {
    filter: `brightness(${luminosity})`,
    'backdrop-filter': `brightness(${luminosity})`,
  }

  return (
    <div className="App" style={style}>
      <RouteMap />
    </div>
  );
}

export default App;
