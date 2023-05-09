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
  background-size: 100% 900px;

  @media (max-width: 768px) {
    background-size: 100% 700px;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-top: 2rem;
  gap: 2rem;
  align-items: center;
  .pagination {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const CarList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1240px;

  .list {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    gap: 20px;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    padding-top: 40px;
    flex: 1;
    margin-top: 30px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 100%;
      flex-wrap: nowrap;
      overflow-y: scroll;
      height: fit-content;
      padding: 16px;
      align-content: stretch;
      justify-content: flex-start;
    }
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
