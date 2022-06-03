import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Wrapper = styled.div`
  padding: 2.5em;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3em;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
`;
export const Image = styled.div`
  margin: 0 auto;
  flex: 1;
  width: 80%;
  height: 80vh;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top center;
  border-radius: 1em;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 70vh;
  }
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 2.5em;
  background-color: ${theme.colors.platinum};
  border-radius: 1em;
`;
export const Title = styled.h2`
  font-size: 1.3em;
  width: 80%;
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 1em 0;
  width: 80%;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 2em;
`;
export const FilterContainer = styled.div`
  width: 20em;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  width: 100%;
  height: fit-content;
  padding: 0.5em 0;
`;
export const FilterTitle = styled.span`
  flex: 1;
  font-size: 1.2em;
  font-weight: 200;
`;
export const ColorsWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
  padding: 0 0.5em;
`;
export const FilterColor = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: all 0.1s ease;
  &:active {
    transform: scale(1.2);
  }
`;
export const FilterSize = styled.select`
  flex: 1;
  font-family: ${theme.fonts};
  color: ${theme.colors.black};
  padding: 1em 0 1em 1em;
  border: none;
  border-radius: 1em;
  cursor: pointer;
`;
export const FilterSizeOption = styled.option``;
export const AddContainer = styled.div`
  width: 20em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 0.3em;
`;

export const Amount = styled.span`
  width: 2em;
  height: 2em;
  border-radius: 1em;
  border: 2px solid ${theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Button = styled.button`
  flex: 1;
  font-family: ${theme.fonts};
  padding: 1em 0.5em;
  outline: none;
  border: none;
  border-radius: 1em;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.platinum};
  transition: all 0.2s ease;
  &:hover {
    background-color: ${theme.colors.darkBlue};
  }
`;
