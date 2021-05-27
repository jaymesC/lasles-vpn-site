import 'normalize.css';

import React from 'react';
import PropTypes from 'prop-types';
import {
  StatSection,
  StyledImg,
  StyledDiv,
  StyledH4,
} from './styles';

/**
 * @description this component shows the various values of the app
 *
 * @return {JSX.Element}
 *
 */
export const Statistics = ({ img, counter, type }) => (
  <>
    <StatSection>
      <StyledImg src={img} alt="" />
      <StyledDiv>
        <h4>
          <strong>{counter}</strong>
          <br />
          <StyledH4>{type}</StyledH4>
        </h4>
      </StyledDiv>
    </StatSection>
  </>
);

Statistics.propTypes = {
  img: PropTypes.string.isRequired,
  counter: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
