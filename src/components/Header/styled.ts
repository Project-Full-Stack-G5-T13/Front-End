import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px;
  position: fixed;
  background-color: var(--gray-10);
  top: 0;

  .container-header {
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 200px;
  }

  svg {
    scale: 2.1;
  }

  .closed-menu {
    scale: 1.5;
    font-weight: bold;
  }

  .mobile {
    padding: 20px 0px;
    border-top: 1px solid var(--gray-3);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 93%;
    gap: 23px;
    font: var(--font-text-0);
  }

  .mobile p {
    cursor: pointer;
  }

  .mobile :nth-child(3) {
    padding-bottom: 30px;
    border-bottom: 1px solid var(--gray-3);
  }

  .mobile:nth-child(4) {
    width: 100px;
    height: 40px;
    border: none;
  }
  .mobile button {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 1px solid var(--gray-3);
    border-radius: var(--radius-1);
    cursor: pointer;
  }

  .desktop-menu {
    width: 300px;
    display: flex;
    justify-content: right;
    gap: 30px;
    align-items: center;
  }

  .desktop-menu :nth-child(1) {
    color: var(--brand-1);
    cursor: pointer;
  }

  .desktop-menu button {
    width: 140px;
    height: 40px;
    background-color: transparent;
    border: 1px solid var(--gray-3);
    border-radius: var(--radius-1);
    cursor: pointer;
  }
`;

export default HeaderStyled;
