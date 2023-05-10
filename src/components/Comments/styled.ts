import styled from "styled-components";

export const Div = styled.div`
  width: 59%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-self: center;
  align-items: flex-start;
  border-radius: 4px;
  gap: 8px;
  background-color: var(--fixed-white);
  min-height:50px;
  max-height: 500px;
  padding: 20px;
  margin-bottom: 30px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--fixed-white);
  }

  ::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: var(--grey-4);
    border-radius: 20px;
  }

  section {
    width: 97%;
    margin: 8px;
    /* height: 240px; */
  }
  .profile-comment {
    font-family: "Inter";
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
  }
  .mainDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .iconDiv2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .iconDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .updateDeleteButton {
    display: flex;
    flex-direction: row;
  }
  span {
    align-self: center;
    color: var(--grey-2);
    font-size: 12px;
    width: 80px;
    margin-left: 12px;
  }
  h3 {
    margin: 8px 0;
    height: 40px;
    width: 160px;
  }
  p {
    font-family: "Inter";
    margin-top: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    margin:18px 0;
    word-break: break-all;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  svg {
    scale: 1.5;
  }

  .updateDiv button {
    padding-top: 3px;
    background-color: var(--grey-10);
    border: none;
    margin: 5px;
    align-items: center;
    width: 16px;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 600;
    color: var(--brand-1);
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
`;
