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

const Wrapper = styled.section`
  .main {
    height: 600px;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
  }
`;

const MainImage = styled.img`
  width: 100%;
  display: block;
  border-radius: var(--radius);
  object-fit: cover;
`;

const Gallery = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;

  @media (max-width: 576px) {
    img {
      height: 50px;
    }
  }

  @media (min-width: 992px) {
    img {
      height: 75px;
    }
  }
`;

const GalleryImage = styled.img`
  height: 100px;
  cursor: pointer;
  border: ${(props) =>
    props.active ? "2px solid var(--clr-primary-5)" : "none"};
`;

export default ProductImages;
