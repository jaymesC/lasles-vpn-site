import { styled } from 'styletron-react';
import { ButtonTheme } from '../../../themes';

const getButtonShape = ($shape) => {
  const styleObject = {};

  switch ($shape) {
    case 'rounded':
      styleObject.borderRadius = '50px';
      break;
    case 'default':
      styleObject.borderRadius = '10px';
      break;
    case 'rectangle':
      styleObject.borderRadius = '0px';
      break;
    default:
      styleObject.borderRadius = '10px';
  }

  return styleObject;
};

export const StyledButton = styled('button', (props) => {
  const shadowStyle = props.$shadow ? { boxShadow: '1px 10px 18px #f53838' } : {};

  return {
    fontFamily: 'Rubik',
    width: `${props.$width}px`,
    height: '45px',
    cursor: 'pointer',
    ...shadowStyle,
    ...ButtonTheme.variants[props.$variant],
    ...getButtonShape(props.$shape),
  };
});
