import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -4rem;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const DetailBox = styled.nav`
  position: absolute;
  width: 25rem;
  height: 15rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgba(225, 210, 210, 0.6);
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(255, 150, 150);
`;

export const Context = styled.p`
  font-size: 1.2rem;
  width: 100%;
  height: 55%;
  margin: 5% 0rem 0rem 0rem;
  word-break: keep-all;
  color: rgb(255, 180, 180);
`;

export const ButtonModal = styled.button`
  box-shadow: none;
  background-color: rgb(255, 200, 200);
  color: rgb(255, 150, 150);
  padding: 0.1rem 0.8rem;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(255, 150, 150);
  margin: 0rem 1rem;
  float: right;
`;

export const ButtonWrap = styled.nav`
  margin-top: 5%;
  width: 100%;
`;

export const InputModal = styled.input`
  width: 70%;
  padding: 1.2%;
  background-color: rgb(255, 200, 200);
  color: rgb(255, 130, 130);
  box-shadow: none;
  border: 1px solid rgb(255, 150, 150);
`;
