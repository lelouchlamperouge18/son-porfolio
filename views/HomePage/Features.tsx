import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/p1.png',
    title: 'Mauritius Expo',
    description: 'Mauritius Expo powered by the Economic Development Board (EDB) of Mauritius',
    url: 'https://mauritiusexpo.com/'
  },
  {
    imageUrl: '/grid-icons/p2.jpg',
    title: 'Perkify',
    description: 'The AI-powered loyalty platform that turns first-time diners into regulars and boosts your bottom line',
    url: 'https://perkify.com.au/'
  },
  {
    imageUrl: '/grid-icons/p3.jpg',
    title: 'Abhi UAE',
    description: 'Reinvent Financial Wellness For Your Business & Employees',
    url: 'https://abhi.ae/'
  },
  {
    imageUrl: '/grid-icons/p4.png',
    title: 'Edulinx',
    description:
      'A market leader in end-to-end edtech solutions, ranging from English language learning to business and professional skills training',
    url: 'https://www.edulinx.co.jp/'
  },
  {
    imageUrl: '/grid-icons/p5.png',
    title: 'Bookielink',
    description:
      'A licensed sports betting company that operates a variety of betting platforms including its flagship professional betting brokerage, a traditional fixed-odds bookmaker, a betting exchange and a betting account brokerage',
    url: 'https://bookielink.com/'
  },
  {
    imageUrl: '/grid-icons/p6.png',
    title: 'Mahojin',
    description:
      'Search-to-generate AI platform that instantly provides exact images through an ever-expanding and remixable library.',
    url: 'https://app.mahojin.ai/'
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
