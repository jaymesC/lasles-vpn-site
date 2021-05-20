import React from 'react';
import 'normalize.css';
import {
  StyledArticle,
  StyledArticleOne,
  StyledH1,
  StyledP,
  StyledSvg,
  Showcase,
} from './styles';
import Button from '../../atoms/SectionButton';
import Statistics from '../StatisticsSection';

const SectionA = () => (
  <>
    <StyledArticle>
      <StyledArticleOne>
        <StyledH1>
          Want anything to be
          {' '}
          <br />
          easy with
          {' '}
          <strong>LaslesVPN.</strong>
        </StyledH1>
        <StyledP>
          Provide a network for all your needs with ease and fun using
          {' '}
          <strong>LaslesVPN</strong>
          {' '}
          <br />
          discover interesting features from us.
        </StyledP>
        <Button>Get started</Button>
      </StyledArticleOne>
      <StyledSvg>
        <img src="Illustration 1.png" alt="" />
      </StyledSvg>
    </StyledArticle>
    <Showcase>
      <Statistics
        img="user.png"
        counter="90+"
        type="users"
      />
      <Statistics
        img="location.png"
        counter="30+"
        type="locations"
      />
      <Statistics
        img="Server.png"
        counter="50+"
        type="servers"
      />
    </Showcase>
  </>
);

export default SectionA;