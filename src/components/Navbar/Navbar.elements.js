import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #48BB78;;
  border-bottom: 1px solid #000;
`;
export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 990px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Poppins';
  color: #fff;
`;
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${ ({click}) => (click ? 0 : "-100%") };
    flex-direction: column;
    transition: .3s all ease-in;
    background-color: #48BB78;
  }
`;
export const MenuItem = styled.a`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  transition: .3s all ease-in;

  &:hover{
    background-color: rgba(0,0,0,0.3);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled.li`
  text-decoration: none;
  color: #fafafa;

  &:hover{
    color: #fff;
  }
  
`;

export const IconLogoMobile = styled.a`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    color: aqua;
    font-size: 2rem;
  }
`;
