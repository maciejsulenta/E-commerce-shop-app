import styled from "styled-components";
import { theme } from "../../utils/theme";

export const Container = styled.div`
  padding: 2em 0;
  background-color: ${theme.colors.white};
  display: flex;
  align-items: flex-start;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  text-align: center;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;
export const Logo = styled.span`
  width: fit-content;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  font-weight: 800;
  background: linear-gradient(
    90deg,
    ${theme.colors.darkBlue},
    ${theme.colors.blue}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Desc = styled.p`
  font-size: 0.8em;
  margin-bottom: 0.4em;
  text-align: center;
`;
export const SocialContainer = styled.div`
  display: flex;
  gap: 1em;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.bgc};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Center = styled.div`
  flex: 1;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 0.5em;
`;
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 1em;
  row-gap: 0.5em;
  text-align: center;
  margin-bottom: 1em;
`;
export const ListItem = styled.li`
  font-size: 0.9em;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.blue};
  }
`;
export const Right = styled.div`
  padding: 1em 2em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.9em;
`;
export const ContactItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
`;
export const Payment = styled.img`
  margin-top: 0.5em;
`;
