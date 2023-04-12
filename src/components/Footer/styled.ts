import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  background-color: var(--grey-0);
  display: flex;
  height: 140px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    width: 1250px;
  }

  figure {
    align-items: center;
    color: var(--fixed-white);
    margin-left: 36px;
  }

  p {
    color: var(--fixed-white);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  section {
    width: 154px;
    margin-right: 36px;
    display: flex;
    justify-content: center;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: var(--grey-1);
    color: white;
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 18px;
    padding-top: 10px;
    text-decoration: none;
    border-radius: 4px;
    :hover {
      color: white;
    }
  }
  @media screen and (width: 1024px) {
    height: 90px;
  }

  @media screen and (max-width: 660px) {
    
    div{
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      height: 160px;
    }

    section {
      margin-right: 0px;
    }

    p {
      font-size: 14px;
    }
    
    a{
      margin-right: 0px;
    }
  }

  @media screen and (max-width: 320px) {
    p {
      font-size: 12px;
    }
  }
`;

export default Container;