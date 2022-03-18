import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import oclock from "../../../../assets/icons/oclock.png";
import openClassRoom from "../../../../assets/icons/openclassroom.png";
import { toggleStudy } from '../../../../action';

const Study = () => {

  const { studyToggled } = useSelector(state => state);

  const dispatch = useDispatch();
  
  const handleClickStudy = () => {
    dispatch(toggleStudy());
  }
  
  return (
    <div className={"study " + (studyToggled && "active")} onClick={handleClickStudy}>

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