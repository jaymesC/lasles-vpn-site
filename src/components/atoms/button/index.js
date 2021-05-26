import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * simple helper function for converting react component props to style component props
 * @param props
 * @return {{$shadow: (boolean|*), $variant: (string|*), $shape}}
 */
function getDefaultProps(props) {
  return {
    $shape: props.shape,
    $variant: props.variant,
    $shadow: props.shadow,
    $width: props.width,
    $fill: props.fill,
  };
}

/**
 * @description this is a plain navigation button component
 *  with custom styles located at the navigation bar for the app
 *
 * @param {object} props the props contains a children field that accepts
 * all renderable elements.
 * @return {JSX.Element}
 * @constructor
 */
export const Button = (props) => (
  <StyledButton {...getDefaultProps(props)}>{props.children}</StyledButton>
);

// button props
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  shape: PropTypes.oneOf(['rounded', 'rectangle', 'circle', 'default']),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'plain',
  ]),
  // size: PropTypes.oneOf(['small', 'large', 'medium', 'xlarge', 'compact', 'default']),
  shadow: PropTypes.bool,
  fill: PropTypes.bool,
  width: PropTypes.number,
};

Button.defaultProps = {
  shape: 'default',
  variant: 'primary',
  shadow: false,
  fill: false,
  width: 150,
};
