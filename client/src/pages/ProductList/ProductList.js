import styled from "styled-components";
import { theme } from "../../utils/theme";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const FilterText = styled.span`
  font-size: 1em;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Select = styled.select`
  padding: 1em;
  font-family: ${theme.fonts};
  border-radius: 1em;
  color: ${theme.colors.black};
`;
export const Option = styled.option`
  border-radius: 1em;
  width: 80%;
`;
