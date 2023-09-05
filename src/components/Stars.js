import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;

  const starIcons = Array.from({ length: 5 }, (_, index) => {
    let starIcon;
    if (index < fullStars) {
      starIcon = <BsStarFill />;
    } else if (index === fullStars && hasHalfStar) {
      starIcon = <BsStarHalf />;
    } else {
      starIcon = <BsStar />;
    }

    return <StarIcon key={index}>{starIcon}</StarIcon>;
  });

  return (
    <Wrapper>
      <StarsContainer>{starIcons}</StarsContainer>
      <Reviews>({reviews} customer reviews)</Reviews>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  color: #ffb900;
  font-size: 1rem;
  margin-right: 0.25rem;
`;

const Reviews = styled.p`
  margin-left: 0.5rem;
  margin-bottom: 0;
`;

export default Stars;
