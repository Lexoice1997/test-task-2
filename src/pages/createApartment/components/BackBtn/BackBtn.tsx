import ArrowLeft from '../../../../assets/ArrowLeft.png';
import styles from './BackBtn.module.css';

function BackBtn() {
  return (
    <div className={styles.back}>
      <img src={ArrowLeft} alt="arrow" /> “Turar-joy majmualari” ga qaytish Market Active Bids
    </div>
  );
}

export default BackBtn;
