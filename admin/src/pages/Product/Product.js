import styled from "styled-components";

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  color: #333;
`;
export const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 1em 2em;
  background: linear-gradient(to top, #232526, #414345);
  border-radius: 0.5em;
  cursor: pointer;
  color: #fff;
  font-size: 1em;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Top = styled.div`
  display: flex;
`;
export const TopLeft = styled.div`
  flex: 1;
`;
export const TopRight = styled.div`
  flex: 1;
  padding: 1em;
  margin: 1em;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 1em;
`;
export const InfoWrap = styled.div`
  padding-top: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  gap: 0.5em;
  font-size: 1.1em;
`;
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageInfo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductName = styled.span`
  font-weight: 600;
`;
export const Bottom = styled.div`
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 1em;
  flex: 1;
`;
export const Item = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const Key = styled.span`
  white-space: nowrap;
`;
export const Value = styled.span`
  font-weight: 300;
  width: 30%;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const FormLeft = styled.div`
  background-color: rgba(35, 37, 38, 0.4);
  padding: 2em;
  border-radius: 1em;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const FormRight = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2em;
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageUpload = styled.img`
  height: 22em;
  aspect-ratio: 1/1.5;
  border-radius: 1em;
  object-fit: cover;
  margin-bottom: 2em;
`;
export const Label = styled.label`
  margin-bottom: 0.3em;
  padding-top: ${(props) => (props.padd ? "0" : "1.2em")};
`;
export const Input = styled.input`
  font-size: 1em;
  border: none;
  width: 100%;
  padding: 1em 0 1em 1em;
  border-radius: 1em;
  outline: none;
  display: ${(props) => props.file && "none"};
  &:focus {
    -webkit-box-shadow: 0px 0px 15px 0px #e0eafc;
    box-shadow: 0px 0px 15px 0px #e0eafc;
  }
`;
export const Select = styled.select`
  height: 4em;
  width: 8em;
  padding: 0 1em;
  color: #333;
  outline: none;
  border-radius: 1em;
  border: none;
  &:focus {
    -webkit-box-shadow: 0px 0px 15px 0px #e0eafc;
    box-shadow: 0px 0px 15px 0px #e0eafc;
  }
`;
export const Option = styled.option``;
