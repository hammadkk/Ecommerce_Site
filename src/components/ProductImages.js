import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <MainImage src={main.url} alt="" />
      <Gallery>
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.url}
            alt=""
            active={image.url === main.url}
            onClick={() => setMain(images[index])}
          />
        ))}
      </Gallery>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const MainImage = styled.img`
  width: 100%;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;

  @media (max-width: 576px) {
    height: 300px;
  }

  @media (min-width: 992px) {
    height: 500px;
  }
`;

const Gallery = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
`;

const GalleryImage = styled.img`
  width: 100%;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
  height: 100px;
  cursor: pointer;
  border: ${(props) =>
    props.active ? "2px solid var(--clr-primary-5)" : "none"};

  @media (max-width: 576px) {
    height: 50px;
  }

  @media (min-width: 992px) {
    height: 75px;
  }
`;

export default ProductImages;
