import siiLogo from '../../../../assets/icons/SII_Logo.png';
import bouyguesLogo from '../../../../assets/icons/bouygues.png';

import { useDispatch, useSelector } from 'react-redux';
import { toggleProjectExplorer, toggleWork } from '../../../../action';
import './styles.scss';

const Work = () => {

  const { workToggled } = useSelector(state => state);

  const dispatch = useDispatch()

  const handleClickProject = () => {
    dispatch(toggleProjectExplorer());
  };
  
  const handleClickWork = () => {
    dispatch(toggleWork());
  }
  
  return (
    <section className={"work " + (workToggled && "active")} onClick={handleClickWork}>
      <div className='work__container'>
        <img src={siiLogo} alt="" className="work__container__image" />
        <h4 className="work__container__title">[2021/2022] - SII Group:</h4>
      </div>
      <div className='work__container__detail'>
        <div className='work__container__detail--subtitle'>
          <img src={bouyguesLogo} alt="" className="work__container__detail--subtitle__image" />
          <h4 className="work__container__detail--subtitle__title">Mission Bouygues Télécom</h4>
        </div>
        <p className="work__container__detail__text">
          J'ai débuté mon poste en mai 2021 en tant que développeur sur le projet de Bouygues Télécom. Je ne connaissais pas le langage Python ni l'automatisation de test en arrivant sur cette mission. Très vite, j'ai su m'adapter aux différents langages, outils et process.
        </p>
        <p className="work__container__detail__text">
          Pendant cette expérience, j'ai pris énormément confiance en moi et mes capacités. Avant cette mission, étant autodidacte et sortant d'une formation accélérée, j'avais bien conscience que mon profil n'était pas ragoutant. Pourtant, cette entreprise m'a fait confiance et n'a pas été déçue. <strong className='bold'>Je garde</strong> d'ailleurs <strong className='bold'>un très bon contact avec mon équipe, mon directeur technique, mon chef de projet et mon responsable d'agence</strong>. 
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Ils m'ont proposé de donner leurs contacts à mes futurs recruteurs</strong>. Afin de me recommander, d'attester de mes capacités et de me donner une chance de trouver un poste qui me correspond. Je suis très reconnaissant envers eux et je les remercie pour tout ce qu'ils m'ont apporté.
        </p>
        <p className="work__container__detail__text">
          Pendant cette expérience, j'ai abordé beaucoup de sujets. J'ai appris l'automatisation de test Réseaux et télécom, et j'ai créé des interfaces web afin de consulter les résultats de ces tests. Je ne peux pas montrer le fruit de mon travail ici, car ce sont des outils internes à Bouygues et je suis donc dans l'interdiction de communiquer en détail dessus.
        </p>
        <p className="work__container__detail__text">
          J'ai travaillé sur des API, sur du cœur de réseau (maquette), des bases de données type MongoDB ou MySQL, des interfaces web en html/css/js parfois sur le framework Django ou Flask. J'ai fait autant de front-end que de back-end, mais aussi de l'automatisation de test grâce au langage python, le logiciel itest et l'ordonnanceur Jenkins. La plupart des projets étaient de la maintenance ou de l'ajout de fonctionnalités. Après avoir gagner la confiance de mon équipe et des mes manager, quelques projets m'ont été confiés du début à la fin et j'ai pu les mener à bien.
        </p>
        <p className="work__container__detail__text">
          Pour finir, je tire beaucoup de positif de cette expérience. J'ai appris énormément de choses, j'ai pris confiance en moi et j'ai pu travailler avec des personnes très compétentes et très sympathiques. Je suis très reconnaissant envers cette entreprise. Mais il est temps pour moi de voguer vers de nouvelles aventures et dans un domaine qui m'a toujours plus : le développement web.
        </p>
        <p className="work__container__detail__text">
          <strong className='bold'>Technologies abordées:</strong>
        </p>
        <p className="work__container__detail__text">
          html, css, javascript, groovy script, python, tcl, gitlab, gitlab CI, django, flask, itest, jenkins, mongodb, mysql, jira, confluence, ...
        </p>
      </div>
      
    </section>
  )
};

export default Work;