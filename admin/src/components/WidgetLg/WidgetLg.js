import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  padding: 2em 1em;
  background-color: #fff;
  border-radius: 1em;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const TableRow = styled.thead``;
export const TableHeader = styled.th`
  text-align: left;
`;
export const TableCellName = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
export const TableCellDate = styled.td`
  font-weight: 400;
`;
export const TableCellAmount = styled.td`
  font-weight: 400;
`;
export const TableCellStatus = styled.td``;
export const StyledButton = styled.button(
  (props) => `
    width: 7em;
    height: 2.5em;
    border: none;
    border-radius: .5em;
    color: #fff;
    font-size: .8em;
    cursor: pointer;
    transition: all .1s ease;
    &:hover {
      transform: scale(1.05);
    }
  ${
    props.status === "przyjete" &&
    `
    background: linear-gradient(to left, #6DD5FA, #2980B9);;
  `
  };
  ${
    props.status === "zrealizowane" &&
    `
    background: linear-gradient(to right, #56ab2f, #a8e063);
  `
  };
  ${
    props.status === "odrzucone" &&
    `
    background: linear-gradient(to right, #904e95, #e96443);
  `
  };
`
);
