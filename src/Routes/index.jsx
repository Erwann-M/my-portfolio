import {Routes, Route} from 'react-router-dom';

import HomeConnection from '../Pages/HomeConnection';

const RouteMap = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeConnection />} />
    </Routes>
  )
}

export default RouteMap;
