import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * @description this is a plain navigation button component
 *  with custom styles located at the navigation bar for the app
 *
 * @param {object} props the props contains a children field that accepts
 * all renderable elements.
 * @return {JSX.Element}
 * @constructor
 */
const Button = ({ children }) => (
  <>
    <StyledButton>{children}</StyledButton>
  </>
);

// Button props
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default Button;
