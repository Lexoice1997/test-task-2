import { useNavigate } from 'react-router-dom';
import { CREATE_APARTMENT_PAGE } from '../../helpers/constants/routeConst';
import styles from './Main.module.css';

function Main() {
  const navigate = useNavigate();
  const handleNavigateToApartment = () => {
    navigate(`${CREATE_APARTMENT_PAGE}`);
  };
  return (
    <div className={styles.main}>
      <h2>Turar-joy majmuasi qo’shish</h2>
      <div className={styles.add} onClick={handleNavigateToApartment}>
        + Yangi yoratish
      </div>
    </div>
  );
}

export default Main;
