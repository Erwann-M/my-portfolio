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
import gitlab from "../../../../assets/icons/gitlab.png";
import jenkins from "../../../../assets/icons/jenkins.png";
import itest from "../../../../assets/icons/itest.png";
import django from "../../../../assets/icons/django.png";
import flask from "../../../../assets/icons/flask.png";
import vnc from "../../../../assets/icons/vnc.png";
import rdp from "../../../../assets/icons/rdp.png";
import virtualbox from "../../../../assets/icons/virtualbox.png";
import mongodb from "../../../../assets/icons/mongodb.png";
import mysql from "../../../../assets/icons/mysql.png";
import groovy from "../../../../assets/icons/groovy.png";
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
        <h2 className="tech__title">Technologies/Languages:</h2>
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
        
        <div className="tech__card">
          <img src={groovy} alt="" className="tech__card__image" />
          <p className="tech__card__text">Groovy script</p>
        </div>

        <h2 className="tech__title">Outils d'automatisation:</h2>
        <div className="tech__card">
          <img src={jenkins} alt="" className="tech__card__image" />
          <p className="tech__card__text">Jenkins</p>
        </div>

        <div className="tech__card">
          <img src={itest} alt="" className="tech__card__image" />
          <p className="tech__card__text">Itest</p>
        </div>

        <h2 className="tech__title">Virtualisation:</h2>
        
        <div className="tech__card">
          <img src={vnc} alt="" className="tech__card__image" />
          <p className="tech__card__text">Vnc</p>
        </div>

        <div className="tech__card">
          <img src={rdp} alt="" className="tech__card__image" />
          <p className="tech__card__text">Remote desktop connection</p>
        </div>
        
        <div className="tech__card">
          <img src={virtualbox} alt="" className="tech__card__image" />
          <p className="tech__card__text">Virtual Box</p>
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

        <div className="tech__card">
          <img src={django} alt="" className="tech__card__image" />
          <p className="tech__card__text">Django</p>
        </div>

        <div className="tech__card">
          <img src={flask} alt="" className="tech__card__image" />
          <p className="tech__card__text">Flask</p>
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

        <div className="tech__card">
          <img src={gitlab} alt="" className="tech__card__image" />
          <p className="tech__card__text">GitLab</p>
        </div>

        <h2 className="tech__title">Base de données:</h2>
        
        <div className="tech__card">
          <img src={mongodb} alt="" className="tech__card__image" />
          <p className="tech__card__text">MongoDB</p>
        </div>
        
        <div className="tech__card">
          <img src={mysql} alt="" className="tech__card__image" />
          <p className="tech__card__text">MySQL</p>
        </div>
      </div>
    </div>
  )
};

export default Tech;