import { useDispatch, useSelector } from 'react-redux';
import { toggleDefender } from '../../action';
import iconDefender from "../../assets/icons/defender.png";
import './styles.scss';

const MoreApp = () => {

  const dispatch = useDispatch();

  const handleClickDefender = () => {
    dispatch(toggleDefender())
  };

  const { navbarArrowToggled } = useSelector(state => state);

  return (
  <div className={"more-app " + (navbarArrowToggled && "active")}>
    <img title='defender' className="more-app__image" src={iconDefender} alt="" onClick={handleClickDefender} />
  </div>
  );
};

export default MoreApp;
