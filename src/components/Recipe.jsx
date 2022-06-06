import styled from "styled-components";
import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <StyledDiv>
      <StyledTop>
        <LeftDiv>
          <h1>{title}</h1>
          <p>{calories.toFixed(0)} kcal</p>
        </LeftDiv>
        <StyledImg src={image} alt="" />
      </StyledTop>
      <StyledBottom>
        <ul>
          {ingredients.slice(0, 5).map((item) => (
            <li>{item.text}</li>
          ))}

          {ingredients.length > 5 ? (
            <StyledClick>Click to see all ingredients and more</StyledClick>
          ) : (
            <StyledClick>Click to see more</StyledClick>
          )}
        </ul>
      </StyledBottom>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 40%;
  min-height: 50vh;
  background-color: rgba(255, 255, 255, 0.15);
  text-align: center;
  border-radius: 30px;
  margin-top: 3rem;
  & * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  height: 20vh;
  padding-top: 2rem;
  gap: 1rem;
`;
const LeftDiv = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  /* align-content: center; */
  & > * {
    margin: 0;
  }
  & > p {
    font-size: 2rem;
  }
`;
const StyledImg = styled.img`
  /* width: 100%; */
  height: 100%;
  border-radius: 50%;
`;
const StyledBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;
const StyledClick = styled.p`
  color: #454545;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export default Recipe;
