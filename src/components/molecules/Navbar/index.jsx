import 'normalize.css';

import React from 'react';
import { Link } from 'gatsby';
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
        <StyledLink>
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              color: '#4F5665',
            }}
          >
            About
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            to="features"
            style={{
              textDecoration: 'none',
              color: '#4F5665',
              marginRight: '30px',
            }}
          >
            Features
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            to="/pricing"
            style={{
              textDecoration: 'none',
              color: '#4F5665',
            }}
          >
            Pricing
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            to="/testimonials"
            style={{
              textDecoration: 'none',
              color: '#4F5665',
              marginRight: '30px',
            }}
          >
            Testimonials
          </Link>
        </StyledLink>
        <StyledLink>
          <Link
            to="/help"
            style={{
              textDecoration: 'none',
              color: '#4F5665',
            }}
          >
            Help
          </Link>
        </StyledLink>
      </StyledNavLinks>
      <StyledSignSection>
        <StyledSignLink>Sign In</StyledSignLink>
        <Button>Sign Up</Button>
      </StyledSignSection>
    </StyledNavBar>
  </>
);

export default Navbar;
