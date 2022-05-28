import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(35, 37, 38, 1) 0%,
    rgba(65, 67, 69, 1) 31%
  );
  position: sticky;
  top: 0px;
  z-index: 999;
  font-size: 20px;
`;
export const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Left = styled.div``;
export const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  background: linear-gradient(90deg, #56ab2f, #a8e063);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #eee;
`;
export const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
