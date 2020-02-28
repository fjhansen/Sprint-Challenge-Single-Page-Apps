import React, { useState } from "react";
import { InputGroup, Input } from "reactstrap";
import styled from "styled-components"

export default function SearchForm(props) {
 const handleImputChange = event => {
   props.setSearch(event.target.value);
 }
  console.log("S E A R C H   P R O P S",props)
 
  return (
    <section className="search-form">
     <InputGroup>
     <Input type="text"
            onChange={handleImputChange}
            value={props.search}
            name="search"
            placeholder="Search for a character!"
            autoComplete="off"
            

            />
     
     </InputGroup>
    </section>
  );
}
