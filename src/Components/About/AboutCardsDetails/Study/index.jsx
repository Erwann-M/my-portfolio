import { useSelector } from 'react-redux';
import './styles.scss';
import oclock from "../../../../assets/icons/oclock.png";
import openClassRoom from "../../../../assets/icons/openclassroom.png";

const Study = () => {

  const { studyToggled } = useSelector(state => state);
  
  return (
    <div className={"study " + (studyToggled && "active")}>

      <div className="study__card">
        <img src={oclock} alt="" className="study__card__image" />
        <p className="study__card__text">O'clock: Développeur web et web mobile</p>
      </div>

      <div className="study__card">
        <img src={openClassRoom} alt="" className="study__card__image" />
        <p className="study__card__text">OpenClassRoom: certificat de réussite Python</p>
      </div>

      <div className="study__card">
        <img src={openClassRoom} alt="" className="study__card__image" />
        <p className="study__card__text">OpenClassRoom: certificat de réussite PHP - MySQL</p>
      </div>

      <div className="study__card">
        <img src={openClassRoom} alt="" className="study__card__image" />
        <p className="study__card__text">OpenClassRoom: certificat de réussite Comprendre le web</p>
      </div>
    </div>
  )
};

export default Study;