import styled from '@emotion/styled';

const Section = styled.section`
  padding-top: 36px;
  padding-bottom: 36px;
  text-align: center;
`;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1280px;
`;

const Heading = styled.h1`
  margin-bottom: 40px;
  font-size: 56px;
  color: #1276b8;
  animation: heading 4000ms infinite;

  @keyframes heading {
    0% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

export { Section, Container, Heading };
