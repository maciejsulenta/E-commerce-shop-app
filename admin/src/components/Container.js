import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  background-color: #eee;
  padding: ${(props) => (props.padd ? "1em" : "0")};
`;
