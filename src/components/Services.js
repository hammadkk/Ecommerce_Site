import React from "react";
import styled from "styled-components";
import { services } from "./data";

const Services = () => {
  return (
    <Wrapper>
      <SectionCenter>
        <Header>
          <Heading>
            custom furniture <br /> built only for you
          </Heading>
          <Paragraph>
            Our team of experienced designers can work with you to create a
            custom furniture design that perfectly fits your unique style and
            needs
          </Paragraph>
        </Header>
        <ServicesCenter>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <Service key={id}>
                <IconWrapper>{icon}</IconWrapper>
                <Title>{title}</Title>
                <Description>{text}</Description>
              </Service>
            );
          })}
        </ServicesCenter>
      </SectionCenter>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--clr-primary-10);
`;

const SectionCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

const Header = styled.article`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h3`
  color: var(--clr-primary-1);
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  color: var(--clr-primary-3);
  line-height: 1.8;
  margin-bottom: 0;
`;

const ServicesCenter = styled.div`
  margin-top: 4rem;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
`;

const Service = styled.article`
  background: var(--clr-primary-7);
  text-align: center;
  padding: 2.5rem 2rem;
  border-radius: var(--radius);

  p {
    color: var(--clr-primary-2);
  }
`;

const IconWrapper = styled.span`
  width: 4rem;
  height: 4rem;
  display: grid;
  margin: 0 auto;
  place-items: center;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: var(--clr-primary-10);
  color: var(--clr-primary-1);

  svg {
    font-size: 2rem;
  }
`;

const Title = styled.h4`
  color: var(--clr-primary-1);
`;

const Description = styled.p`
  color: var(--clr-primary-2);
`;

export default Services;
