import 'normalize.css';

import React from 'react';
import { Link } from 'gatsby';
import { StyledNavBar, StyledNavLinks, StyledLink, StyledSignSection } from './styles';
import { Button } from '../../atoms';

/**
 * navbar component
 *
 * @return {JSX.Element}
 * */
export const DesktopNavbar = () => (
  <StyledNavBar>
    <Link
      to="/"
      style={{
        paddingTop: '8px',
      }}
    >
      <img src="Logo .png" alt="" />
    </Link>
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
      <Button shape="rounded" variant="plain">
        Sign In
      </Button>
      <Button shape="rounded" variant="secondary">
        Sign Up
      </Button>
    </StyledSignSection>
  </StyledNavBar>
);

/**
 * navbar component
 *
 * @return {JSX.Element}
 * */
export const Navbar = () => (
  <>
    <DesktopNavbar />
  </>
);
