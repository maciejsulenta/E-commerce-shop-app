import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
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
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;
export const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
`;
export const Bottom = styled.div`
  margin-top: 20px;
`;
export const ImgShow = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const UsernameShow = styled.span`
  font-weight: 600;
  margin-left: 20px;
`;
export const ShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;
export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;
export const InfoTitle = styled.span`
  margin-left: 10px;
`;
export const UpdateWrap = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const UpdateTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
export const Left = styled.div``;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;
export const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
  display: ${(props) => props.file && "none"};
`;
export const Upload = styled.div`
  display: flex;
  align-items: center;
`;
export const UpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
`;
