import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <Content>
        <h1>
          Design your <br />
          comfort zone
        </h1>
        <p>
          Our e-commerce platform offers a wide range of products, fast
          shipping, hassle-free returns, and exceptional customer service. Shop
          with us for great deals on high-quality products.
        </p>
        <StyledLink to="/products" className="btn hero-btn">
          shop now
        </StyledLink>
      </Content>
      <ImageContainer>
        <MainImage src={heroBcg} alt="nice table" />
        <AccentImage src={heroBcg2} alt="person working" />
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 40em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .content {
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
  }
`;

const Content = styled.article`
  margin: 0 auto;

  @media (min-width: 992px) {
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

const ImageContainer = styled.article`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: relative;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: 550px;
  position: relative;
  border-radius: var(--radius);
  display: block;
  object-fit: cover;
`;

const AccentImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 250px;
  transform: translateX(-50%);
  border-radius: var(--radius);
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
`;

export default Hero;
