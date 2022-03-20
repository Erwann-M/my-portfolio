import { useDispatch, useSelector } from 'react-redux';
import wifi from "../../assets/icons/wifi.png";
import bluetooth from "../../assets/icons/bluetooth.png";
import fly from "../../assets/icons/fly.png";
import sun from "../../assets/icons/sun.png";
import battery from "../../assets/icons/battery.png";
import sound3 from "../../assets/icons/sound3.png";
import sound2 from '../../assets/icons/sound2.png';
import sound1 from '../../assets/icons/sound1.png';
import sound0 from '../../assets/icons/sound0.png';
import './styles.scss';
import { changeLuminosity, changeSound, toggleBluetooth, toggleFlyMode, toggleWifi } from '../../action';

const NetworkInfo = () => {

  const dispatch = useDispatch();

  const { networkInfoToggled, luminosityValue, soundValue, wifiToggled, bluetoothToggled } = useSelector(state => state);

  function convertLuminosityToOpacity(value) {
    switch (value) {
      case "5":
        return 1;
      case "4":
        return 0.8;
      case "3":
        return 0.6;
      case "2":
        return 0.4;
      case "1":
        return 0.2;
      default: 
        return 1;
    }
  }

  
  const soundImage = (value) => {
    switch (value) {
      case "0":
        return sound0
      case "1":
        return sound1
      case "2":
        return sound2
      case "3":
        return sound3
      default:
        return sound3
    }
  }

  const handleChangeLuminosity = (e) => {
    dispatch(changeLuminosity(e.target.value, convertLuminosityToOpacity(e.target.value)));
  }

  const handleChangeSound = (e) => {
    dispatch(changeSound(e.target.value));
  }

  const handleClickWifi = () => {
    dispatch(toggleWifi());
  }

  const handleClickBluetooth = () => {
    dispatch(toggleBluetooth());
  }

  const handleClickFlyMode = () => {
    dispatch(toggleFlyMode());
  }

  return (
  <div className={"network-info " + (networkInfoToggled && "active")}>

    <div className="network-info__content">
      <div className="network-info__content__cards-group">

        <div className={"network-info__content__cards-group__card " + (wifiToggled && "active")} onClick={handleClickWifi}>
          <img className="network-info__content__cards-group__card__image" src={wifi} alt="wifi" />
        </div>

        <div className={"network-info__content__cards-group__card " + (bluetoothToggled && "active")} onClick={handleClickBluetooth}>
          <img className="network-info__content__cards-group__card__image" src={bluetooth} alt="bluetooth" />
        </div>

        <div className="network-info__content__cards-group__card" onClick={handleClickFlyMode}>
          <img className="network-info__content__cards-group__card__image" src={fly} alt="mode avion" />
        </div>
        
      </div>
      <div className="network-info__content__sliders">

        <div className="network-info__content__sliders__item">

          <img className="network-info__content__sliders__item__image" src={sun} alt="luminosité" />

          <input className="network-info__content__sliders__item__range" type="range" id="luminosity" min="1" max="5" value={luminosityValue} onChange={handleChangeLuminosity}/>

        </div>

        <div className="network-info__content__sliders__item">

          <img className="network-info__content__sliders__item__image" src={soundImage(soundValue)} alt="" />

          <input className="network-info__content__sliders__item__range" type="range" id="luminosity" min="0" max="3" value={soundValue} onChange={handleChangeSound}/>

        </div>

      </div>
    </div>

    <div className="network-info__battery">
      <img className="network-info__battery__image" src={battery} alt="batterie" />
      <p className="network-info__battery__text">100%</p>
    </div>
  </div>
  );
};

export default NetworkInfo;