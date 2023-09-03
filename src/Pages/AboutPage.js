import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/breadcrumb";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Main>
      <BreadCrumb title="about" />
      <Wrapper className="page section section-center">
        <AboutImage src={aboutImg} alt="nice desk" />
        <Article>
          <Title>
            <h2>our story</h2>
          </Title>
          <Paragraph>
            Our team of experienced designers can work with you to create a
            custom furniture design that perfectly fits your unique style and
            needs. From selecting the right materials and finishes to optimizing
            the functionality of the piece, we'll help you bring your vision to
            life. All of our furniture is made right here in the USA, ensuring
            that you're getting a quality piece that was crafted with care and
            attention to detail. By supporting American artisans and
            manufacturers, you're also supporting local economies and small
            businesses.
          </Paragraph>
        </Article>
      </Wrapper>
    </Main>
  );
};

const Main = styled.main``;

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 678px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  display: block;
  border-radius: var(--radius);
  height: 500px;
  object-fit: cover;
`;

const Article = styled.article``;

const Title = styled.div`
  text-align: left;
`;

const Paragraph = styled.p`
  line-height: 2;
  max-width: 45em;
  margin: 0 auto;
  margin-top: 2rem;
  color: var(--clr-grey-5);
`;

export default AboutPage;
