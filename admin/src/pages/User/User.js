import styled from "styled-components";

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1``;
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
export const UserContainer = styled.div`
  display: flex;
  height: 100%;
`;
export const UserShow = styled.div`
  flex: 1;
  border-radius: 1em;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 2em;
  background-color: #fff;
`;
export const UserHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 16em;
  border-radius: 1em;
  padding-left: 1em;
`;
export const InfoContainer = styled.div`
  height: ${(props) => (props.bgc ? "12em" : "16em")};
  background-color: rgba(35, 37, 38, 0.4);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.02);
  }
`;
export const ImgShow = styled.img`
  height: 12.5em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
`;
export const UsernameShow = styled.span`
  font-size: 2.3em;
  margin-top: 0.4em;
  font-weight: 600;
  color: #333;
  letter-spacing: 0.02em;
`;
export const ShowTitle = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  padding-top: 1em;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  color: #333;
  font-size: 1em;
  padding: 0.3em;
`;
export const InfoTitle = styled.span`
  font-weight: 600;
`;
export const UpdateWrap = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  background-color: #fff;
  margin-left: 1em;
  border-radius: 1em;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  height: 100%;
  display: flex;
`;
export const UpdateTitle = styled.h2`
  font-size: 2.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 1em;
`;
export const Left = styled.div`
  background-color: rgba(35, 37, 38, 0.4);
  padding: 2em;
  border-radius: 1em;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2em;
  height: 100%;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  width: 70%;
`;
export const Label = styled.label`
  margin-bottom: 0.3em;
  font-size: 1em;
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
export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 1em;
  font-weight: 600;
`;
export const UpdateImg = styled.img`
  height: 16em;
  aspect-ratio: 1/1.5;
  border-radius: 1em;
  object-fit: cover;
  margin-bottom: 2em;
`;
