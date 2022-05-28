import styled from "styled-components";

import { Container } from "../../components/Container";
export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
export const Button = styled.button`
  width: fit-content;
  border: none;
  padding: 10px;
  background-color: cadetblue;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export const Top = styled.div`
  display: flex;
`;
export const TopLeft = styled.div`
  flex: 1;
`;
export const TopRight = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const InfoWrap = styled.div`
  padding-top: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
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
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Item = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;
export const Key = styled.span``;
export const Value = styled.span`
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;
export const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const ImageUpload = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
export const Label = styled.label``;
export const Input = styled.input``;
export const Select = styled.select``;
export const Option = styled.option``;
