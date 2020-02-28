import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

export default function CharacterCard() {
  return (
 
  
   <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          
        </CardBody>
      </Card>
  
  )
}
