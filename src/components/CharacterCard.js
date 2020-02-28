import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import styled from "styled-components"

const CardDiv = styled.div `
    width: 30%;
    display: flex;
    color: green;
    

`;

export default function CharacterCard(props) {
  console.log("P R O P S",props)
  return (
 
  <CardDiv>
   <Card body inverse style={{backgroundColor:"grey"}} key={props.key}>   
   
   <CardImg src={props.image}></CardImg>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          
          <CardText>
            <p>{props.species}<p>{props.sex}</p></p>

            </CardText>
          
          
        </CardBody>
      </Card>
  </CardDiv>
  )
}
