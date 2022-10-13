import navbarStyles from '../styles/components/mobileMenu.module.scss';

interface NavBarProps {
  mobileMenuState: boolean;
  stateChanger: (newState: string) => {};
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
