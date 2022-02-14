import { useSelector } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';

import HomeConnection from '../Pages/HomeConnection';

const RouteMap = () => {
  const {loggedIn} = useSelector(state => state);
  return (
    <Routes>
      {!loggedIn && <Route path="/" element={<HomeConnection />} />}
      {loggedIn && <Route path="/" element={<Home />} />}
    </Routes>
  )
}

export default RouteMap;
