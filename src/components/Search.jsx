import styled from "styled-components";

const Search = ({ search, updateSearch, getSearch }) => {
  return (
    <StyledForm className="search-form">
      <StyledInput
        className="search-input"
        type="text"
        value={search}
        onChange={updateSearch}
      />
      <StyledButton className="search-button" type="submit" onClick={getSearch}>
        Search
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledInput = styled.input`
  height: 2rem;
  width: 20rem;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  border: 1px solid #1c3041;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.15);

  &:focus {
    outline: none;
  }
`;
const StyledButton = styled.button`
  background-color: inherit;
  border: 1px solid #364958;
  border-radius: 15px;
  height: 2rem;
  padding-inline: 0.75rem;
  color: #364958;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    border: 1px solid #55828b;
    background-color: #55828b;
    color: #f7e3af;
  }
`;

export default Search;
