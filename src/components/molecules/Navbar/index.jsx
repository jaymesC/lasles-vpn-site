import 'normalize.css';

import React from 'react';
import {
  StyledNavBar,
  StyledNavLinks,
  StyledLink,
  StyledSignSection,
  StyledSignLink,
} from './styles';
import Button from '../../atoms/Button';

/**
 * navbar component
 *
 * @return {JSX.Element}
 * */

const Navbar = () => (
  <>
    <StyledNavBar>
      <>
        <img src="Logo .png" alt="" />
      </>
      <StyledNavLinks>
        <StyledLink>About</StyledLink>
        <StyledLink>Features</StyledLink>
        <StyledLink>Pricing</StyledLink>
        <StyledLink>Testimonials</StyledLink>
        <StyledLink>Help</StyledLink>
      </StyledNavLinks>
      <StyledSignSection>
        <StyledSignLink>Sign In</StyledSignLink>
        <Button>Sign Up</Button>
      </StyledSignSection>
    </StyledNavBar>
  </>
);

export default Navbar;
