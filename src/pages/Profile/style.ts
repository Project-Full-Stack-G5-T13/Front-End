import styled from "styled-components";
import halfimg from "../../assets/half-back.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  min-height: 100vh;
  background-image: url(${halfimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 100% 500px;

  @media (max-width: 768px) {
    background-size: 100% 400px;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  
  .pagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .align-start {
    align-self: start;
    margin-left: 30px;
  }

  & > section {
    padding: 0 2rem;
  }
`;

export const UserHeader = styled.div`
  width: 100%;
  background-color: var(--grey-9);
  height: 327px;
  padding: 1.2rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  max-width: 1240px;
  @media (min-width: 768px) {
    min-height: 250px;
    padding: 3rem;
  }

  .img-box {
    padding: 1rem;
    background-color: var(--brand-1);
    min-width: 92px;
    min-height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .name-box {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .description {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey-2);
  }
`;

export const NotFound = styled.div`
  width: 100%;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
