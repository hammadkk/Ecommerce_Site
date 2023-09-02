import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Heading>
        &copy; {new Date().getFullYear()}
        <span> E-commerce </span>
      </Heading>
      <Rights>All rights reserved</Rights>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  span {
    color: var(--clr-primary-5);
  }

  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

const Heading = styled.h5`
  color: var(--clr-white);
  margin: 0.1rem;
  font-weight: 400;
  text-transform: none;
  line-height: 1.25;
`;

const Rights = styled.h5`
  color: var(--clr-white);
  margin: 0.1rem;
  font-weight: 400;
  text-transform: none;
  line-height: 1.25;
`;

export default Footer;
