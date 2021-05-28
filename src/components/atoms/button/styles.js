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

const getButtonSize = ($size) => {
  const styleObjectSize = {};

  switch ($size) {
    case 'small':
      styleObjectSize.height = '32px';
      styleObjectSize.width = '100px';
      break;
    case 'compact':
      styleObjectSize.height = '30px';
      styleObjectSize.width = '80px';
      break;
    case 'medium':
      styleObjectSize.height = '45px';
      styleObjectSize.width = '150px';
      break;
    case 'large':
      styleObjectSize.height = '55px';
      styleObjectSize.width = '180px';
      styleObjectSize.fontSize = '18px';
      break;
    case 'xlarge':
      styleObjectSize.height = '80px';
      styleObjectSize.width = '190px';
      styleObjectSize.fontSize = '22px';
      break;
    default:
      styleObjectSize.height = '45px';
      styleObjectSize.width = '150px';
  }

  return styleObjectSize;
};

export const StyledButton = styled('button', (props) => {
  const shadowStyle = props.$shadow
    ? {
        boxShadow: `1px 10px 18px ${ButtonTheme.variants[props.$variant].backgroundColor}`,
      }
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
    ...getButtonSize(props.$size),
  };
});
