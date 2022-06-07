import styled from "styled-components";
import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <StyledDiv>
      <StyledTop>
        <LeftDiv>
          <h2>{title}</h2>
          <p>{calories.toFixed(0)} kcal</p>
        </LeftDiv>
        <StyledImg src={image} alt="" />
      </StyledTop>
      <StyledBottom>
        <ul>
          {ingredients.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <StyledA href={url} target="_blank">
          Click here for full recipe!
        </StyledA>
      </StyledBottom>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 90%;
  min-height: 70vh;
  background-color: rgba(255, 255, 255, 0.15);
  text-align: center;
  border-radius: 30px;
  margin-top: 3rem;
`;
const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  height: 20vh;
  margin-top: 3rem;
  gap: 1rem;
`;
const LeftDiv = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin: 0;
  }
  & > p {
    font-size: 2rem;
    color: #55828b;
  }
  & > h2 {
    font-size: 2rem;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;
const StyledBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  min-height: 30vh;
  margin-top: 2rem;
  padding: 0 2rem 1rem 2rem;
`;
const StyledA = styled.a`
  color: #55828b;
  text-decoration: none;
`;

export default Recipe;
