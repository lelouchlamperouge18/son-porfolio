import NextLink from 'next/link';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>GET IN TOUCH WITH ME</OverTitle>
          <SectionTitle>Discover My Work and Story</SectionTitle>
          <Description>
            Take a look at the projects I have worked on and learn more about who I am, what I do, and what drives me as a developer. Whether
            you are here to see my technical skills in action or just curious about my background, choose a path below to get started ⬇️
          </Description>
          <ButtonGroup>
            <Link href="/about" passHref>
              <Button>
                More ABOUT ME <span>&rarr;</span>
              </Button>
            </Link>
            <Link href="/projects" passHref>
              <OutlinedButton transparent>
                My PROJECTS <span>&rarr;</span>
              </OutlinedButton>
            </Link>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
