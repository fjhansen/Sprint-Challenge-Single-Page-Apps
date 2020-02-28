import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const LinkContainer = styled.div`

display: flex;
color: green;
flex-direction: row;
justify-content: space-evenly;

`

const LinkNew = styled(Link)`


color: green;
font-size: 3em;


`


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <LinkContainer>
      <LinkNew to="/">Home</LinkNew>
      <LinkNew to="/CharacterList">Character Info!</LinkNew>
      </LinkContainer>
    </header>
  );
}
