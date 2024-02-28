import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import styled from "styled-components";
import sofa from "./sofaphoto.jpg";
import { CiSearch } from "react-icons/ci";
import fetchData from "../../api/api";

const Header = styled.header`
  background-image: url(${sofa});
  background-size: cover;
  background-attachment: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;

  flex-direction: column;
  align-items: center;
  font-size: 14px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 105px;
    background: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
    z-index: 1;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 46px;
  padding: 20px 0;
`;
const Subtitle = styled.p`
  text-align: center;
  font-size: 26px;
  width: 35%;
  margin: 0 auto;
  padding: 20px 0 40px;
`;
const Search = styled.div`
  border: 1px solid whitesmoke;
  position: relative;
  border-radius: 30px;
  background-color: rgba(255, 250, 250, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0px 5px;
  width: 18%;
`;
const SearchInput = styled.input`
  width: 80%;
  padding: 10px 5px 10px 10px;
  align-items: center;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  background-color: transparent;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
    &::placeholder {
      visibility: hidden;
    }
  }
`;
const SearchIcon = styled.span`
  background-color: #eebd56;
  display: grid;
  place-items: center;
  height: 32px;
  width: 32px;
  font-size: 24px;
  border-radius: 25px;
  cursor: pointer;
`;

export const Main: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    fetchData();
    console.log();
  }, []);
  return (
    <Header>
      <Navbar />
      <Title>Stwórz Swoje Wymarzone Wnętrze</Title>
      <Subtitle>
        Nasze produkty zostały stworzone z zamiłowania do mebli, dzięki temu są
        solidne i niepowtarzalne
      </Subtitle>
      <Search>
        <SearchInput
          value={inputValue}
          placeholder={"Szukaj przedmiotu"}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={() => {
            setInputValue("");
          }}
        ></SearchInput>
        <SearchIcon>
          <CiSearch />
        </SearchIcon>
      </Search>
    </Header>
  );
};
