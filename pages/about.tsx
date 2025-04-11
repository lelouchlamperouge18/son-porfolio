import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';

export default function AboutPage() {
  return (
    <Page
      title="About me"
      description={`Hi. I'm Son. I'm ${
        new Date().getFullYear() - 2000
      } years old from Quang Tri, Vietnam. I graduated from the Faculty of Information Technology - University of Science, Vietnam National University - Ho Chi Minh City (HCMUS). I have working on many projects across finance, education, e-commerce, and management or advertising platforms like CRM systems and virtual exhibitions.`}
    >
      <YoutubeGallery>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PvCoxfT4gK8"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7U4Rx-8fy5E"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HE3qkZSjRlk"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RCGcCMPo_dE"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xAS54msRUk4"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NLHFLGlFwxk"
          title="#1 how the first snow of christmas feels like 🇸🇪 🇳🇴 🇩🇰"
          allowFullScreen
        />
      </YoutubeGallery>
    </Page>
  );
}

const YoutubeGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  iframe {
    flex: 0 1 45%;
    max-width: 560px;
    height: 315px;
  }

  ${media('<=tablet')} {
    flex-direction: column;
    iframe {
      width: 100%;
    }
  }
`;
