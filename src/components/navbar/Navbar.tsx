import React from "react";
import styled from "styled-components";
import logo from "./logo2.png";
import { FaBasketShopping } from "react-icons/fa6";

const Nav = styled.nav`
width:60%;
height:60px;
display:flex;
// background-color:gray;
align-items:center;
justify-content:space-between;
font-size:20px;
font-family: font-family: "Nunito Sans", sans-serif;
margin:0 auto;
padding:20px 0;
color:white;
`;
const List = styled.ul`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

const Logo = styled.div`
  background-image: url(${logo});
  width: 90px;
  height: 90px;
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const Bucket = styled(FaBasketShopping)`
  font-size: 32px;
  cursor: pointer;
`;

const ListItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
`;
const ShoppingBasket = styled.div``;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo></Logo>
      <List>
        <ListItem href="/store">Sklep</ListItem>
        <ListItem href="/purchasingAdvice">Doradztwo</ListItem>
        <ListItem href="/about">O Nas</ListItem>
        <ListItem href="/contact">Kontakt</ListItem>
      </List>
      <ShoppingBasket>
        <Bucket />
      </ShoppingBasket>
    </Nav>
  );
};

export default Navbar;
