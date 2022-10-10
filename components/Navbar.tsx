import { SetStateAction } from 'react';
import styles from '../styles/components/navbar.module.scss';
import Image from 'next/image';
import ratePunkLogo from '../assets/logo.svg';
import hamburgerMenuIcon from '../assets/mobile/menu.svg';
import exitMobileIcon from '../assets/mobile/close.svg';

interface NavBarProps {
  mobileMenuState: boolean;
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
}

const NavBar = ({ mobileMenuState, stateChanger }: NavBarProps): JSX.Element => {
  const toggleMobileMenu = () => {
    if (mobileMenuState) {
      stateChanger(false);
    } else {
      stateChanger(true);
    }
  };
  const mobileView = () => {
    if (mobileMenuState) {
      return <Image src={exitMobileIcon} alt="Exit menu icon" />;
    } else {
      return <Image src={hamburgerMenuIcon} alt="Burger menu" />;
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={ratePunkLogo} alt="RatePunk logo" />
      </div>

      <ul className={styles.menu}>
        <li>Chrome extension</li>
        <li>Price comparison</li>
        <li>Blog</li>
      </ul>

      <div className={styles.hamburgerMenuIcon} onClick={() => toggleMobileMenu()}>
        {mobileView()}
      </div>
    </nav>
  );
};

export default NavBar;
