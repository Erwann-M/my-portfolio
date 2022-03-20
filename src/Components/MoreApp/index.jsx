import { useDispatch, useSelector } from 'react-redux';
import { toggleDefender } from '../../action';
import iconDefender from "../../assets/icons/defender.png";
import bluetoothIcon from "../../assets/icons/bluetooth-icon.png";
import './styles.scss';

const MoreApp = () => {

  const dispatch = useDispatch();

  const handleClickDefender = () => {
    dispatch(toggleDefender())
  };

  const { navbarArrowToggled, bluetoothToggled } = useSelector(state => state);

  return (
  <div className={"more-app " + (navbarArrowToggled && "active")}>
    <img title='defender' className="more-app__image" src={iconDefender} alt="anti-virus" onClick={handleClickDefender} />
    {bluetoothToggled && <img title='bluetooth' className="more-app__image" src={bluetoothIcon} alt="bluetooth" />}
  </div>
  );
};

export default MoreApp;
