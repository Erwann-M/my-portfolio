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
        Dès les premières lignes de codes, j'ai su que j'avais enfin trouvé mon "truc", MA forme d'expression. C'est à partir de là que j'ai décidé que j'en ferais mon métier, peu importe ce que cela me coûtera.
      </p>

      <p className='about-me__content'>
        D'abord autodidacte, j'ai appris le python, le html, le css et le PHP. Puis je me suis lancé (en juillet 2021) dans une formation de développeur web et web mobile chez O'clock. Le cursus général était le html/css/php/javascript suivit d'une spécialisation en React.
      </p>

      <p className='about-me__content'>
        J'ai pu apprendre, lors de cette formation, la technique bien sûr, mais aussi le savoir être en entreprise et comment travailler en équipe. On nous a appris à apprendre et ça, c'est le plus beau cadeau du monde!
      </p>

      <p className='about-me__content'>
        Ma formation c'est terminé en décembre 2021. J'avais à cette époque envie de découvrir et d'habiter dans une nouvelle région. Mon regard c'est porté sur les Côtes d'Armor. J'ai donc décidé de m'y installer en mars 2022. Très vite, j'ai trouvé mon premier emploi de développeur. J'ai commencé en mai 2022 chez SII Group à Lannion. Sur un projet de création de campagne de test pour les réseaux internet et télécoms. 
      </p>

      <p className='about-me__content'>
        Pour cette mission, j'ai dû apprendre de nouveaux langages et frameworks (Python, Django, Flask, Tcl, Groovy Script, Bash, etc.) ainsi que divers outils (Jenkins, Itest, Jira, virtualisation, MongoDB). Ces technologies m'étaient totalement inconnues, mais je les ai rapidement maîtrisées, et en un mois, j’étais déjà autonome. 
      </p>

      <p className='about-me__content'>
        Cette expérience m'a beaucoup apporté. Pendant cette période, j'ai pu me rendre compte de mes compétences, prendre confiance en moi, mes capacités techniques, d'apprentissage et relationnelles. J'ai rapidement été à l'aise malgré le fait que le projet ne me correspondais pas.
      </p>

      <p className='about-me__content'>
        En Novembre 2023, j'ai démissionné. Pour suivre ma conjointe dans une nouvelle région pour un nouveau projet proffessionnel. En janvier 2024, nous nous sommes séparé. Pour prendre du recul sur cette situation, j'ai décidé de partir en voyage en sac à dos. Je me suis rapidement arrêter en Haute Savoie, à Faverges. Ou j'ai retrouver mes amis. J'ai trouver un appartement en Septembre 2024.
      </p>

      <p className='about-me__content'>
        Aujourd'hui, je suis bien implanter en Haute Savoie, et je compte y rester. C'est pourquoi, je souhaite retrouver un emploi afin de poursuivre ma carrière. Mais cette fois dans LE domaine qui me plait vraiment : Le developpement Web. Je suis autant attiré par le front-end, pour l’aspect esthétique et la conception d’interfaces fluides et intuitives, que par le back-end, pour son approche de robustesse et de sécurité.
      </p>

      <p className='about-me__content'>
        Cependant, je suis conscient que mon profil actuel n’attire pas suffisamment les recruteurs et que j’ai des difficultés à trouver un emploi dans ce qui me passionne vraiment. C’est pour cette raison que j’ai décidé de prendre les choses en main en me lançant dans une alternance. J’ai choisi OpenClassrooms pour sa flexibilité, qui me permet de conjuguer théorie et pratique.
      </p>

      <p className='about-me__content'>
        Ce qui m’intéresse surtout, c’est de prendre de l’expérience afin d’avoir un profil plus attractif et solide. Et pourquoi pas, continuer en CDI dans l’entreprise qui m’aura accueilli pour mon alternance. Le rythme est idéal : quatre jours en entreprise et un jour en formation, ce qui me permet d’être pleinement investi dans les projets.
      </p>

      <p className='about-me__content'>
        Je suis particulièrement intéressé par React et Node.js, deux technologies que j’apprécie énormément pour leur efficacité et leur flexibilité. D’ailleurs, le cursus de ma formation se concentre sur ces deux technologies, ce qui me permet de renforcer mes compétences tout en travaillant sur des projets concrets.
      </p>

      <p className='about-me__content'>
        Cela dit, je reste ouvert à découvrir d’autres technologies dans le domaine du web, car chacune a ses avantages et ses inconvénients en fonction du contexte d’utilisation. J’aime toujours apprendre de nouvelles choses, alors je ne suis pas fermé à d’autres langages ou frameworks.
      </p>

      <p className='about-me__content'>
        Pour moi, le métier de développeur, ce n’est pas seulement de maîtriser une technologie, mais surtout de trouver des solutions aux problèmes. C’est d’apprendre en continu pour produire un code propre, optimisé et maintenable, tout en sachant rechercher rapidement les informations nécessaires pour répondre au mieux aux attentes du client.
      </p>

      <p className='about-me__content'>
        Alors, si vous cherchez un jeune développeur ultra motivé, avec une grande capacité d’apprentissage et d’adaptation, et si vous êtes prêt à prendre le pari de me donner ma chance, je suis convaincu que ce sera une excellente décision sur le long terme. C’est souvent en osant prendre des risques que l’on vit les expériences les plus enrichissantes.
      </p>

      <p className='about-me__content'>
        Voilà ! C'était un peu long, mais maintenant vous me connaissez un peu mieux.
      </p>
    </section>
  )
};

export default AboutMe;
