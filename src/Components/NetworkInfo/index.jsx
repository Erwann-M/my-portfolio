import { useDispatch, useSelector } from 'react-redux';
import wifi from "../../assets/icons/wifi.png";
import bluetooth from "../../assets/icons/bluetooth.png";
import fly from "../../assets/icons/fly.png";
import './styles.scss';

const NetworkInfo = () => {

  const dispatch = useDispatch();

  const { networkInfoToggled } = useSelector(state => state);

  return (
  <div className={"network-info " + (networkInfoToggled && "active")}>

    <div className="network-info__content">
      <div className="network-info__content__cards-group">

        <div className="network-info__content__cards-group__card">
          <img src={wifi} alt="wifi" />
        </div>

        <div className="network-info__content__cards-group__card">
          <img src={bluetooth} alt="bluetooth" />
        </div>

        <div className="network-info__content__cards-group__card">
          <img src={fly} alt="" />
        </div>
        
      </div>
      <div className="network-info__content__sliders">

      </div>
    </div>

    <div className="network-info__battery">

    </div>
  </div>
  );
};

export default NetworkInfo;