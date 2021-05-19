import React from 'react'
import PropTypes from 'prop-types';
import { StyledButton } from "./styles"
import 'normalize.css';


/**
 * @description this is a plain button component with custom styles for the app
 *
 * @param {object} props the props contains a children field that accepts
 * all renderable elements.
 * @return {JSX.Element}
 * @constructor
 */


const Button = (props) => {



  return (
    <>
    <StyledButton>{props.children}</StyledButton>
    </>
  );
};

// Button props
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node),
     PropTypes.node]).isRequired,
};

export default Button;