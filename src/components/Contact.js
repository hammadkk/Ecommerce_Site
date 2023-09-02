import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <Heading>Join our newsletter and get 20% off</Heading>
      <Container className="section-center">
        <Paragraph>Subscribe Or Join Now to get 20% on all Products</Paragraph>
        <Form className="contact-form">
          <Input
            type="email"
            className="form-input"
            placeholder="enter email"
          />
          <SubmitButton type="submit" className="submit-btn">
            subscribe
          </SubmitButton>
        </Form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  margin: 0 auto;

  @media (min-width: 1280px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  width: 90vw;
  max-width: 800px;
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-top: 2rem;
  }
`;

const Heading = styled.h3`
  width: 90vw;
  max-width: 800px;
  text-transform: none;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-5);

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const Form = styled.form`
  width: 90vw;
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-black);
  border-right: none;
  color: var(--clr-grey-3);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);

  &::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
`;

const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--clr-black);
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  background: var(--clr-primary-5);
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  color: var(--clr-black);

  &:hover {
    color: var(--clr-white);
  }
`;

export default Contact;
