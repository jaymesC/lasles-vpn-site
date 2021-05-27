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
    case 'circle':
      styleObject.borderRadius = '50%';
      styleObject.height = '60px';
      break;
    default:
      styleObject.borderRadius = '10px';
  }

  return styleObject;
};

export const StyledButton = styled('button', (props) => {
  const shadowStyle = props.$shadow
    ? { boxShadow: '1px 10px 18px #f53838' }
    : {};
  const fill = props.$fill ? { width: '100%' } : {};

  return {
    fontFamily: 'Rubik',
    width: `${props.$width}px`,
    height: '45px',
    cursor: 'pointer',
    ...shadowStyle,
    ...fill,
    ...ButtonTheme.variants[props.$variant],
    ...getButtonShape(props.$shape),
  };
});
