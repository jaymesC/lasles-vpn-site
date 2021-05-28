import React from 'react';
import 'normalize.css';
import {
  StyledArticle,
  StyledArticleOne,
  StyledH1,
  StyledP,
  StyledSvg,
  StyledShowcase,
} from './styles';
import { Button } from '../../atoms';
import { Statistics } from '../../molecules/statistic-item';

export const HomeFragmentFirst = () => {
  const statistics = [
    {
      img: 'user.png',
      counter: '90+',
      type: 'Users',
    },
    {
      img: 'location.png',
      counter: '30+',
      type: 'Locations',
    },
    {
      img: 'Server.png',
      counter: '50+',
      type: 'Servers',
    },
  ];

  return (
    <>
      <StyledArticle>
        <StyledArticleOne>
          <StyledH1>
            Want anything to be
            <br />
            easy with
            <strong>LaslesVPN.</strong>
          </StyledH1>
          <StyledP>
            Provide a network for all your needs with ease and fun using
            <strong>LaslesVPN</strong>
            <br />
            discover interesting features from us.
          </StyledP>
          <Button shadow width={250} variant="primary" size="large">
            Get started
          </Button>
        </StyledArticleOne>
        <StyledSvg>
          <img src="Illustration 1.png" alt="" />
        </StyledSvg>
      </StyledArticle>
      <StyledShowcase>
        {statistics.map((s) => (
          <Statistics key={s.img} {...s} />
        ))}
      </StyledShowcase>
    </>
  );
};
