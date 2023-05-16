import { useDispatch, useSelector } from 'react-redux';
import { toggleAboutMe } from '../../../../action';
import './styles.scss';

const AboutMe = () => {

  const { aboutMeToggled } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleClickAboutMe = () => {
    dispatch(toggleAboutMe());
  }

  return (
    <section className={"about-me " + (aboutMeToggled && "active")} onClick={handleClickAboutMe}>
      <p className='about-me__content'>
        Bonjour, moi, c'est <strong>Erwann</strong>.
      </p>

      <p className='about-me__content'>
        Je suis passionné par le développement et de façon générale par tout ce qui touche à la tech.
      </p>

      <p className='about-me__content'>
        Je suis très curieux ce qui fait que j'ai beaucoup (trop ?) de passions.
      </p>

      <p className='about-me__content'>
        J'ai beaucoup voyagé, car avant de me sédentariser en mars 2022, j'ai parcouru les routes de France et d'Europe pendant 5 ans. Je vivais en camping-car et j'allais là oú la curiosité et les rencontres m'emmenaient. Je suis de ce fait très sociable. J'aime aider les autres et partager avec eux.
      </p>

      <p className='about-me__content'>
        J'ai fait beaucoup de petits boulots : ouvrier d'usine, magicien, cracheur de feu, facteur, ouvrier de centre équestre, saisonnier, gérant de camping et j'ai même fait gardien de troupeau de vache... Mais tout ça sans jamais vraiment trouver ma "place".
      </p>

      <p className='about-me__content'>
        Pour ce qui est du développement, j'ai toujours été attiré par ce domaine, mais pensant que c'était trop compliqué pour moi, je ne m'y suis jamais penché. En 2019, j'ai trouvé un ordinateur cassé que j'ai réparé. J'ai installé Linux dessus et décidé de franchir le pas.
      </p>

      <p className='about-me__content'>
        J'ai commencé par apprendre le python, car j'ai lu quelque part que c'était facile à apprendre pour un début. Et là, ça a été le déclic ! Je n'ai pas beaucoup dormi pendant cette période...
      </p>

      <p className='about-me__content'>
        Dès les premières lignes de codes, j'ai su que j'avais enfin trouvé mon "truc". C'est à partir de là que j'ai décidé que j'en ferais mon métier.
      </p>

      <p className='about-me__content'>
        D'abord autodidacte, j'ai appris le python, le html, le css et le PHP. Puis je me suis lancé (en juillet 2021) dans une formation de développeur web et web mobile chez O'clock. Le cursus général était le html/css/php/javascript et une spécialisation en React pendant 1 mois.
      </p>

      <p className='about-me__content'>
        J'ai pu apprendre, lors de cette formation, la technique bien sûr, mais aussi le savoir être en entreprise et comment travailler en équipe. On nous a appris à apprendre et ça, c'est le plus beau cadeau du monde!
      </p>

      <p className='about-me__content'>
        Ma formation c'est terminé en décembre 2021. J'avais à cette époque envie de découvrir et d'habiter dans une nouvelle région. Mon regard c'est porté sur les Côtes d'Armor. J'ai donc décidé de m'y installer en mars 2022. Très vite, j'ai trouvé mon premier emploi de développeur. J'ai commencé en mai 2022 chez SII Group à Lannion. J'y suis d'ailleurs toujours en poste.
      </p>

      <p className='about-me__content'>
        Cette expérience m'a beaucoup apporté. Pendant cette période, j'ai pu me rendre compte de mes compétences, prendre confiance en moi, mes capacités techniques et relationnelles. J'ai rapidement été à l'aise malgré le fait que la stack technique ne me correspondais pas.
      </p>

      <p className='about-me__content'>
        Aujourd'hui, après une grosse remise en question, je me rends compte que ma région de cœur me manque énormément. C'est pourquoi je souhaite revenir en Haute-Savoie, et plus particulièrement dans la région d'Annecy, ou j'ai tous mes amis et un peu de famille.
      </p>

      <p className='about-me__content'>
        Je suis donc à la recherche d'un emploi dans cette région. Je suis ouvert à toutes propositions, j'ai une très grosse appétence pour le front-end, mais je sais m'adapter et j'aime apprendre de nouvelles choses.
      </p>

      <p className='about-me__content'>
        Voilà ! C'était un peu long, mais maintenant vous me connaissez un peu mieux.
      </p>
    </section>
  )
};

export default AboutMe;
