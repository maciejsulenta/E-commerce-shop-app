import styled from "styled-components";

export const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
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
  font-weight: 300;
`;
export const TableCellAmount = styled.td`
  font-weight: 300;
`;
export const TableCellStatus = styled.td``;
export const StyledButton = styled.button(
  (props) => `
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
  ${
    props.status === "przyjete" &&
    `
    background-color: #e5faf2;
    color: #3bb077;
  `
  };
  ${
    props.status === "realizowane" &&
    `
    background-color: #ebf1fe;
    color: #2a7ade;
  `
  };
  ${
    props.status === "odrzucone" &&
    `
    background-color: #fff0f1;
    color: #d95087; 
  `
  }
`
);
