import { useSelector } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

import HomeConnection from '../Pages/HomeConnection';

const RouteMap = () => {
  const {loggedIn} = useSelector(state => state);
  return (
    <Routes>
      {!loggedIn && <Route path="/" element={<HomeConnection />} />}
      {loggedIn && <Route path="/" element={<Home />} />}
      <Route path="/menu" element={<Home type="Menu" />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default RouteMap;
