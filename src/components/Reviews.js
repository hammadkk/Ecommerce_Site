import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import styled from "styled-components";
import { reviews } from "./data";

const Reviews = () => {
  const people = reviews;
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex + 1) % people.length);
  };

  const prevSlide = () => {
    setIndex((oldIndex) => (oldIndex - 1 + people.length) % people.length);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % people.length);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [people.length]);

  return (
    <Section>
      <Title>
        <h2>reviews</h2>
      </Title>
      <SectionCenter>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position =
            personIndex === index
              ? "activeSlide"
              : personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ? "lastSlide"
              : "nextSlide";

          return (
            <Article className={position} key={id}>
              <PersonImg src={image} alt={name} />
              <h4>{name}</h4>
              <p>{title}</p>
              <p>{quote}</p>
              <FaQuoteRight />
            </Article>
          );
        })}
        <ButtonLeft onClick={prevSlide}>
          <FiChevronLeft />
        </ButtonLeft>
        <ButtonRight onClick={nextSlide}>
          <FiChevronRight />
        </ButtonRight>
      </SectionCenter>
    </Section>
  );
};

const Section = styled.section`
  width: 90vw;
  margin: 5rem auto;
  max-width: var(--max-width);
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionCenter = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const PersonImg = styled.img`
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
`;

const Article = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: var(--transition);

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }
`;

const ButtonRight = styled.button`
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  right: 0;

  &:hover {
    background: var(--clr-primary-5);
  }
`;

const ButtonLeft = styled.button`
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  left: 0;

  &:hover {
    background: var(--clr-primary-5);
  }
`;

export default Reviews;
