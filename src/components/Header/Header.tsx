import { Buttons, HamburgerIcon, HeaderContainer, LeftContainer, PulsingButton, RightContainer } from './Header.styles';
import { Navbar } from '@components/Header/Navbar/Navbar';
import { useCallback, useContext } from 'react';
import { HamburgerMenu } from '@components/Header/HamburgerMenu/HamburgerMenu';
import { Action, HeaderContext } from '@contexts/HeaderContext';
import Link from 'next/link';
import Img from 'next/image';
import { Button } from '@components/Button/Button';

const Header = () => {
  const { state, dispatch } = useContext(HeaderContext);

  const toggleMenu = useCallback(() => {
    if (state.isSelectedDropdown) {
      dispatch({
        type: Action.SET_ISSELECTEDDROPDOWN,
        payload: false
      });
    } else {
      dispatch({
        type: Action.TOGGLE_ISHIDDENHAMBURGERMENU
      });
    }
  }, [state.isSelectedDropdown, dispatch]);

  return (
    <HeaderContainer isScroll={state.isScroll}>
      <LeftContainer isScroll={state.isScroll}>
        <Link href="/" passHref>
          <Img src="/assets/logo.svg" alt="" width="235px" height="79px" className="animated" />
        </Link>
      </LeftContainer>
      <RightContainer>
        {state.isHamburger ? (
          <>
            <HamburgerIcon onClick={toggleMenu} isClosed={state.isSelectedDropdown} />
            <HamburgerMenu />
          </>
        ) : (
          <>
            <Navbar />
            <Buttons>
              <Button as="a" href="tel:+48515782627" sup="NEW" bgColor="104, 188, 235" className="pulsingLightBlue">
                Umów teleporadę
              </Button>
              <Link href="/deklaracja" passHref>
                <Button as="a">Złóż deklarację</Button>
              </Link>
            </Buttons>
          </>
        )}
      </RightContainer>
    </HeaderContainer>
  );
};

export { Header };
