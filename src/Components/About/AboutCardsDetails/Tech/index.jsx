import { useDispatch, useSelector } from 'react-redux';
import bootstrap from "../../../../assets/icons/bootstrap.png";
import css from "../../../../assets/icons/css.png";
import git from "../../../../assets/icons/git.png";
import html from "../../../../assets/icons/html.png";
import js from "../../../../assets/icons/js.png";
import php from "../../../../assets/icons/php.png";
import python from "../../../../assets/icons/python.png";
import react from "../../../../assets/icons/react.png";
import sass from "../../../../assets/icons/sass.png";
import ts from "../../../../assets/icons/ts.png";
import redux from "../../../../assets/icons/redux.png";
import github from "../../../../assets/icons/github.png";
import './styles.scss';
import { toggleTech } from '../../../../action';

const Tech = () => {

  const { techToggled } = useSelector(state => state);

  const dispatch = useDispatch();
  
  const handleClickTech = () => {
    dispatch(toggleTech());
  }
  
  return (
    <div className={"tech " + (techToggled && "active")} onClick={handleClickTech}>

      <div className="tech__container-left">
        <h2 className="tech__title">Technologies:</h2>
        <div className="tech__card">
          <img src={html} alt="" className="tech__card__image" />
          <p className="tech__card__text">HTML</p>
        </div>

        <div className="tech__card">
          <img src={css} alt="" className="tech__card__image" />
          <p className="tech__card__text">CSS</p>
        </div>

        <div className="tech__card">
          <img src={sass} alt="" className="tech__card__image" />
          <p className="tech__card__text">Sass</p>
        </div>

        <div className="tech__card">
          <img src={php} alt="" className="tech__card__image" />
          <p className="tech__card__text">PHP</p>
        </div>

        <div className="tech__card">
          <img src={ts} alt="" className="tech__card__image" />
          <p className="tech__card__text">TypeScript</p>
        </div>

        <div className="tech__card">
          <img src={js} alt="" className="tech__card__image" />
          <p className="tech__card__text">JavaScript</p>
        </div>

        <div className="tech__card">
          <img src={python} alt="" className="tech__card__image" />
          <p className="tech__card__text">Python</p>
        </div>
      </div>

      <div className="tech__container__right">
        <h2 className="tech__title">Framework/librairie:</h2>
        <div className="tech__card">
          <img src={react} alt="" className="tech__card__image" />
          <p className="tech__card__text">React</p>
        </div>

        <div className="tech__card">
          <img src={redux} alt="" className="tech__card__image" />
          <p className="tech__card__text">Redux</p>
        </div>

        <div className="tech__card">
          <img src={bootstrap} alt="" className="tech__card__image" />
          <p className="tech__card__text">Bootstrap</p>
        </div>

        <h2 className="tech__title">Versionning:</h2>
        <div className="tech__card">
          <img src={git} alt="" className="tech__card__image" />
          <p className="tech__card__text">Git</p>
        </div>

        <div className="tech__card">
          <img src={github} alt="" className="tech__card__image" />
          <p className="tech__card__text">Github</p>
        </div>
      </div>
    </div>
  )
};

export default Tech;