import { useId, useState } from 'react';

import styles from '../styles/components/emailForm.module.scss';
import buttonStyles from '../styles/components/button.module.scss';

import updateLatestEmailRecord from '../api/updateLatestEmailRecord';
import isValidEmail from '../utils/isValidEmail';
import AlertMessage from './AlertMessage';

const EmailForm = (): JSX.Element => {
  const id = useId();
  const [input, setInput] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isAlertMessageVisible, setIsAlertMessageVisible] = useState(false);
  const [isUpdateEmailSuccess, setIsUpdateEmailSuccess] = useState(false);

  const updateEmail = async () => {
    if (!isValidEmail(input)) {
      setIsUpdateEmailSuccess(false);
    } else {
      setIsButtonDisabled(true);
      const wasEmailUpdated = await updateLatestEmailRecord(input);
      setIsButtonDisabled(false);

      const isSuccessful = wasEmailUpdated === 'success';
      setIsUpdateEmailSuccess(isSuccessful);

      if (isSuccessful) {
        setInput('https://ratepunk.com/referral');
      }
    }
    setIsAlertMessageVisible(true);
  };

  const [isCopiedToClipboard, SetIsCopiedToClipboard] = useState(false);
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    SetIsCopiedToClipboard(true);
  };

  return (
    <div className={styles.emailFormContainer}>
      <h1>REFER FRIENDS AND GET REWARDS</h1>
      <p className={styles.description}>
        Refer your friends to us and earn hotel booking vouchers. We&apos;ll give you 1 coin for
        each friend that installs our extension. Minimum cash-out at 20 coins.
      </p>
      <AlertMessage updateEmailStatus={isUpdateEmailSuccess} isVisible={isAlertMessageVisible} />
      <div className={styles.inputAndButtonContainer}>
        {/* Email input field */}
        <input
          id={id}
          className={`${styles.emailInputField} ${
            isUpdateEmailSuccess ? '' : styles.emailInputIcon
          }  ${isUpdateEmailSuccess ? styles.inputStyleIfSuccess : styles.inputStyleIfError}`}
          value={input}
          placeholder="Enter your email address"
          onInput={(e) => setInput((e.target as HTMLInputElement).value)}
        />
        {/* Copy referral desktop button */}
        <button
          className={`${buttonStyles.defaultButton} ${buttonStyles.copyDesktopButton} ${
            isUpdateEmailSuccess ? '' : buttonStyles.doNotRenderElement
          }`}
          onClick={() => copyToClipboard(input)}
        >
          {isCopiedToClipboard ? 'Copied ✔' : 'Copy'}
        </button>
      </div>
      {/* Copy referral mobile button */}
      <button
        className={`${buttonStyles.defaultButton} ${buttonStyles.copyMobileButton} ${
          isUpdateEmailSuccess ? '' : buttonStyles.doNotRenderElement
        }`}
        onClick={() => copyToClipboard(input)}
      >
        {isCopiedToClipboard ? 'Copied ✔' : 'Copy URL'}
      </button>
      {/* Submit button */}
      <button
        className={`${buttonStyles.defaultButton} ${buttonStyles.submitButton} ${
          isButtonDisabled ? buttonStyles.buttonSpinner : ''
        } ${isUpdateEmailSuccess ? buttonStyles.hideElement : ''}`}
        disabled={isButtonDisabled}
        onClick={updateEmail}
      >
        <span>{isButtonDisabled ? 'Loading...' : 'Get Referral Link'}</span>
      </button>
      <footer className={styles.emailFormFooter}>Limits on max rewards apply.</footer>
    </div>
  );
};

export default EmailForm;
