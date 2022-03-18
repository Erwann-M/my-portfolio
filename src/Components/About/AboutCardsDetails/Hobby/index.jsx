import { useSelector } from 'react-redux';
import './styles.scss';

const Hobby = () => {

  const { hobbyToggled } = useSelector(state => state);
  
  return (
    <div className={"hobby " + (hobbyToggled && "active")}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nam autem. Earum, veniam distinctio veritatis optio aliquid debitis omnis laboriosam? Eos beatae saepe aut, quisquam aliquam quaerat. Hic, id cumque.
    </div>
  )
};

export default Hobby;