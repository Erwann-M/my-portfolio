/*==================================================================*|
|*----------------HomePage of "connected" user----------------------*|
|*==================================================================*/

import './styles.scss';
// local component ----------------------------------
import Navbar from '../../Components/Navbar';

const Home = (props={}) => (
  <div className="home">
    <Navbar />
  </div>
);

export default Home;
