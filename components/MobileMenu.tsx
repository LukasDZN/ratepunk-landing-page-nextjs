import { SetStateAction } from 'react';
import navbarStyles from '../styles/components/mobileMenu.module.scss';

interface NavBarProps {
  mobileMenuState: boolean;
  stateChanger: React.Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenuState, stateChanger }: NavBarProps): JSX.Element => {
  return (
    <>
      {mobileMenuState ? (
        <div className={navbarStyles.container}>
          <ul className={navbarStyles.menu}>
            <li>Chrome extension</li>
            <li>Price comparison</li>
            <li>Blog</li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default MobileMenu;
