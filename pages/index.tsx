import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import AdvancedSection from 'components/AdvancedSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <AdvancedSection imageUrl="QEa8xBjMCCQ" title="Hoang Cong Son" overTitle="MY 1ST YOUTUBE CHANNEL">
            <p>
              I hope you enjoy my adventure videos 💌{' '}
              <Link href="https://www.youtube.com/@hoangcongson4146">
                <a href="https://www.youtube.com/@hoangcongson4146" target="_blank" rel="noopener noreferrer">
                  𝚂𝚊𝚟𝚎 𝚝𝚑𝚎 𝚖𝚎𝚖𝚘𝚛𝚒𝚎𝚜
                </a>
              </Link>
            </p>
          </AdvancedSection>
          <AdvancedSection imageUrl="5zVoeHwAAJo" title="Learn Frontend With Son" overTitle="MY 2ND YOUTUBE CHANNEL" reversed>
            <p>
              Frontend Programming Tutorial 💌{' '}
              <Link href="https://www.youtube.com/@learnfewithson">
                <a href="https://www.youtube.com/@learnfewithson" target="_blank" rel="noopener noreferrer">
                  Take a look now
                </a>
              </Link>
            </p>
            <ul>
              <li>English & Vietnamese</li>
              <li>For beginners</li>
              <li>Live coding</li>
            </ul>
          </AdvancedSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
