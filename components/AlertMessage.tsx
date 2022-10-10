import Image from 'next/image';
import checkmarkImage from '../assets/success.svg';
import styles from '../styles/components/alertMessage.module.scss';

interface alertMessageProps {
  updateEmailStatus: boolean;
  isVisible: boolean;
}

const AlertMessage = ({ updateEmailStatus, isVisible }: alertMessageProps): JSX.Element => {
  const showMessageType = () => {
    if (!isVisible) {
      // Placeholder
      return <div className={styles.messageContainer} />;
    }
    if (updateEmailStatus) {
      return (
        <div className={styles.messageContainer}>
          <div className={styles.successMessage}>
            <div className={styles.checkmark}>
              <Image src={checkmarkImage} alt="Success icon" />
            </div>
            <div>
              <p>Your email is confirmed!</p>
            </div>
          </div>
        </div>
      );
    } else if (!updateEmailStatus) {
      return (
        <div className={styles.messageContainer}>
          <div className={styles.errorMessage}>
            <p>Error State</p>
          </div>
        </div>
      );
    }
  };

  return <div>{showMessageType()}</div>;
};

export default AlertMessage;
