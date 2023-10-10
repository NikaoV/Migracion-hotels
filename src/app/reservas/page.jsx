import { ReservationTemplate } from "../../../components/template/reservation-template/ReservationTemplate";
import styles from "./page.module.css";
const Reservation = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}> Reservas </h2>
      <ReservationTemplate />
    </div>
  );
};
export default Reservation;
